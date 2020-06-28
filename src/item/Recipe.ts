import ItemStack from "./ItemStack";
import Entity from "../Entity";
import {Item} from "./Item";

class Recipe extends Entity<Recipe> {
	public readonly name: string;
	public readonly ingredients: string[];

	public static clone(prevRecipe: Recipe): Recipe {
		const newRecipe = new Recipe(prevRecipe.name, prevRecipe.ingredients);
		newRecipe._id = prevRecipe._id;
		return newRecipe;
	}

	constructor(name: string, ingredients: string[]) {
		super(name);
		this.name = name;
		this.ingredients = ingredients;
	}

	public isCraftable(inventoryIngredients: ItemStack<Item>[]): boolean {
		let numberOfMatchedIngredients = 0;

		/*
		 * Technically if a recipe-search can be pulled from thin air with no
		 * ingredients, then it's craftable.
		 */
		if (this.ingredients.length === 0) {
			return true;
		}

		const mappedRecipeIngredients = new Map<string, number>(
			this.ingredients.map(i => [i, 1]));

		let mappedInventoryIngredientsSet: any = {};
		let mappedInventoryIngredients: string[] = [];
		for (const ingredient of inventoryIngredients) {
			mappedInventoryIngredients = [...mappedInventoryIngredients, ...ingredient.item.identifiers];
		}

		for (const ig of mappedInventoryIngredients) {
			mappedInventoryIngredientsSet[ig] = {};
		}

		mappedInventoryIngredients = Object.keys(mappedInventoryIngredientsSet);

		for (const identifier of mappedInventoryIngredients) {
			const recipeIngredientAmount = mappedRecipeIngredients.get(identifier);
			if (recipeIngredientAmount === undefined) {
				continue;
			}

			numberOfMatchedIngredients++;
		}

		return numberOfMatchedIngredients === mappedRecipeIngredients.size;
	}
}

export default Recipe;
