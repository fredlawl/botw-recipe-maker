import ItemStack from "./ItemStack";
import Entity, {EntityType, TypedEntity} from "../Entity";
import Material from "./Material";
import Inventory from "../inventory/Inventory";

export enum Logic {
	AND,
	OR
}

export class RecipeIngredient {
	public readonly entity: TypedEntity<any>;
	public readonly amount: number;

	/**
	 * @param entity
	 * @param amount Amount is clamped to zero if a lesser value is passed. eg. -1 becomes 0
	 */
	public constructor(entity: TypedEntity<any>, amount: number) {
		this.entity = entity;
		this.amount = amount < 0 ? 0 : amount;
	}

	public matches(material: ItemStack<Material>): boolean {
		const matches = (this.entity.isType(EntityType.Category)) ? this.categoryMatch(material.item) : this.materialMatch(material.item);
		return matches && this.amount <= material.stack;
	}

	public categoryMatch(material: Material): boolean {
		return material.categoryIdentifiers.includes(this.entity.id);
	}

	public materialMatch(material: Material): boolean {
		return this.entity.id === material.id;
	}
}

export default class Recipe extends Entity<Recipe> {
	public readonly name: string;
	public readonly recipeLogic: any;
	private _craftableMaterials: ItemStack<Material>[] = [];
	private _stack: number = 0;
	private _compositeKey = '';

	public static clone(prevRecipe: Recipe): Recipe {
		const newRecipe = new Recipe(prevRecipe.name, prevRecipe.recipeLogic);
		newRecipe._id = prevRecipe._id;
		newRecipe._stack = prevRecipe._stack;
		newRecipe._craftableMaterials = [...prevRecipe._craftableMaterials];
		return newRecipe;
	}

	public static craftable(recipe: Recipe, materials: ItemStack<Material>[]): Recipe {
		recipe = Recipe.clone(recipe);
		recipe._craftableMaterials = materials;
		recipe._compositeKey = [
			recipe._id,
			...recipe._craftableMaterials.map(m => m.item.id + '_' + m.stack)
		].join('_');
		return recipe;
	}

	/**
	 * @param name
	 * @param recipeLogic
	 * Logic is represented in this language:
	 * EXPR := [
	 * 		OPERATOR,
	 * 		EXPR | ITEM ...
	 * ]
	 *
	 * OPERATOR := Logic
	 * ITEM := RecipeIngredient(..., ..., ...)
	 *
	 * Example using strings to illustrate the point (types are incorrect):
	 * [
	 * 		"and",
	 * 		[
	 * 			"or",
	 * 			"strawberry",
	 * 			"banana",
	 * 			[
	 * 				"and",
	 * 				...
	 * 			]
	 * 		],
	 * 		"orange",
	 * 		"ice",
	 * 	]
	 *
	 * 	See ./data/recipes.ts for examples.
	 */
	constructor(name: string, recipeLogic: any[]) {
		super(name);
		this.name = name;
		this.recipeLogic = recipeLogic;
	}

	/**
	 * Returns a copy of this recipe that's craftable if and only if the
	 * materials match. Once a recipe is craftable, we can proceed to
	 *
	 * @param inventory
	 * @return If this recipe couldn't be crafted, we return null, otherwise,
	 * return a recipe that may be crafted.
	 */
	public makeup(inventory: Inventory): Recipe[] {
		let materials: ItemStack<Material>[] = [];
		let recipies: Recipe[] = [];

		if (!this.recipeLogic.length || !inventory.totalCount) {
			return recipies;
		}

		const inventoryItems = inventory.items;

		// Pulls all the combinations we can make of this item
		while ((materials = this.makeupHelper(inventoryItems, this.recipeLogic)) && materials.length > 0) {
			recipies.push(Recipe.craftable(this, materials));
		}

		if (!recipies.length) {
			return recipies;
		}

		/*
			Now that we have the recipes & their combinations, we can
			now stack them based on their uniqueness.
		 */
		const uniqueRecipeStacks: any = {};
		for (let j = 0; j < recipies.length; j++) {
			const recipe = recipies[j];
			const offset = (j % 5) + 1;
			let lookupKey = `${recipe.id}_${recipe.materials.map(m => m.item.id).join('_')}`;
			const recipeQualifiesForMaterialGrouping = recipe.materials.length === 1 && recipe.materials[0].stack === 1;

			if (recipeQualifiesForMaterialGrouping) {
				lookupKey += `_${offset}`;
			}

			if (!uniqueRecipeStacks[lookupKey]) {
				uniqueRecipeStacks[lookupKey] = recipe;

				/*
					For items with just 1 material to make, they can be grouped
					together in the following ways:
						1x, 2x, 3x, 4x, 5x
				 */
				if (recipeQualifiesForMaterialGrouping) {
					const stackCnt =  Math.floor((inventory.item(recipe.materials[0].item)?.stack || 0) / offset);
					recipe.materials[0] = new ItemStack<Material>(recipe.materials[0].item, offset);
					uniqueRecipeStacks[lookupKey]._stack = stackCnt;
					continue;
				}
			}

			if (!recipeQualifiesForMaterialGrouping) {
				uniqueRecipeStacks[lookupKey]._stack += 1;
			}
		}

		return Object.values(uniqueRecipeStacks);
	}

	/*
	 * Recursively check matching of our inventory to the ingredients
	 * for the recipe.
	 */
	private makeupHelper(inventory: ItemStack<Material>[], recipeLogic: any[]): ItemStack<Material>[] {
		const logicOp = recipeLogic[0];
		const ingredients: RecipeIngredient[] = recipeLogic.slice(1, recipeLogic.length);
		let materials: ItemStack<Material>[] = [];
		let matchCounter = 0;
		const rootIngredients = [];

		// Do all nested logic first
		for (const ingredient of ingredients) {
			if (Array.isArray(ingredient)) {
				const mats = this.makeupHelper(inventory, ingredient);
				materials = [...materials, ...mats];
				matchCounter += (mats.length > 0) ? 1 : 0;
				continue;
			}

			rootIngredients.push(ingredient);
		}

		for (const ingredient of rootIngredients) {
			for (let i = 0; i < inventory.length; i++) {
				let material = inventory[i];
				if (ingredient.matches(material)) {
					materials.push(new ItemStack<Material>(material.item, ingredient.amount));
					inventory[i] = material.decrement(ingredient.amount);
					matchCounter++;
					break;
				}
			}
		}

		if (logicOp === Logic.AND && matchCounter < ingredients.length) {
			return [];
		}

		if (logicOp === Logic.OR && matchCounter <= 0) {
			return [];
		}

		return materials;
	}

	get isCraftable(): boolean {
		return !this._craftableMaterials.length;
	}

	get materials(): ItemStack<Material>[] {
		return this._craftableMaterials;
	}

	get stack(): number {
		return this._stack;
	}

	public setStack(stack: number): Recipe {
		const cloned = Recipe.clone(this);
		cloned._stack = stack;
		return cloned;
	}

	get compositeKey(): string {
		return this._compositeKey;
	}
}
