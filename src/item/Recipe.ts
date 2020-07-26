import ItemStack from "./ItemStack";
import Entity from "../Entity";
import {Item} from "./Item";
import Material from "./Material";

export enum Logic {
	AND,
	OR
}

export class RecipeIngredient {
	public readonly entity: Entity<any>;
	public readonly amount: number;

	/**
	 * @param entity
	 * @param amount Amount is clamped to zero if a lesser value is passed. eg. -1 becomes 0
	 */
	public constructor(entity: Entity<any>, amount: number) {
		this.entity = entity;
		this.amount = amount < 0 ? 0 : amount;
	}

	public matches(entity: Entity<any>, amount: number): boolean {
		if (this.entity.id !== entity.id) {
			return false;
		}

		return amount >= this.amount;
	}
}

export default class Recipe extends Entity<Recipe> {
	public readonly name: string;
	public readonly recipeLogic: any;
	private _craftableMaterials: ItemStack<Material>[] = [];
	private _stack: number = 0;

	public static clone(prevRecipe: Recipe): Recipe {
		const newRecipe = new Recipe(prevRecipe.name, prevRecipe.recipeLogic);
		newRecipe._id = prevRecipe._id;
		return newRecipe;
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
	 * @param ingredients
	 * @return If this recipe couldn't be crafted, we return null, otherwise,
	 * return a recipe that may be crafted.
	 */
	public makeup(ingredients: ItemStack<Item>[]): Recipe | null {
		if (!this.recipeLogic.length || !ingredients.length) {
			return null;
		}

		/*
		 * We need to combine the item + categories because we're matching
		 * on either the category or the item itself for recipes.
		 *
		 * We also need these to be unique for more precise matching.
		 */
		let entities: any = {};
		for (const item of ingredients) {
			item.item.categories.map((i) => {
				entities[i.id] = new ItemStack<any>(i, item.stack);
				return [];
			});

			entities[item.item.id] = item;
		}

		const materials = this.makeupHelper(entities, this.recipeLogic);
		const stack = materials.length ? Math.min.apply(null, materials.map<number>(m => m.stack)) : 0;
		if (stack <= 0) {
			return null;
		}

		const recipe = Recipe.clone(this);
		recipe._craftableMaterials = materials;
		recipe._stack = stack;

		return recipe;
	}

	/*
	 * Recursively check matching of our inventory to the ingredients
	 * for the recipe.
	 */
	private makeupHelper(inventory: any, recipeLogic: any[]): ItemStack<Material>[] {
		const logicOp = recipeLogic[0];
		const ingredients: RecipeIngredient[] = recipeLogic.slice(1, recipeLogic.length);
		let materials: ItemStack<Material>[] = [];
		const results = [];

		for (const ingredient of ingredients) {
			if (Array.isArray(ingredient)) {
				const mats = this.makeupHelper(inventory, ingredient);
				materials = [...materials, ...mats];
				results.push(mats.length > 0);
				continue;
			}

			/*
			 * Skip over this ingredient because it's not in the user
			 * inventory. This doesn't matter for our logic because the
			 * conditions still fail for missing items.
			 */
			if (inventory[ingredient.entity.id] === undefined) {
				continue;
			}

			// todo: There's a bug such that we introduce categories as materials, when materials are actually not categories
			//   This needs to be thought about some more.
			if (ingredient.matches(inventory[ingredient.entity.id].item, inventory[ingredient.entity.id].stack)) {
				materials.push(inventory[ingredient.entity.id]);
				results.push(true);
			}
		}

		/*
		 * We have to remove the short-circuit logic to match on all ingredients
		 * that would satisfy the OR condition.
		 */
		if (logicOp === Logic.OR && results.includes(true)) {
			return materials;
		}

		if (logicOp === Logic.AND && !results.includes(false) && results.length === ingredients.length) {
			return materials;
		}

		// Return empty array if we have no matches
		return [];
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
}
