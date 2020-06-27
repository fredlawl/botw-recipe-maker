import Entity from "../Entity";
import Item, {EffectType, ItemType, StatsType} from "../item/Item";

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
	public readonly effect: EffectType;
	public readonly stats: StatsType;
	public readonly category: CategoryType;
	private _baked: boolean;

	public constructor(name: string, category: CategoryType, effect: EffectType, stats: StatsType) {
		super(name);
		this.name = name;
		this._baked = false;
		this.category = category;
		this.effect = effect;
		this.stats = stats;
	}

	public bake(): Ingredient {
		const ingredient = new Ingredient(this.name, this.category, this.effect, this.stats);
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
	new Ingredient("Acorn", CategoryType.FRUIT, EffectType.NONE, StatsType.NONE),
	new Ingredient("Apple", CategoryType.FRUIT, EffectType.NONE, StatsType.NONE),
	new Ingredient("Armoranth", CategoryType.VEGETABLES, EffectType.NONE, StatsType.NONE),
	new Ingredient("Armored Carp", CategoryType.FISH, EffectType.NONE, StatsType.NONE),
	new Ingredient("Armored Porgy", CategoryType.FISH, EffectType.NONE, StatsType.NONE),
	new Ingredient("Big Hearty Radish", CategoryType.VEGETABLES, EffectType.NONE, StatsType.NONE),
	new Ingredient("Big Hearty Truffle", CategoryType.SHROOMS, EffectType.NONE, StatsType.NONE),
	new Ingredient("Bird Egg", CategoryType.MEAT, EffectType.NONE, StatsType.NONE),
	new Ingredient("Bladed Rhino Beetle", CategoryType.BUG, EffectType.NONE, StatsType.NONE),
	new Ingredient("Blue Nightshade", CategoryType.PLANTS, EffectType.NONE, StatsType.NONE),
	new Ingredient("Bright-Eyed Crab", CategoryType.FISH, EffectType.NONE, StatsType.NONE),
	new Ingredient("Cane Sugar", CategoryType.MISC, EffectType.NONE, StatsType.NONE),
	new Ingredient("Chickaloo Tree Nut", CategoryType.FRUIT, EffectType.NONE, StatsType.NONE),
	new Ingredient("Chillfin Trout", CategoryType.FISH, EffectType.NONE, StatsType.NONE),
	new Ingredient("Chillshroom", CategoryType.SHROOMS, EffectType.NONE, StatsType.NONE),
	new Ingredient("Cold Darner", CategoryType.BUG, EffectType.NONE, StatsType.NONE),
	new Ingredient("Cool Safflina", CategoryType.PLANTS, EffectType.NONE, StatsType.NONE),
	new Ingredient("Courser Bee Honey", CategoryType.MISC, EffectType.NONE, StatsType.NONE),
	new Ingredient("Electric Darner", CategoryType.BUG, EffectType.NONE, StatsType.NONE),
	new Ingredient("Electric Safflina", CategoryType.PLANTS, EffectType.NONE, StatsType.NONE),
	new Ingredient("Endura Carrot", CategoryType.VEGETABLES, EffectType.NONE, StatsType.NONE),
	new Ingredient("Endura Shroom", CategoryType.SHROOMS, EffectType.NONE, StatsType.NONE),
	new Ingredient("Energetic Rhino Beetle", CategoryType.BUG, EffectType.NONE, StatsType.NONE),
	new Ingredient("Fairy", CategoryType.BUG, EffectType.NONE, StatsType.NONE),
	new Ingredient("Fireproof Lizard", CategoryType.REPTILE, EffectType.NONE, StatsType.NONE),
	new Ingredient("Fleet-Lotus Seeds", CategoryType.FRUIT, EffectType.NONE, StatsType.NONE),
	new Ingredient("Fortified Pumpkin", CategoryType.FRUIT, EffectType.NONE, StatsType.NONE),
	new Ingredient("Fresh Milk", CategoryType.MISC, EffectType.NONE, StatsType.NONE),
	new Ingredient("Goat Butter", CategoryType.MISC, EffectType.NONE, StatsType.NONE),
	new Ingredient("Goron Spice", CategoryType.MISC, EffectType.NONE, StatsType.NONE),
	new Ingredient("Hearty Bass", CategoryType.FISH, EffectType.NONE, StatsType.NONE),
	new Ingredient("Hearty Blueshell Snail", CategoryType.FISH, EffectType.NONE, StatsType.NONE),
	new Ingredient("Hearty Durian", CategoryType.FRUIT, EffectType.NONE, StatsType.NONE),
	new Ingredient("Hearty Lizard", CategoryType.REPTILE, EffectType.NONE, StatsType.NONE),
	new Ingredient("Hearty Radish", CategoryType.VEGETABLES, EffectType.NONE, StatsType.NONE),
	new Ingredient("Hearty Salmon", CategoryType.FISH, EffectType.NONE, StatsType.NONE),
	new Ingredient("Hearty Truffle", CategoryType.SHROOMS, EffectType.NONE, StatsType.NONE),
	new Ingredient("Hightail Lizard", CategoryType.REPTILE, EffectType.NONE, StatsType.NONE),
	new Ingredient("Hot-Footed Frog", CategoryType.REPTILE, EffectType.NONE, StatsType.NONE),
	new Ingredient("Hydromelon", CategoryType.FRUIT, EffectType.NONE, StatsType.NONE),
	new Ingredient("Hylian Rice", CategoryType.MISC, EffectType.NONE, StatsType.NONE),
	new Ingredient("Hylian Shroom", CategoryType.SHROOMS, EffectType.NONE, StatsType.NONE),
	new Ingredient("Hyrule Bass", CategoryType.FISH, EffectType.NONE, StatsType.NONE),
	new Ingredient("Hyrule Herb", CategoryType.PLANTS, EffectType.NONE, StatsType.NONE),
	new Ingredient("Ironshell Crab", CategoryType.FISH, EffectType.NONE, StatsType.NONE),
	new Ingredient("Ironshroom", CategoryType.SHROOMS, EffectType.NONE, StatsType.NONE),
	new Ingredient("Mighty Bananas", CategoryType.FRUIT, EffectType.NONE, StatsType.NONE),
	new Ingredient("Mighty Carp", CategoryType.FISH, EffectType.NONE, StatsType.NONE),
	new Ingredient("Mighty Porgy", CategoryType.FISH, EffectType.NONE, StatsType.NONE),
	new Ingredient("Mighty Thistle", CategoryType.VEGETABLES, EffectType.NONE, StatsType.NONE),
	new Ingredient("Monster Extract", CategoryType.MISC, EffectType.NONE, StatsType.NONE),
	new Ingredient("Palm Fruit", CategoryType.FRUIT, EffectType.NONE, StatsType.NONE),
	new Ingredient("Raw Bird Thigh", CategoryType.MEAT, EffectType.NONE, StatsType.NONE),
	new Ingredient("Raw Bird Drumstick", CategoryType.MEAT, EffectType.NONE, StatsType.NONE),
	new Ingredient("Raw Meat", CategoryType.MEAT, EffectType.NONE, StatsType.NONE),
	new Ingredient("Raw Prime Meat", CategoryType.MEAT, EffectType.NONE, StatsType.NONE),
	new Ingredient("Raw Gourmet Meat", CategoryType.MEAT, EffectType.NONE, StatsType.NONE),
	new Ingredient("Raw Whole Bird", CategoryType.MEAT, EffectType.NONE, StatsType.NONE),
	new Ingredient("Razorclaw Crab", CategoryType.FISH, EffectType.NONE, StatsType.NONE),
	new Ingredient("Razorshroom", CategoryType.SHROOMS, EffectType.NONE, StatsType.NONE),
	new Ingredient("Restless Cricket", CategoryType.BUG, EffectType.NONE, StatsType.NONE),
	new Ingredient("Rugged Rhino Beetle", CategoryType.BUG, EffectType.NONE, StatsType.NONE),
	new Ingredient("Rushroom", CategoryType.SHROOMS, EffectType.NONE, StatsType.NONE),
	new Ingredient("Sanke Carp", CategoryType.FISH, EffectType.NONE, StatsType.NONE),
	new Ingredient("Silent Princess", CategoryType.PLANTS, EffectType.NONE, StatsType.NONE),
	new Ingredient("Silent Shroom", CategoryType.SHROOMS, EffectType.NONE, StatsType.NONE),
	new Ingredient("Sizzlefin Trout", CategoryType.FISH, EffectType.NONE, StatsType.NONE),
	new Ingredient("Smotherwing Butterfly", CategoryType.BUG, EffectType.NONE, StatsType.NONE),
	new Ingredient("Sneaky River Snail", CategoryType.FISH, EffectType.NONE, StatsType.NONE),
	new Ingredient("Spicy Pepper", CategoryType.FRUIT, EffectType.NONE, StatsType.NONE),
	new Ingredient("Stamella Shroom", CategoryType.SHROOMS, EffectType.NONE, StatsType.NONE),
	new Ingredient("Staminoka Bass", CategoryType.FISH, EffectType.NONE, StatsType.NONE),
	new Ingredient("Stealthfin Trout", CategoryType.FISH, EffectType.NONE, StatsType.NONE),
	new Ingredient("Summerwing Butterfly", CategoryType.BUG, EffectType.NONE, StatsType.NONE),
	new Ingredient("Sunset Firefly", CategoryType.BUG, EffectType.NONE, StatsType.NONE),
	new Ingredient("Sunshroom", CategoryType.SHROOMS, EffectType.NONE, StatsType.NONE),
	new Ingredient("Swift Carrot", CategoryType.VEGETABLES, EffectType.NONE, StatsType.NONE),
	new Ingredient("Swift Violet", CategoryType.PLANTS, EffectType.NONE, StatsType.NONE),
	new Ingredient("Tabantha Wheat", CategoryType.MISC, EffectType.NONE, StatsType.NONE),
	new Ingredient("Thunderwing Butterfly", CategoryType.BUG, EffectType.NONE, StatsType.NONE),
	new Ingredient("Tireless Frog", CategoryType.REPTILE, EffectType.NONE, StatsType.NONE),
	new Ingredient("Voltfin Trout", CategoryType.FISH, EffectType.NONE, StatsType.NONE),
	new Ingredient("Voltfruit", CategoryType.FRUIT, EffectType.NONE, StatsType.NONE),
	new Ingredient("Warm Darner", CategoryType.BUG, EffectType.NONE, StatsType.NONE),
	new Ingredient("Warm Safflina", CategoryType.PLANTS, EffectType.NONE, StatsType.NONE),
	new Ingredient("Wildberry", CategoryType.FRUIT, EffectType.NONE, StatsType.NONE),
	new Ingredient("Winterwing Butterfly", CategoryType.BUG, EffectType.NONE, StatsType.NONE),
	new Ingredient("Zapshroom", CategoryType.SHROOMS, EffectType.NONE, StatsType.NONE)
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
