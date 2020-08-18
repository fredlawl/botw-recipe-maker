import {ItemCategory} from "../ItemCategory";

export enum Category {
	FRUIT,
	MEAT,
	RED_MEAT,
	POULTRY,
	SHROOMS,
	VEGETABLES,
	SEAFOOD,
	CRAB,
	FISH_AND_SNALES,
	MISC,
	PLANTS,
	CRITTERS,
}

export const subCategories: any = {
	[Category.RED_MEAT]: new ItemCategory("Red Meat"),
	[Category.POULTRY]: new ItemCategory("Poultry"),
	[Category.CRAB]: new ItemCategory("Crab"),
	[Category.FISH_AND_SNALES]: new ItemCategory("Fish & Snails"),
};

export const primaryCategories: any = {
	[Category.FRUIT]: new ItemCategory("Fruit"),
	[Category.SHROOMS]: new ItemCategory("Shrooms"),
	[Category.VEGETABLES]: new ItemCategory("Vegetable"),
	[Category.MEAT]: new ItemCategory("Meat", [
		subCategories[Category.RED_MEAT],
		subCategories[Category.POULTRY]
	]),
	[Category.SEAFOOD]: new ItemCategory("Seafood", [
		subCategories[Category.CRAB],
		subCategories[Category.FISH_AND_SNALES],
	]),
	[Category.MISC]: new ItemCategory("Misc"),
	[Category.PLANTS]: new ItemCategory("Plants"),
	[Category.CRITTERS]: new ItemCategory("Critters"),
};

export const allItemCategories: ItemCategory[] = [
	...Object.values(primaryCategories) as ItemCategory[],
	...Object.values(subCategories) as ItemCategory[]
];
