import ItemStack from "../item/ItemStack";
import Entity from "../Entity";
import Item, {ItemType} from "../item/Item";

class Recipe extends Entity<Recipe> implements Item {
	public readonly name: string;
	public readonly ingredients: ItemStack[];
	private _crafted: boolean;

	public static clone(prevRecipe: Recipe): Recipe {
		const newRecipe = new Recipe(prevRecipe.name, prevRecipe.ingredients);
		newRecipe._id = prevRecipe._id;
		return newRecipe;
	}

	public static createCrafted(name: string, ingredients: ItemStack[]): Recipe {
		const recipe = new Recipe(name, ingredients);
		recipe._crafted = true;
		return recipe;
	}

	constructor(name: string, ingredients: ItemStack[]) {
		super(name);
		this.name = name;
		this.ingredients = ingredients;
		this._crafted = false;
	}

	public craft(inventory: ItemStack[]): Recipe {
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

	public isCraftable(ingredients: ItemStack[]): boolean {
		let numberOfMatchedIngredients = 0;

		/*
		 * Technically if a recipe can be pulled from thin air with no
		 * ingredients, then it's craftable.
		 */
		if (this.ingredients.length === 0) {
			return true;
		}

		const mappedRecipeIngredients = new Map<string, number>(
			this.ingredients.map(i => [i.item.id, i.stack]));

		for (const ingredient of ingredients) {
			const recipeIngredientAmount = mappedRecipeIngredients.get(ingredient.item.id);
			if (recipeIngredientAmount === undefined) {
				continue;
			}

			numberOfMatchedIngredients += Number((recipeIngredientAmount - ingredient.stack) <= 0);
		}

		return numberOfMatchedIngredients === mappedRecipeIngredients.size;
	}

	get type(): ItemType {
		return ItemType.CONSUMABLE;
	}
}

export default Recipe;
