import ItemStack from "../item/ItemStack";
import Entity from "../Entity";
import Item, {ImmunityBuffType, ItemType, EffectType} from "../item/Item";
import Ingredient from "../inventory/Ingredient";

class Recipe extends Entity<Recipe> implements Item {
	public readonly name: string;
	public readonly ingredients: ItemStack<Ingredient>[];

	private _immunity: ImmunityBuffType;
	private _effect: EffectType;
	private _crafted: boolean;

	public static clone(prevRecipe: Recipe): Recipe {
		const newRecipe = new Recipe(prevRecipe.name, prevRecipe.ingredients, prevRecipe._immunity, prevRecipe._effect);
		newRecipe._id = prevRecipe._id;
		return newRecipe;
	}

	public static createCrafted(name: string, ingredients: ItemStack<Ingredient>[], immunity?: ImmunityBuffType, effect?: EffectType): Recipe {
		const recipe = new Recipe(name, ingredients, immunity, effect);
		recipe._crafted = true;
		return recipe;
	}

	constructor(name: string, ingredients: ItemStack<Ingredient>[], immunity?: ImmunityBuffType, effect?: EffectType) {
		super(name);
		this.name = name;
		this.ingredients = ingredients;
		this._crafted = false;
		this._immunity = (immunity === undefined) ? ImmunityBuffType.NONE : immunity;
		this._effect = (effect === undefined) ? EffectType.NONE : effect;
	}

	public craft(inventory: ItemStack<Ingredient>[]): Recipe {
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

	public isCraftable(ingredients: ItemStack<Ingredient>[]): boolean {
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

	get immunity(): ImmunityBuffType {
		return this._immunity;
	}

	get effect(): EffectType {
		return this._effect;
	}
}

export default Recipe;
