import Entity from "../Entity";
import Item, {ItemType} from "../item/Item";

/**
 * Describes the type of the item
 */
enum IngredientClass {
	FRUIT = 'fruit',
	MEAT = 'meat',
	SHROOMS = 'shrooms',
	VEGETABLES = 'vegetables',
	FISH = 'fish',
	MATERIAL = 'material',
	BUG = 'bug',
	REPTILE = 'reptile'
}

/**
 * Lookup table of all item classes
 */
const ingredientClassLookupTable: any = {
	[IngredientClass.FRUIT]: IngredientClass.FRUIT,
	[IngredientClass.MEAT]: IngredientClass.MEAT,
	[IngredientClass.SHROOMS]: IngredientClass.SHROOMS,
	[IngredientClass.VEGETABLES]: IngredientClass.VEGETABLES,
	[IngredientClass.FISH]: IngredientClass.FISH,
	[IngredientClass.MATERIAL]: IngredientClass.MATERIAL,
	[IngredientClass.BUG]: IngredientClass.BUG,
	[IngredientClass.REPTILE]: IngredientClass.REPTILE,
	[IngredientClass.FISH]: IngredientClass.FISH,
};

class Ingredient extends Entity<Ingredient> implements Item {
	public readonly name: string;
	public readonly classification: IngredientClass;
	private _baked: boolean;

	public constructor(name: string, classification: IngredientClass) {
		super(name);
		this.name = name;
		this._baked = false;
		this.classification = classification;
	}

	public bake(): Ingredient {
		const ingredient = new Ingredient(this.name, this.classification);
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

/**
 * A lookup table for all the ingredients
 */
const allIngredientsLookupTable: Ingredient[] = [
	new Ingredient("Acorn", IngredientClass.FRUIT),
	new Ingredient("Apple", IngredientClass.FRUIT),
	new Ingredient("Armoranth", IngredientClass.VEGETABLES),
	new Ingredient("Armored Carp", IngredientClass.FISH),
	new Ingredient("Armored Porgy", IngredientClass.FISH),
	new Ingredient("Big Hearty Radish", IngredientClass.VEGETABLES),
	new Ingredient("Big Hearty Truffle", IngredientClass.SHROOMS),
	new Ingredient("Bird Egg", IngredientClass.MEAT),
	new Ingredient("Bladed Rhino Beetle", IngredientClass.BUG),
	new Ingredient("Blue Nightshade", IngredientClass.MATERIAL),
	new Ingredient("Bright-Eyed Crab", IngredientClass.FISH),
	new Ingredient("Cane Sugar", IngredientClass.MATERIAL),
	new Ingredient("Chickaloo Tree Nut", IngredientClass.FRUIT),
	new Ingredient("Chillfin Trout", IngredientClass.FISH),
	new Ingredient("Chillshroom", IngredientClass.SHROOMS),
	new Ingredient("Cold Darner", IngredientClass.BUG),
	new Ingredient("Cool Safflina", IngredientClass.MATERIAL),
	new Ingredient("Courser Bee Honey", IngredientClass.MATERIAL),
	new Ingredient("Electric Darner", IngredientClass.BUG),
	new Ingredient("Electric Safflina", IngredientClass.MATERIAL),
	new Ingredient("Endura Carrot", IngredientClass.VEGETABLES),
	new Ingredient("Endura Shroom", IngredientClass.SHROOMS),
	new Ingredient("Energetic Rhino Beetle", IngredientClass.BUG),
	new Ingredient("Fairy", IngredientClass.MATERIAL),
	new Ingredient("Fireproof Lizard", IngredientClass.REPTILE),
	new Ingredient("Fleet-Lotus Seeds", IngredientClass.FRUIT),
	new Ingredient("Fortified Pumpkin", IngredientClass.FRUIT),
	new Ingredient("Fresh Milk", IngredientClass.MATERIAL),
	new Ingredient("Goat Butter", IngredientClass.MATERIAL),
	new Ingredient("Goron Spice", IngredientClass.MATERIAL),
	new Ingredient("Hearty Bass", IngredientClass.FISH),
	new Ingredient("Hearty Blueshell Snail", IngredientClass.FISH),
	new Ingredient("Hearty Durian", IngredientClass.FRUIT),
	new Ingredient("Hearty Lizard", IngredientClass.REPTILE),
	new Ingredient("Hearty Radish", IngredientClass.VEGETABLES),
	new Ingredient("Hearty Salmon", IngredientClass.FISH),
	new Ingredient("Hearty Truffle", IngredientClass.SHROOMS),
	new Ingredient("Hightail Lizard", IngredientClass.REPTILE),
	new Ingredient("Hot-Footed Frog", IngredientClass.REPTILE),
	new Ingredient("Hydromelon", IngredientClass.FRUIT),
	new Ingredient("Hylian Rice", IngredientClass.MATERIAL),
	new Ingredient("Hylian Shroom", IngredientClass.SHROOMS),
	new Ingredient("Hyrule Bass", IngredientClass.FISH),
	new Ingredient("Hyrule Herb", IngredientClass.MATERIAL),
	new Ingredient("Ironshell Crab", IngredientClass.FISH),
	new Ingredient("Ironshroom", IngredientClass.SHROOMS),
	new Ingredient("Mighty Bananas", IngredientClass.FRUIT),
	new Ingredient("Mighty Carp", IngredientClass.FISH),
	new Ingredient("Mighty Porgy", IngredientClass.FISH),
	new Ingredient("Mighty Thistle", IngredientClass.VEGETABLES),
	new Ingredient("Monster Extract", IngredientClass.MATERIAL),
	new Ingredient("Palm Fruit", IngredientClass.FRUIT),
	new Ingredient("Raw Bird Thigh", IngredientClass.MEAT),
	new Ingredient("Raw Bird Drumstick", IngredientClass.MEAT),
	new Ingredient("Raw Meat", IngredientClass.MEAT),
	new Ingredient("Raw Prime Meat", IngredientClass.MEAT),
	new Ingredient("Raw Gourmet Meat", IngredientClass.MEAT),
	new Ingredient("Raw Whole Bird", IngredientClass.MEAT),
	new Ingredient("Razorclaw Crab", IngredientClass.FISH),
	new Ingredient("Razorshroom", IngredientClass.SHROOMS),
	new Ingredient("Restless Cricket", IngredientClass.BUG),
	new Ingredient("Rugged Rhino Beetle", IngredientClass.BUG),
	new Ingredient("Rushroom", IngredientClass.SHROOMS),
	new Ingredient("Sanke Carp", IngredientClass.FISH),
	new Ingredient("Silent Princess", IngredientClass.MATERIAL),
	new Ingredient("Silent Shroom", IngredientClass.SHROOMS),
	new Ingredient("Sizzlefin Trout", IngredientClass.FISH),
	new Ingredient("Smotherwing Butterfly", IngredientClass.BUG),
	new Ingredient("Sneaky River Snail", IngredientClass.FISH),
	new Ingredient("Spicy Pepper", IngredientClass.FRUIT),
	new Ingredient("Stamella Shroom", IngredientClass.SHROOMS),
	new Ingredient("Staminoka Bass", IngredientClass.FISH),
	new Ingredient("Stealthfin Trout", IngredientClass.FISH),
	new Ingredient("Summerwing Butterfly", IngredientClass.BUG),
	new Ingredient("Sunset Firefly", IngredientClass.BUG),
	new Ingredient("Sunshroom", IngredientClass.SHROOMS),
	new Ingredient("Swift Carrot", IngredientClass.VEGETABLES),
	new Ingredient("Swift Violet", IngredientClass.MATERIAL),
	new Ingredient("Tabantha Wheat", IngredientClass.MATERIAL),
	new Ingredient("Thunderwing Butterfly", IngredientClass.BUG),
	new Ingredient("Tireless Frog", IngredientClass.REPTILE),
	new Ingredient("Voltfin Trout", IngredientClass.FISH),
	new Ingredient("Voltfruit", IngredientClass.FRUIT),
	new Ingredient("Warm Darner", IngredientClass.BUG),
	new Ingredient("Warm Safflina", IngredientClass.MATERIAL),
	new Ingredient("Wildberry", IngredientClass.FRUIT),
	new Ingredient("Winterwing Butterfly", IngredientClass.BUG),
	new Ingredient("Zapshroom", IngredientClass.SHROOMS),
];

export {
	Ingredient as default,
	IngredientClass,
	allIngredientsLookupTable,
	ingredientClassLookupTable
};
