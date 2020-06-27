import Entity from "../Entity";
import Item, {ImmunityBuffType, ItemType, EffectType} from "../item/Item";

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
	public readonly effect: EffectType;
	public readonly category: CategoryType;
	private _baked: boolean;

	public constructor(name: string, category: CategoryType, immunity: ImmunityBuffType, effect: EffectType) {
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
	new Ingredient("Acorn", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Apple", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Armoranth", CategoryType.VEGETABLES, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Armored Carp", CategoryType.FISH, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Armored Porgy", CategoryType.FISH, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Big Hearty Radish", CategoryType.VEGETABLES, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Big Hearty Truffle", CategoryType.SHROOMS, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Bird Egg", CategoryType.MEAT, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Bladed Rhino Beetle", CategoryType.BUG, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Blue Nightshade", CategoryType.PLANTS, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Bright-Eyed Crab", CategoryType.FISH, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Cane Sugar", CategoryType.MISC, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Chickaloo Tree Nut", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Chillfin Trout", CategoryType.FISH, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Chillshroom", CategoryType.SHROOMS, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Cold Darner", CategoryType.BUG, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Cool Safflina", CategoryType.PLANTS, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Courser Bee Honey", CategoryType.MISC, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Electric Darner", CategoryType.BUG, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Electric Safflina", CategoryType.PLANTS, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Endura Carrot", CategoryType.VEGETABLES, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Endura Shroom", CategoryType.SHROOMS, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Energetic Rhino Beetle", CategoryType.BUG, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Fairy", CategoryType.BUG, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Fireproof Lizard", CategoryType.REPTILE, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Fleet-Lotus Seeds", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Fortified Pumpkin", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Fresh Milk", CategoryType.MISC, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Goat Butter", CategoryType.MISC, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Goron Spice", CategoryType.MISC, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Hearty Bass", CategoryType.FISH, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Hearty Blueshell Snail", CategoryType.FISH, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Hearty Durian", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Hearty Lizard", CategoryType.REPTILE, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Hearty Radish", CategoryType.VEGETABLES, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Hearty Salmon", CategoryType.FISH, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Hearty Truffle", CategoryType.SHROOMS, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Hightail Lizard", CategoryType.REPTILE, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Hot-Footed Frog", CategoryType.REPTILE, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Hydromelon", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Hylian Rice", CategoryType.MISC, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Hylian Shroom", CategoryType.SHROOMS, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Hyrule Bass", CategoryType.FISH, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Hyrule Herb", CategoryType.PLANTS, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Ironshell Crab", CategoryType.FISH, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Ironshroom", CategoryType.SHROOMS, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Mighty Bananas", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Mighty Carp", CategoryType.FISH, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Mighty Porgy", CategoryType.FISH, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Mighty Thistle", CategoryType.VEGETABLES, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Monster Extract", CategoryType.MISC, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Palm Fruit", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Raw Bird Thigh", CategoryType.MEAT, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Raw Bird Drumstick", CategoryType.MEAT, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Raw Meat", CategoryType.MEAT, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Raw Prime Meat", CategoryType.MEAT, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Raw Gourmet Meat", CategoryType.MEAT, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Raw Whole Bird", CategoryType.MEAT, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Razorclaw Crab", CategoryType.FISH, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Razorshroom", CategoryType.SHROOMS, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Restless Cricket", CategoryType.BUG, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Rugged Rhino Beetle", CategoryType.BUG, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Rushroom", CategoryType.SHROOMS, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Sanke Carp", CategoryType.FISH, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Silent Princess", CategoryType.PLANTS, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Silent Shroom", CategoryType.SHROOMS, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Sizzlefin Trout", CategoryType.FISH, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Smotherwing Butterfly", CategoryType.BUG, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Sneaky River Snail", CategoryType.FISH, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Spicy Pepper", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Stamella Shroom", CategoryType.SHROOMS, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Staminoka Bass", CategoryType.FISH, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Stealthfin Trout", CategoryType.FISH, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Summerwing Butterfly", CategoryType.BUG, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Sunset Firefly", CategoryType.BUG, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Sunshroom", CategoryType.SHROOMS, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Swift Carrot", CategoryType.VEGETABLES, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Swift Violet", CategoryType.PLANTS, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Tabantha Wheat", CategoryType.MISC, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Thunderwing Butterfly", CategoryType.BUG, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Tireless Frog", CategoryType.REPTILE, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Voltfin Trout", CategoryType.FISH, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Voltfruit", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Warm Darner", CategoryType.BUG, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Warm Safflina", CategoryType.PLANTS, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Wildberry", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Winterwing Butterfly", CategoryType.BUG, ImmunityBuffType.NONE, EffectType.NONE),
	new Ingredient("Zapshroom", CategoryType.SHROOMS, ImmunityBuffType.NONE, EffectType.NONE)
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
