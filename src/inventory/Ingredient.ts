import Entity from "../Entity";
import Item, {ImmunityBuffType, ItemType} from "../item/Item";
import Effect from "../item/Effect";

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

const allIngredientsLookupTable: Ingredient[] = [
	new Ingredient("Acorn", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Apple", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Armoranth", CategoryType.VEGETABLES, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Armored Carp", CategoryType.FISH, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Armored Porgy", CategoryType.FISH, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Big Hearty Radish", CategoryType.VEGETABLES, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Big Hearty Truffle", CategoryType.SHROOMS, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Bird Egg", CategoryType.MEAT, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Bladed Rhino Beetle", CategoryType.BUG, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Blue Nightshade", CategoryType.PLANTS, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Bright-Eyed Crab", CategoryType.FISH, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Cane Sugar", CategoryType.MISC, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Chickaloo Tree Nut", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Chillfin Trout", CategoryType.FISH, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Chillshroom", CategoryType.SHROOMS, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Cold Darner", CategoryType.BUG, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Cool Safflina", CategoryType.PLANTS, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Courser Bee Honey", CategoryType.MISC, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Electric Darner", CategoryType.BUG, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Electric Safflina", CategoryType.PLANTS, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Endura Carrot", CategoryType.VEGETABLES, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Endura Shroom", CategoryType.SHROOMS, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Energetic Rhino Beetle", CategoryType.BUG, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Fairy", CategoryType.BUG, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Fireproof Lizard", CategoryType.REPTILE, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Fleet-Lotus Seeds", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Fortified Pumpkin", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Fresh Milk", CategoryType.MISC, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Goat Butter", CategoryType.MISC, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Goron Spice", CategoryType.MISC, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Hearty Bass", CategoryType.FISH, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Hearty Blueshell Snail", CategoryType.FISH, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Hearty Durian", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Hearty Lizard", CategoryType.REPTILE, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Hearty Radish", CategoryType.VEGETABLES, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Hearty Salmon", CategoryType.FISH, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Hearty Truffle", CategoryType.SHROOMS, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Hightail Lizard", CategoryType.REPTILE, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Hot-Footed Frog", CategoryType.REPTILE, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Hydromelon", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Hylian Rice", CategoryType.MISC, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Hylian Shroom", CategoryType.SHROOMS, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Hyrule Bass", CategoryType.FISH, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Hyrule Herb", CategoryType.PLANTS, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Ironshell Crab", CategoryType.FISH, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Ironshroom", CategoryType.SHROOMS, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Mighty Bananas", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Mighty Carp", CategoryType.FISH, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Mighty Porgy", CategoryType.FISH, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Mighty Thistle", CategoryType.VEGETABLES, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Monster Extract", CategoryType.MISC, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Palm Fruit", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Raw Bird Thigh", CategoryType.MEAT, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Raw Bird Drumstick", CategoryType.MEAT, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Raw Meat", CategoryType.MEAT, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Raw Prime Meat", CategoryType.MEAT, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Raw Gourmet Meat", CategoryType.MEAT, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Raw Whole Bird", CategoryType.MEAT, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Razorclaw Crab", CategoryType.FISH, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Razorshroom", CategoryType.SHROOMS, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Restless Cricket", CategoryType.BUG, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Rugged Rhino Beetle", CategoryType.BUG, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Rushroom", CategoryType.SHROOMS, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Sanke Carp", CategoryType.FISH, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Silent Princess", CategoryType.PLANTS, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Silent Shroom", CategoryType.SHROOMS, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Sizzlefin Trout", CategoryType.FISH, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Smotherwing Butterfly", CategoryType.BUG, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Sneaky River Snail", CategoryType.FISH, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Spicy Pepper", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Stamella Shroom", CategoryType.SHROOMS, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Staminoka Bass", CategoryType.FISH, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Stealthfin Trout", CategoryType.FISH, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Summerwing Butterfly", CategoryType.BUG, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Sunset Firefly", CategoryType.BUG, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Sunshroom", CategoryType.SHROOMS, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Swift Carrot", CategoryType.VEGETABLES, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Swift Violet", CategoryType.PLANTS, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Tabantha Wheat", CategoryType.MISC, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Thunderwing Butterfly", CategoryType.BUG, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Tireless Frog", CategoryType.REPTILE, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Voltfin Trout", CategoryType.FISH, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Voltfruit", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Warm Darner", CategoryType.BUG, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Warm Safflina", CategoryType.PLANTS, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Wildberry", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Winterwing Butterfly", CategoryType.BUG, ImmunityBuffType.NONE, Effect.none()),
	new Ingredient("Zapshroom", CategoryType.SHROOMS, ImmunityBuffType.NONE, Effect.none())
];

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
	allIngredientsLookupTable,
	categoryTypeLookupTable,
};
