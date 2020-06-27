import Entity from "../Entity";
import Item, {ImmunityBuffType, ItemType} from "./Item";
import Effect from "./Effect";

enum CategoryType {
	FRUIT = 'fruit',
	MEAT = 'meat',
	SHROOMS = 'shrooms',
	VEGETABLES = 'vegetables',
	FISH = 'fish',
	PLANTS = 'plants',
	BUG = 'bug',
	REPTILE = 'reptile',
	MISC = 'misc',
}

class Ingredient extends Entity<Ingredient> implements Item {
	public readonly name: string;
	public readonly immunity: ImmunityBuffType;
	public readonly effect: Effect;
	public readonly category: CategoryType;
	private _baked: boolean;

	public constructor(name: string, category: CategoryType, immunity: ImmunityBuffType, effect: Effect) {
		super(name);
		this.name = name;
		this._baked = false;
		this.category = category;
		this.immunity = immunity;
		this.effect = effect;
	}

	public bake(): Ingredient {
		const ingredient = new Ingredient(this.name, this.category, this.immunity, this.effect);
		ingredient._baked = true;
		return ingredient;
	}

	get baked(): boolean {
		return this._baked;
	}

	get type(): ItemType {
		return ItemType.MATERIAL;
	}
}

const categoryTypeLookupTable: any = {
	[CategoryType.FRUIT]: CategoryType.FRUIT,
	[CategoryType.MEAT]: CategoryType.MEAT,
	[CategoryType.SHROOMS]: CategoryType.SHROOMS,
	[CategoryType.VEGETABLES]: CategoryType.VEGETABLES,
	[CategoryType.FISH]: CategoryType.FISH,
	[CategoryType.PLANTS]: CategoryType.PLANTS,
	[CategoryType.BUG]: CategoryType.BUG,
	[CategoryType.REPTILE]: CategoryType.REPTILE,
	[CategoryType.FISH]: CategoryType.FISH,
	[CategoryType.MISC]: CategoryType.MISC,
};

export {
	Ingredient as default,
	CategoryType,
	categoryTypeLookupTable,
};
