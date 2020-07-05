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
	 * A pre-craft function that not only determines if a recipe is craftable,
	 * but also provides the materials used to make that decision.
	 *
	 * @param ingredients
	 * @return If this recipe couldn't be crafted, we return null, otherwise,
	 * return an object of the recipe + ingredients used to make the recipe.
	 */
	public makeup(ingredients: ItemStack<Item>[]): { recipe: Recipe, materials: Material[] } | null {
		if (!this.recipeLogic.length) {
			return null;
		}

		if (!ingredients.length) {
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
		if (materials.length === 0) {
			return null;
		}

		return {
			recipe: Recipe.clone(this),
			materials: materials
		}
	}

	/*
	 * Recursively check matching of our inventory to the ingredients
	 * for the recipe.
	 */
	private makeupHelper(inventory: any, recipeLogic: any[]): Material[] {
		const logicOp = recipeLogic[0];
		const ingredients: RecipeIngredient[] = recipeLogic.slice(1, recipeLogic.length);
		let materials: Material[] = [];
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
				materials.push(inventory[ingredient.entity.id].item);
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
}
