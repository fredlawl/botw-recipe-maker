import ItemCategory from "../ItemCategory";

enum PrimaryCategory {
	FRUIT,
	MEAT,
	SHROOMS,
	VEGETABLES,
	FISH,
	PLANTS,
	INSECTS,
	REPTILE,
	MISC,
}

const primaryCategories: any = {
	[PrimaryCategory.FRUIT]: new ItemCategory("Fruit"),
	[PrimaryCategory.MEAT]: new ItemCategory("Meat"),
	[PrimaryCategory.SHROOMS]: new ItemCategory("Shrooms"),
	[PrimaryCategory.VEGETABLES]: new ItemCategory("Vegetables"),
	[PrimaryCategory.FISH]: new ItemCategory("Fish"),
	[PrimaryCategory.PLANTS]: new ItemCategory("Plants"),
	[PrimaryCategory.INSECTS]: new ItemCategory("Insects"),
	[PrimaryCategory.REPTILE]: new ItemCategory("Reptiles"),
	[PrimaryCategory.MISC]: new ItemCategory("Misc"),
};

const allItemCategories: ItemCategory[] = [
	...Object.values(primaryCategories) as ItemCategory[],
	new ItemCategory("Seafood")
];

export {
	PrimaryCategory,
	primaryCategories,
	allItemCategories
};
