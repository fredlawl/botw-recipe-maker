enum IngredientClass {
	FRUIT = 'fruit',
	MEAT = 'meat',
	MUSHROOMS = 'mushrooms',
	VEGETABLES = 'vegetables',
	FISH = 'fish',
	MATERIAL = 'material',
	BUG = 'bug',
	REPTILE = 'reptile',
	SHELLFISH = 'shellfish'
}

const ingredientClassLookupTable: any = {
	[IngredientClass.FRUIT]: IngredientClass.FRUIT,
	[IngredientClass.MEAT]: IngredientClass.MEAT,
	[IngredientClass.MUSHROOMS]: IngredientClass.MUSHROOMS,
	[IngredientClass.VEGETABLES]: IngredientClass.VEGETABLES,
	[IngredientClass.FISH]: IngredientClass.FISH,
	[IngredientClass.MATERIAL]: IngredientClass.MATERIAL,
	[IngredientClass.BUG]: IngredientClass.BUG,
	[IngredientClass.REPTILE]: IngredientClass.REPTILE,
	[IngredientClass.SHELLFISH]: IngredientClass.SHELLFISH,
};

class Ingredient {
	private static _id: number = -1;
	public readonly id: number;
	public readonly name: string;
	public readonly classification: IngredientClass;
	private _baked: boolean;

	public constructor(name: string, classification: IngredientClass) {
		this.name = name;
		this._baked = false;
		this.classification = classification;
		Ingredient._id += 1;
		this.id = Ingredient._id;
	}

	public bake(): Ingredient {
		const ingredient = new Ingredient(this.name, this.classification);
		ingredient._baked = true;
		return ingredient;
	}

	get baked(): boolean {
		return this._baked;
	}

	get iconClass(): string {
		const prettyName = this.name.toLowerCase().split(' ').join('-');
		return `icon-ingredient food icon-${this.classification} ${prettyName}`
	}
}

const allIngredientsLookupTable: Ingredient[] =[
	new Ingredient("Acorn", IngredientClass.FRUIT),
	new Ingredient("Apple", IngredientClass.FRUIT),
	new Ingredient("Armoranth", IngredientClass.VEGETABLES),
	new Ingredient("Armored Carp", IngredientClass.FISH),
	new Ingredient("Armored Porgy", IngredientClass.FISH),
	new Ingredient("Big Hearty Radish", IngredientClass.VEGETABLES),
	new Ingredient("Big Hearty Truffle", IngredientClass.MUSHROOMS),
	new Ingredient("Bird Egg", IngredientClass.MEAT),
	new Ingredient("Bladed Rhino Beetle", IngredientClass.BUG),
	new Ingredient("Blue Nightshade", IngredientClass.MUSHROOMS),
	new Ingredient("Bright-Eyed Crab", IngredientClass.SHELLFISH),
	new Ingredient("Cane Sugar", IngredientClass.MATERIAL),
	new Ingredient("Chickaloo Tree Nut", IngredientClass.FRUIT),
	new Ingredient("Chillfin Trout", IngredientClass.FISH),
	new Ingredient("Chillshroom", IngredientClass.MUSHROOMS),
	new Ingredient("Cold Darner", IngredientClass.BUG),
	new Ingredient("Cool Safflina", IngredientClass.MATERIAL),
	new Ingredient("Courser Bee Honey", IngredientClass.MATERIAL),
	new Ingredient("Electric Darner", IngredientClass.BUG),
	new Ingredient("Electric Safflina", IngredientClass.MATERIAL),
	new Ingredient("Endura Carrot", IngredientClass.VEGETABLES),
	new Ingredient("Endura Shroom", IngredientClass.MUSHROOMS),
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
	new Ingredient("Hearty Durian", IngredientClass.MUSHROOMS),
	new Ingredient("Hearty Lizard", IngredientClass.REPTILE),
	new Ingredient("Hearty Radish", IngredientClass.VEGETABLES),
	new Ingredient("Hearty Salmon", IngredientClass.FISH),
	new Ingredient("Hearty Truffle", IngredientClass.MUSHROOMS),
	new Ingredient("Hightail Lizard", IngredientClass.REPTILE),
	new Ingredient("Hot-Footed Frog", IngredientClass.REPTILE),
	new Ingredient("Hydromelon", IngredientClass.FRUIT),
	new Ingredient("Hylian Rice", IngredientClass.MATERIAL),
	new Ingredient("Hylian Shroom", IngredientClass.MUSHROOMS),
	new Ingredient("Hyrule Bass", IngredientClass.FISH),
	new Ingredient("Hyrule Herb", IngredientClass.MATERIAL),
	new Ingredient("Ironshell Crab", IngredientClass.SHELLFISH),
	new Ingredient("Ironshroom", IngredientClass.MUSHROOMS),
	new Ingredient("Mighty Bananas", IngredientClass.FRUIT),
	new Ingredient("Mighty Carp", IngredientClass.FISH),
	new Ingredient("Mighty Porgy", IngredientClass.FISH),
	new Ingredient("Mighty Thistle", IngredientClass.MATERIAL),
	new Ingredient("Monster Extract", IngredientClass.MATERIAL),
	new Ingredient("Palm Fruit", IngredientClass.FRUIT),
	new Ingredient("Razorclaw Crab", IngredientClass.SHELLFISH),
	new Ingredient("Razorshroom", IngredientClass.MUSHROOMS),
	new Ingredient("Restless Cricket", IngredientClass.BUG),
	new Ingredient("Rugged Rhino Beetle", IngredientClass.BUG),
	new Ingredient("Rushroom", IngredientClass.MUSHROOMS),
	new Ingredient("Sanke Carp", IngredientClass.FISH),
	new Ingredient("Silent Princess", IngredientClass.MATERIAL),
	new Ingredient("Silent Shroom", IngredientClass.MUSHROOMS),
	new Ingredient("Sizzlefin Trout", IngredientClass.FISH),
	new Ingredient("Smotherwing Butterfly", IngredientClass.BUG),
	new Ingredient("Sneaky River Snail", IngredientClass.BUG),
	new Ingredient("Spicy Pepper", IngredientClass.FRUIT),
	new Ingredient("Stamella Shroom", IngredientClass.MUSHROOMS),
	new Ingredient("Staminoka Bass", IngredientClass.FISH),
	new Ingredient("Stealthfin Trout", IngredientClass.FISH),
	new Ingredient("Summerwing Butterfly", IngredientClass.BUG),
	new Ingredient("Sunset Firefly", IngredientClass.BUG),
	new Ingredient("Sunshroom", IngredientClass.MUSHROOMS),
	new Ingredient("Swift Carrot", IngredientClass.VEGETABLES),
	new Ingredient("Swift Violet", IngredientClass.MUSHROOMS),
	new Ingredient("Tabantha Wheat", IngredientClass.MATERIAL),
	new Ingredient("Thunderwing Butterfly", IngredientClass.BUG),
	new Ingredient("Tireless Frog", IngredientClass.REPTILE),
	new Ingredient("Voltfin Trout", IngredientClass.FISH),
	new Ingredient("Voltfruit", IngredientClass.FRUIT),
	new Ingredient("Warm Darner", IngredientClass.BUG),
	new Ingredient("Warm Safflina", IngredientClass.MATERIAL),
	new Ingredient("Wildberry", IngredientClass.FRUIT),
	new Ingredient("Winterwing Butterfly", IngredientClass.BUG),
	new Ingredient("Zapshroom", IngredientClass.MUSHROOMS),
];

export { Ingredient as default, allIngredientsLookupTable, IngredientClass, ingredientClassLookupTable };
