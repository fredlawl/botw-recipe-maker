import IngredientBundle from "../ingredient/IngredientBundle";
import Entity from "../Entity";

class Recipe extends Entity<Recipe> {
	public readonly name: string;
	public readonly ingredients: IngredientBundle[];
	private _crafted: boolean;

	public static clone(prevRecipe: Recipe): Recipe {
		const newRecipe = new Recipe(prevRecipe.name, prevRecipe.ingredients);
		newRecipe._id = prevRecipe._id;
		return newRecipe;
	}

	public static createdCrafted(name: string, ingredients: IngredientBundle[]): Recipe {
		const recipe = new Recipe(name, ingredients);
		recipe._crafted = true;
		return recipe;
	}

	constructor(name: string, ingredients: IngredientBundle[]) {
		super(name);
		this.name = name;
		this.ingredients = ingredients;
		this._crafted = false;
	}

	public craft(inventory: IngredientBundle[]): Recipe {
		const cloned = Recipe.clone(this);

		if (cloned.crafted || !this.isCraftable(inventory)) {
			return cloned;
		}

		cloned._crafted = true;
		return cloned;
	}

	get crafted(): boolean {
		return this._crafted;
	}

	public isCraftable(ingredients: IngredientBundle[]): boolean {
		/*
		 * Technically if a recipe can be pulled from thin air with no
		 * ingredients, then it's craftable.
		 */
		if (this.ingredients.length === 0) {
			return true;
		}

		const mappedRecipeIngredients = new Map<string, number>(
			this.ingredients.map(i => [i.ingredient.id, i.amount]));

		for (const passedIngredient of ingredients) {
			const currentAmount = mappedRecipeIngredients.get(passedIngredient.ingredient.id);
			if (currentAmount === undefined) {
				continue;
			}

			mappedRecipeIngredients.set(passedIngredient.ingredient.id, currentAmount - passedIngredient.amount);
		}

		return Array.from(mappedRecipeIngredients.values())
			.filter(x  => x <= 0).length === mappedRecipeIngredients.size;
	}
}

export default Recipe;
