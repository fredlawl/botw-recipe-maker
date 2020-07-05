import ItemStack from "./ItemStack";
import Entity from "../Entity";
import {Item} from "./Item";

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
	 * This isn't a very performant function. Until the performance is
	 * truly terrible, we're taking a more naive implementation to satisfy
	 * tests and to make this work.
	 * @param ingredients
	 */
	public isCraftable(ingredients: ItemStack<Item>[]): boolean {
		if (!this.recipeLogic.length) {
			return true;
		}

		if (!ingredients.length) {
			return false;
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

		return this.isCraftableHelper(entities, this.recipeLogic);
	}

	/*
	 * Recursively check matching of our inventory to the ingredients
	 * for the recipe.
	 */
	private isCraftableHelper(inventory: any, recipeLogic: any[]): boolean {
		const logicOp = recipeLogic[0];
		const ingredients: RecipeIngredient[] = recipeLogic.slice(1, recipeLogic.length);
		const results = [];

		for (const ingredient of ingredients) {
			if (Array.isArray(ingredient)) {
				results.push(this.isCraftableHelper(inventory, ingredient));
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

			if (ingredient.matches(inventory[ingredient.entity.id].item, inventory[ingredient.entity.id].stack)) {
				// Quick short circuit because we know there's at least 1 match
				if (logicOp === Logic.OR)
					return true;

				results.push(true);
			}
		}

		return !results.includes(false) && results.length === ingredients.length;
	}
}
