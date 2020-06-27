import ItemStack from "../item/ItemStack";
import Entity from "../Entity";
import Item, {EffectType, ItemType, StatsType} from "../item/Item";
import Ingredient from "../inventory/Ingredient";

class Recipe extends Entity<Recipe> implements Item {
	public readonly name: string;
	public readonly ingredients: ItemStack<Ingredient>[];

	private _effect: EffectType;
	private _stats: StatsType;
	private _crafted: boolean;

	public static clone(prevRecipe: Recipe): Recipe {
		const newRecipe = new Recipe(prevRecipe.name, prevRecipe.ingredients, prevRecipe._effect, prevRecipe._stats);
		newRecipe._id = prevRecipe._id;
		return newRecipe;
	}

	public static createCrafted(name: string, ingredients: ItemStack<Ingredient>[], effect?: EffectType, stats?: StatsType): Recipe {
		const recipe = new Recipe(name, ingredients, effect, stats);
		recipe._crafted = true;
		return recipe;
	}

	constructor(name: string, ingredients: ItemStack<Ingredient>[], effect?: EffectType, stats?: StatsType) {
		super(name);
		this.name = name;
		this.ingredients = ingredients;
		this._crafted = false;
		this._effect = (effect === undefined) ? EffectType.NONE : effect;
		this._stats = (stats === undefined) ? StatsType.NONE : stats;
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

	get effect(): EffectType {
		return this._effect;
	}

	get stats(): StatsType {
		return this._stats;
	}
}

export default Recipe;
