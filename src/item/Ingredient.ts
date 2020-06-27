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

	public constructor(name: string, category: CategoryType, immunity: ImmunityBuffType, effect: Effect) {
		super(name);
		this.name = name;
		this.category = category;
		this.immunity = immunity;
		this.effect = effect;
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
