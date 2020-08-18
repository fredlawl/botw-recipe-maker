import {materialTypeLookupTable, MaterialType} from "./materials";
import {Category, primaryCategories, subCategories} from "./itemCategories";
import {EntityType, TypedEntity} from "../../Entity";
import {Material} from "../Material";

export enum Logic {
	AND,
	OR
}

export class RecipeIngredient {
	public readonly entity: TypedEntity<any>;
	public readonly amount: number;

	/**
	 * @param entity
	 * @param amount Amount is clamped to zero if a lesser value is passed. eg. -1 becomes 0
	 */
	public constructor(entity: TypedEntity<any>, amount: number) {
		this.entity = entity;
		this.amount = amount < 0 ? 0 : amount;
	}

	public matches(material: Material): boolean {
		return (this.entity.isType(EntityType.Category)) ? this.categoryMatch(material) : this.materialMatch(material);
	}

	public categoryMatch(material: Material): boolean {
		return material.categoryIdentifiers.includes(this.entity.id);
	}

	public materialMatch(material: Material): boolean {
		return this.entity.id === material.id;
	}
}

export type RecipeLogic = [Logic, ...any[]];

export interface RecipieConfig {
	name: string,
	logic: RecipeLogic
}

export const recipeConfiguration: RecipieConfig[] = [
	{
		name: 'Baked Apple',
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.APPLE], 1)
		],
	},
	{
		name: "Baked Fortified Pumpkin",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.FORTIFIED_PUMPKIN], 1)
		]
	},
	{
		name: "Baked Palm Fruit",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.PALM_FRUIT], 1)
		]
	},
	{
		name: "Blackened Crab",
		logic: [
			Logic.AND,
			new RecipeIngredient(subCategories[Category.CRAB], 1)
		]
	},
	{
		name: "Blueshell Escargot",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.HEARTY_BLUESHELL_SNAIL], 1)
		]
	},
	{
		name: "Campfire Egg",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.BIRD_EGG], 1)
		]
	},
	{
		name: "Charred Pepper",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.SPICY_PEPPER], 1)
		]
	},
	{
		name: "Roasted Acorn",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.ACORN], 1)
		]
	},
	{
		name: "Roasted Armoranth",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.ARMORANTH], 1)
		]
	},
	{
		name: "Roasted Bass",
		logic: [
			Logic.OR,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.HYRULE_BASS], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.STAMINOKA_BASS], 1)
		]
	},
	{
		name: "Hearty Roasted Bass",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.HEARTY_BASS], 1)
		]
	},
	{
		name: "Roasted Big Radish",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.BIG_HEARTY_RADISH], 1)
		]
	},
	{
		name: "Roasted Bird Drumstick",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.RAW_BIRD_DRUMSTICK], 1)
		]
	},
	{
		name: "Roasted Bird Thigh",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.RAW_BIRD_THIGH], 1)
		]
	},
	{
		name: "Roasted Carp",
		logic: [
			Logic.OR,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.ARMORED_CARP], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.MIGHTY_CARP], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.SANKE_CARP], 1),
		]
	},
	{
		name: "Roasted Endura Carrot",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.ENDURA_CARROT], 1),
		]
	},
	{
		name: "Roasted Hearty Bass",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.HEARTY_BASS], 1),
		]
	},
	{
		name: "Roasted Hearty Durian",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.HEARTY_BASS], 1),
		]
	},
	{
		name: "Roasted Hearty Salmon",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.HEARTY_SALMON], 1),
		]
	},
	{
		name: "Roasted Hydromelon",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.HYDROMELON], 1),
		]
	},
	{
		name: "Roasted Lotus Seeds",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.FLEET_LOTUS_SEEDS], 1),
		]
	},
	{
		name: "Roasted Mighty Bananas",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.MIGHTY_BANANAS], 1),
		]
	},
	{
		name: "Roasted Mighty Thistle",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.MIGHTY_THISTLE], 1),
		]
	},
	{
		name: "Roasted Porgy",
		logic: [
			Logic.OR,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.ARMORED_PORGY], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.MIGHTY_PORGY], 1),
		]
	},
	{
		name: "Roasted Radish",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.HEARTY_RADISH], 1),
		]
	},
	{
		name: "Roasted Swift Carrot",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.SWIFT_CARROT], 1),
		]
	},
	{
		name: "Roasted Tree Nut",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.CHICKALOO_TREE_NUT], 1),
		]
	},
	{
		name: "Roasted Trout",
		logic: [
			Logic.OR,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.CHILLFIN_TROUT], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.SIZZLEFIN_TROUT], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.STEALTHFIN_TROUT], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.VOLTFIN_TROUT], 1),
		]
	},
	{
		name: "Roasted Voltfruit",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.VOLTFRUIT], 1),
		]
	},
	{
		name: "Roasted Whole Bird",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.RAW_WHOLE_BIRD], 1),
		]
	},
	{
		name: "Roasted Wildberry",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.WILDBERRY], 1),
		]
	},
	{
		name: "Seared Gourmet Steak",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.RAW_GOURMET_MEAT], 1),
		]
	},
	{
		name: "Seared Prime Steak",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.RAW_PRIME_MEAT], 1),
		]
	},
	{
		name: "Seared Steak",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.RAW_MEAT], 1),
		]
	},
	{
		name: "Sneaky River Escargot",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.SNEAKY_RIVER_SNAIL], 1),
		]
	},
	{
		name: "Toasted Big Hearty Truffle",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.BIG_HEARTY_TRUFFLE], 1),
		]
	},
	{
		name: "Toasted Hearty Truffle",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.HEARTY_TRUFFLE], 1),
		]
	},
	{
		name: "Toasty Chillshroom",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.CHILLSHROOM], 1),
		]
	},
	{
		name: "Toasty Endura Shroom",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.ENDURA_SHROOM], 1),
		]
	},
	{
		name: "Toasty Hylian Shroom",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.HYLIAN_SHROOM], 1),
		]
	},
	{
		name: "Toasty Ironshroom",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.IRONSHROOM], 1),
		]
	},
	{
		name: "Toasty Razorshroom",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.RAZORSHROOM], 1),
		]
	},
	{
		name: "Toasty Rushroom",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.RUSHROOM], 1),
		]
	},
	{
		name: "Toasty Silent Shroom",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.SILENT_SHROOM], 1),
		]
	},
	{
		name: "Toasty Stamella Shroom",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.STAMELLA_SHROOM], 1),
		]
	},
	{
		name: "Toasty Sunshroom",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.SUNSHROOM], 1),
		]
	},
	{
		name: "Toasty Zapshroom",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.ZAPSHROOM], 1),
		]
	},
	{
		name: "Apple Pie",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.TABANTHA_WHEAT], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.CANE_SUGAR], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.GOAT_BUTTER], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.APPLE], 1),
		]
	},
	{
		name: "Carrot Cake",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.TABANTHA_WHEAT], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.CANE_SUGAR], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.GOAT_BUTTER], 1),
			[
				Logic.OR,
				new RecipeIngredient(materialTypeLookupTable[MaterialType.SWIFT_CARROT], 1),
				new RecipeIngredient(materialTypeLookupTable[MaterialType.ENDURA_CARROT], 1),
			]
		]
	},
	{
		name: "Carrot Stew",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.FRESH_MILK], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.GOAT_BUTTER], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.TABANTHA_WHEAT], 1),
			[
				Logic.OR,
				new RecipeIngredient(materialTypeLookupTable[MaterialType.SWIFT_CARROT], 1),
				new RecipeIngredient(materialTypeLookupTable[MaterialType.ENDURA_CARROT], 1),
			]
		]
	},
	{
		name: "Crab Omelet with Rice",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.HYLIAN_RICE], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.BIRD_EGG], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.ROCK_SALT], 1),
			new RecipeIngredient(subCategories[Category.CRAB], 1),
		]
	},
	{
		name: "Crab Risotto",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.HYLIAN_RICE], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.GOAT_BUTTER], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.ROCK_SALT], 1),
			new RecipeIngredient(subCategories[Category.CRAB], 1),
		]
	},
	{
		name: "Crab Stir-Fry",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.GORON_SPICE], 1),
			new RecipeIngredient(subCategories[Category.CRAB], 1),
		]
	},
	{
		name: "Cream of Mushroom Soup",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.FRESH_MILK], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.ROCK_SALT], 1),
			new RecipeIngredient(primaryCategories[Category.SHROOMS], 1),
			[
				Logic.OR,
				new RecipeIngredient(primaryCategories[Category.PLANTS], 1),
				new RecipeIngredient(primaryCategories[Category.VEGETABLES], 1),
			]
		]
	},
// todo: This recipe needs to be tested in game specifically
	{
		name: "Cream of Vegetable Soup",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.ROCK_SALT], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.FRESH_MILK], 1),
			[
				Logic.OR,
				new RecipeIngredient(primaryCategories[Category.PLANTS], 1),
				new RecipeIngredient(materialTypeLookupTable[MaterialType.HEARTY_RADISH], 1),
				new RecipeIngredient(materialTypeLookupTable[MaterialType.BIG_HEARTY_RADISH], 1),
			]
		]
	},
	{
		name: "Creamy Heart Soup",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.VOLTFRUIT], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.HYDROMELON], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.FRESH_MILK], 1),
			[
				Logic.OR,
				new RecipeIngredient(materialTypeLookupTable[MaterialType.BIG_HEARTY_RADISH], 1),
				new RecipeIngredient(materialTypeLookupTable[MaterialType.HEARTY_RADISH], 1),
			]
		]
	},
	{
		name: "Creamy Meat Soup",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.FRESH_MILK], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.ROCK_SALT], 1),
			new RecipeIngredient(primaryCategories[Category.MEAT], 1),
			[
				Logic.OR,
				new RecipeIngredient(primaryCategories[Category.PLANTS], 1),
				new RecipeIngredient(primaryCategories[Category.VEGETABLES], 1),
			]
		]
	},
	{
		name: "Creamy Seafood Soup",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.FRESH_MILK], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.ROCK_SALT], 1),
			new RecipeIngredient(primaryCategories[Category.SEAFOOD], 1),
			new RecipeIngredient(primaryCategories[Category.PLANTS], 1),
		]
	},
	{
		name: "Curry Pilaf",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.HYLIAN_RICE], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.BIRD_EGG], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.GOAT_BUTTER], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.GORON_SPICE], 1),
		]
	},
	{
		name: "Curry Rice",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.HYLIAN_RICE], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.GORON_SPICE], 1),
		]
	},
	{
		name: "Egg Pudding",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.FRESH_MILK], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.BIRD_EGG], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.CANE_SUGAR], 1),
		]
	},
	{
		name: "Egg Tart",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.TABANTHA_WHEAT], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.BIRD_EGG], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.CANE_SUGAR], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.GOAT_BUTTER], 1),
		]
	},
	{
		name: "Energizing Glazed Meat",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.COURSER_BEE_HONEY], 1),
			new RecipeIngredient(primaryCategories[Category.MEAT], 1),
		]
	},
	{
		name: "Energizing Honey Candy",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.COURSER_BEE_HONEY], 1),
		]
	},
	{
		name: "Energizing Honeyed Apple",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.COURSER_BEE_HONEY], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.APPLE], 1),
		]
	},
// todo: Need to classify fish specifically for this, test with game if snail works
	{
		name: "Fish Skewer",
		logic: [
			Logic.AND,
			new RecipeIngredient(subCategories[Category.FISH_AND_SNALES], 1),
		]
	},
// todo: We'll want the UNIQUE operator here: "Any 4 different seafood"
	{
		name: "Copious Fish Skewers",
		logic: [
			Logic.AND,
			new RecipeIngredient(primaryCategories[Category.SEAFOOD], 4),
		]
	},
	{
		name: "Fish and Mushroom Skewer",
		logic: [
			Logic.AND,
			new RecipeIngredient(primaryCategories[Category.SEAFOOD], 1),
			new RecipeIngredient(primaryCategories[Category.SHROOMS], 4),
		]
	},
	{
		name: "Fish Pie",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.TABANTHA_WHEAT], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.GOAT_BUTTER], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.ROCK_SALT], 1),
			new RecipeIngredient(primaryCategories[Category.SEAFOOD], 1),
		]
	},
	{
		name: "Fragrant Mushroom Sauté",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.GORON_SPICE], 1),
			new RecipeIngredient(primaryCategories[Category.SHROOMS], 1),
		]
	},
	{
		name: "Fried Bananas",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.MIGHTY_BANANAS], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.TABANTHA_WHEAT], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.CANE_SUGAR], 1),
		]
	},
	{
		name: "Fried Egg and Rice",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.HYLIAN_RICE], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.BIRD_EGG], 1),
		]
	},
// todo: Test this in game, it's a bit weirdly worded: Any Vegetable, Herb, or Flower
	{
		name: "Fried Wild Greens",
		logic: [
			Logic.OR,
			new RecipeIngredient(primaryCategories[Category.PLANTS], 1),
			new RecipeIngredient(primaryCategories[Category.VEGETABLES], 1),
		]
	},
// todo: Similar to "Copious Fish Skewers"; Any 4 different Vegetables, Herbs, or Flowers
	{
		name: "Copious Fried Wild Greens",
		logic: [
			Logic.OR,
			new RecipeIngredient(primaryCategories[Category.PLANTS], 1),
			new RecipeIngredient(primaryCategories[Category.VEGETABLES], 1),
		]
	},
	{
		name: "Fruit and Mushroom Mix",
		logic: [
			Logic.AND,
			new RecipeIngredient(primaryCategories[Category.FRUIT], 1),
			new RecipeIngredient(primaryCategories[Category.SHROOMS], 1),
		]
	},
	{
		name: "Fruit Pie",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.TABANTHA_WHEAT], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.CANE_SUGAR], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.GOAT_BUTTER], 1),
			[
				Logic.OR,
				// todo: Every fruit except Apple; so we need to fix that too :X
				new RecipeIngredient(materialTypeLookupTable[MaterialType.FLEET_LOTUS_SEEDS], 1),
				new RecipeIngredient(materialTypeLookupTable[MaterialType.HEARTY_DURIAN], 1),
				new RecipeIngredient(materialTypeLookupTable[MaterialType.HYDROMELON], 1),
				new RecipeIngredient(materialTypeLookupTable[MaterialType.MIGHTY_BANANAS], 1),
				new RecipeIngredient(materialTypeLookupTable[MaterialType.PALM_FRUIT], 1),
				new RecipeIngredient(materialTypeLookupTable[MaterialType.SPICY_PEPPER], 1),
				new RecipeIngredient(materialTypeLookupTable[MaterialType.VOLTFRUIT], 1),
				new RecipeIngredient(materialTypeLookupTable[MaterialType.WILDBERRY], 1),
			]
		]
	},
	{
		name: "Fruitcake",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.TABANTHA_WHEAT], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.CANE_SUGAR], 1),
			new RecipeIngredient(primaryCategories[Category.FRUIT], 1),
			[
				Logic.OR,
				new RecipeIngredient(materialTypeLookupTable[MaterialType.APPLE], 1),
				new RecipeIngredient(materialTypeLookupTable[MaterialType.WILDBERRY], 1),
			]
		]
	},
	{
		name: "Glazed Mushrooms",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.COURSER_BEE_HONEY], 1),
			new RecipeIngredient(primaryCategories[Category.SHROOMS], 1),
		]
	},
	{
		name: "Glazed Seafood",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.COURSER_BEE_HONEY], 1),
			new RecipeIngredient(primaryCategories[Category.SEAFOOD], 1),
		]
	},
	{
		name: "Glazed Veggies",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.COURSER_BEE_HONEY], 1),
			[
				Logic.OR,
				new RecipeIngredient(primaryCategories[Category.VEGETABLES], 1),
				new RecipeIngredient(primaryCategories[Category.PLANTS], 1),
			]
		]
	},
	{
		name: "Gourmet Meat and Rice Bowl",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.ROCK_SALT], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.HYLIAN_RICE], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.RAW_GOURMET_MEAT], 1),
		]
	},
// todo: Test this in game, "Any gourmet meat", but there's only 1?? Does it mean any red meat?
	{
		name: "Gourmet Meat and Seafood Fry",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.RAW_GOURMET_MEAT], 1),
			new RecipeIngredient(primaryCategories[Category.SEAFOOD], 1)
		]
	},
// todo: Test this in game, "Any gourmet meat", but there's only 1?? Does it mean any red meat?
	{
		name: "Gourmet Meat Curry",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.RAW_GOURMET_MEAT], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.GORON_SPICE], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.HYLIAN_RICE], 1),
		]
	},
// todo: Test this in game, "Any gourmet meat", but there's only 1?? Does it mean any red meat?
	{
		name: "Gourmet Meat Stew",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.RAW_GOURMET_MEAT], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.TABANTHA_WHEAT], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.FRESH_MILK], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.GOAT_BUTTER], 1),
		]
	},
	{
		name: "Gourmet Poultry Curry",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.RAW_WHOLE_BIRD], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.HYLIAN_RICE], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.GORON_SPICE], 1),
		]
	},
	{
		name: "Gourmet Poultry Pilaf",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.RAW_WHOLE_BIRD], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.HYLIAN_RICE], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.GOAT_BUTTER], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.BIRD_EGG], 1),
		]
	},
	{
		name: "Gourmet Spiced Meat Skewer",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.RAW_GOURMET_MEAT], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.GORON_SPICE], 1),
		]
	},
	{
		name: "Hearty Clam Chowder",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.FRESH_MILK], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.TABANTHA_WHEAT], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.GOAT_BUTTER], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.HEARTY_BLUESHELL_SNAIL], 1),
		]
	},
	{
		name: "Hearty Salmon Muenière",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.TABANTHA_WHEAT], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.GOAT_BUTTER], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.HEARTY_SALMON], 1),
		]
	},
	{
		name: "Herb Sauté",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.GORON_SPICE], 1),
			[
				Logic.OR,
				new RecipeIngredient(primaryCategories[Category.VEGETABLES], 1),
				new RecipeIngredient(primaryCategories[Category.PLANTS], 1),
			]
		]
	},
	{
		name: "Honey Crepe",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.COURSER_BEE_HONEY], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.CANE_SUGAR], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.TABANTHA_WHEAT], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.BIRD_EGG], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.FRESH_MILK], 1),
		]
	},
	{
		name: "Honeyed Fruits",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.COURSER_BEE_HONEY], 1),
			[
				Logic.OR,
				// todo: Every fruit except Apple; so we need to fix that too :X
				new RecipeIngredient(materialTypeLookupTable[MaterialType.FLEET_LOTUS_SEEDS], 1),
				new RecipeIngredient(materialTypeLookupTable[MaterialType.HEARTY_DURIAN], 1),
				new RecipeIngredient(materialTypeLookupTable[MaterialType.HYDROMELON], 1),
				new RecipeIngredient(materialTypeLookupTable[MaterialType.MIGHTY_BANANAS], 1),
				new RecipeIngredient(materialTypeLookupTable[MaterialType.PALM_FRUIT], 1),
				new RecipeIngredient(materialTypeLookupTable[MaterialType.SPICY_PEPPER], 1),
				new RecipeIngredient(materialTypeLookupTable[MaterialType.VOLTFRUIT], 1),
				new RecipeIngredient(materialTypeLookupTable[MaterialType.WILDBERRY], 1),
			]
		]
	},
	{
		name: "Hot Buttered Apple",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.APPLE], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.GOAT_BUTTER], 1),
		]
	},
	{
		name: "Meat and Mushroom Skewer",
		logic: [
			Logic.AND,
			new RecipeIngredient(primaryCategories[Category.MEAT], 1),
			new RecipeIngredient(primaryCategories[Category.SHROOMS], 1),
		]
	},
	{
		name: "Meat and Rice Bowl",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.HYLIAN_RICE], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.ROCK_SALT], 1),
			new RecipeIngredient(primaryCategories[Category.MEAT], 1),
		]
	},
	{
		name: "Meat and Seafood Fry",
		logic: [
			Logic.AND,
			new RecipeIngredient(primaryCategories[Category.SEAFOOD], 1),
			new RecipeIngredient(primaryCategories[Category.MEAT], 1),
		]
	},
	{
		name: "Meat Curry",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.RAW_MEAT], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.GORON_SPICE], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.HYLIAN_RICE], 1),
		]
	},
	{
		name: "Meat Pie",
		logic: [
			Logic.AND,
			new RecipeIngredient(primaryCategories[Category.MEAT], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.TABANTHA_WHEAT], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.GOAT_BUTTER], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.ROCK_SALT], 1),
		]
	},
// todo: Any 3 or less logic needs implemented
	{
		name: "Meat Skewer",
		logic: [
			Logic.AND,
			new RecipeIngredient(primaryCategories[Category.MEAT], 3),
		]
	},
// todo: Any 4 meats needs to be implemented
	{
		name: "Copious Meat Skewers",
		logic: [
			Logic.AND,
			new RecipeIngredient(primaryCategories[Category.MEAT], 4),
		]
	},
	{
		name: "Meat Stew",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.TABANTHA_WHEAT], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.GOAT_BUTTER], 1),
			new RecipeIngredient(materialTypeLookupTable[MaterialType.FRESH_MILK], 1),
			[
				Logic.OR,
				new RecipeIngredient(materialTypeLookupTable[MaterialType.RAW_MEAT], 1),
				new RecipeIngredient(materialTypeLookupTable[MaterialType.RAW_BIRD_DRUMSTICK], 1),
			]
		]
	},
	{
		name: "Meaty Rice Balls",
		logic: [
			Logic.AND,
			new RecipeIngredient(materialTypeLookupTable[MaterialType.HYLIAN_RICE], 1),
			new RecipeIngredient(primaryCategories[Category.MEAT], 1)
		]
	},
];

// const oldRecipeConfigStyle: Recipe[] = [
// 	new Recipe("Monster Cake", [
// 		// "Tabantha Wheat
// 		// Cane Sugar
// 		// Goat Butter
// 		// Monster Extract"
// 	]),
// 	new Recipe("Monster Curry", [
// 		// "Hylian Rice
// 		// Goron Spice
// 		// Monster Extract"
// 	]),
// 	new Recipe("Monster Rice Balls", [
// 		// "Hylian Rice
// 		// Rock Salt
// 		// Monster Extract"
// 	]),
// 	new Recipe("Monster Soup", [
// 		// "Monster Extract
// 		// Tabantha Wheat
// 		// Fresh Milk
// 		// Goat Butter"
// 	]),
// 	new Recipe("Monster Stew", [
// 		// "Any Meat
// 		// Any Seafood
// 		// Monster Extract"
// 	]),
// 	new Recipe("Mushroom Omelet", [
// 		// "Any Mushroom
// 		// Bird Egg
// 		// Goat Butter
// 		// Rock Salt"
// 	]),
// 	new Recipe("Mushroom Rice Balls", [
// 		// "Hylian Rice
// 		// Any Mushroom"
// 	]),
// 	new Recipe("Mushroom Risotto", [
// 		// "Hylian Rice
// 		// Goat Butter
// 		// Rock Salt
// 		// Any Mushroom"
// 	]),
// 	new Recipe("Mushroom Skewer", [
// 		// Any Mushroom
// 	]),
// 	new Recipe("Copious Mushrooms Skewers", [
// 		// Any 4 different Mushrooms
// 	]),
// 	new Recipe("Nutcake", [
// 		// "Any Nut
// 		// Tabantha Wheat
// 		// Cane Sugar
// 		// Goat Butter"
// 	]),
// 	new Recipe("Omelet", [
// 		// Bird Egg
// 	]),
// 	new Recipe("Pepper Seafood", [
// 		// "Spicy Pepper
// 		// Any Seafood"
// 	]),
// 	new Recipe("Plain Crepe", [
// 		// "Fresh Milk
// 		// Cane Sugar
// 		// Tabantha Wheat
// 		// Bird Egg
// 		// Goat Butter"
// 	]),
// 	new Recipe("Porgy Meunière", [
// 		// "Any Porgy
// 		// Goat Butter
// 		// Tabantha Wheat"
// 	]),
// 	new Recipe("Poultry Curry", [
// 		// "Raw Bird Drumstick
// 		// Hylian Rice
// 		// Goron Spice"
// 	]),
// 	new Recipe("Poultry Pilaf", [
// 		// "Raw Bird Drumstick
// 		// Hylian Rice
// 		// Bird Egg
// 		// Goat Butter"
// 	]),
// 	new Recipe("Prime Meat and Rice Bowl", [
// 		// "Raw Prime Meat
// 		// Hylian Rice
// 		// Rock Salt"
// 	]),
// 	new Recipe("Prime Meat and Seafood Fry", [
// 		// "Any Prime Meat
// 		// Any Seafood"
// 	]),
// 	new Recipe("Prime Meat Curry", [
// 		// "Raw Prime Meat
// 		// Hylian Rice
// 		// Goron Spice"
// 	]),
// 	new Recipe("Prime Meat Stew", [
// 		// "Any Prime Meat
// 		// Tabantha Wheat
// 		// Goat Butter
// 		// Fresh Milk"
// 	]),
// 	new Recipe("Prime Poultry Curry", [
// 		// "Raw Bird Thigh
// 		// Goron Spice
// 		// Hylian Rice"
// 	]),
// 	new Recipe("Prime Poultry Pilaf", [
// 		// "Raw Bird Thigh
// 		// Hylian Rice
// 		// Bird Egg
// 		// Goat Butter"
// 	]),
// 	new Recipe("Prime Spiced Meat Skewer", [
// 		// "Raw Prime Meat
// 		// Goron Spice"
// 	]),
// 	new Recipe("Pumpkin Pie", [
// 		// "Fortified Pumpkin
// 		// Tabantha Wheat
// 		// Cane Sugar
// 		// Goat Butter"
// 	]),
// 	new Recipe("Pumpkin Stew", [
// 		// "Fortified Pumpkin
// 		// Tabantha Wheat
// 		// Goat Butter
// 		// Fresh Milk"
// 	]),
// 	new Recipe("Rock-Hard Food", [
// 		// Wood or ore
// 	]),
// 	new Recipe("Salmon Risotto", [
// 		// "Hearty Salmon
// 		// Hylian Rice
// 		// Goat Butter
// 		// Rock Salt"
// 	]),
// 	new Recipe("Salt-Grilled Crab", [
// 		// "Rock Salt
// 		// Any Crab"
// 	]),
// 	new Recipe("Salt-Grilled Fish", [
// 		// "Rock Salt
// 		// Any Fish or Snail"
// 	]),
// 	new Recipe("Salt-Grilled Gourmet Meat", [
// 		// "Rock Salt
// 		// Any Gourmet Meat"
// 	]),
// 	new Recipe("Salt-Grilled Greens", [
// 		// "Rock Salt
// 		// Any Vegetable, Herb, or Flower"
// 	]),
// 	new Recipe("Salt-Grilled Meat", [
// 		// "Rock Salt
// 		// Raw Meat or Raw Bird Drumstick"
// 	]),
// 	new Recipe("Salt-Grilled Mushrooms", [
// 		// "Any Mushroom
// 		// Rock Salt"
// 	]),
// 	new Recipe("Salt-Grilled Prime Meat", [
// 		// "Any Prime Meat
// 		// Rock Salt"
// 	]),
// 	new Recipe("Sautéed Nuts", [
// 		// "Acorn
// 		// or
// 		// Chickaloo Tree Nut"
// 	]),
// 	new Recipe("Seafood Curry", [
// 		// "Goron Spice
// 		// Hylian Rice
// 		// Hearty Blueshell Snail or Any Porgy"
// 	]),
// 	new Recipe("Seafood Fried Rice", [
// 		// "Hylian Rice
// 		// Rock Salt
// 		// Hearty Blueshell Snail or Any Porgy"
// 	]),
// 	new Recipe("Seafood Meunière", [
// 		// "Any Seafood (except Porgy or Salmon)
// 		// Tabantha Wheat
// 		// Goat Butter"
// 	]),
// 	new Recipe("Seafood Paella", [
// 		// "Hearty Blueshell Snail
// 		// Any Porgy
// 		// Hylian Rice
// 		// Goat Butter
// 		// Rock Salt"
// 	]),
// 	new Recipe("Seafood Rice Balls", [
// 		// "Hylian Rice
// 		// Any Seafood"
// 	]),
// 	new Recipe("Seafood Skewer", [
// 		// Any Crab or Snail
// 	]),
// 	new Recipe("Simmered Fruit", [
// 		// Any Fruit
// 	]),
// 	new Recipe("Copious Simmered Fruit", [
// 		// Any 4 different Fruit
// 	]),
// 	new Recipe("Spiced Meat Skewer", [
// 		// "Goron Spice
// 		// Raw Meat"
// 	]),
// 	new Recipe("Spicy Pepper Steak", [
// 		// "Spicy Pepper
// 		// Any Meat"
// 	]),
// 	new Recipe("Spicy Sautéed Peppers", [
// 		// Spicy Pepper
// 	]),
// 	new Recipe("Steamed Fish", [
// 		// "Any Vegetable, Herb, or Flower
// 		// Any Seafood"
// 	]),
// 	new Recipe("Steamed Fruit", [
// 		// "Any Fruit
// 		// Any Vegetable, Herb, or Flower"
// 	]),
// 	new Recipe("Steamed Meat", [
// 		// "Any Meat
// 		// Any Vegetable, Herb, or Flower (except Pumpkin)"
// 	]),
// 	new Recipe("Steamed Mushroom", [
// 		// "Any Mushroom
// 		// Any Vegetable, Herb, or Flower"
// 	]),
// 	new Recipe("Tough Meat-Stuffed Pumpkin", [
// 		// "Fortified Pumpkin
// 		// Any Meat"
// 	]),
// 	new Recipe("Vegetable Curry", [
// 		// "Any Carrot or Pumpkin
// 		// Hylian Rice
// 		// Goron Spice"
// 	]),
// 	new Recipe("Vegetable Omelet", [
// 		// "Any Vegetable, Herb, or Flower
// 		// Bird Egg
// 		// Goat Butter
// 		// Rock Salt"
// 	]),
// 	new Recipe("Vegetable Risotto", [
// 		// "Any Carrot or Pumpkin
// 		// Hylian Rice
// 		// Goat Butter
// 		// Rock Salt"
// 	]),
// 	new Recipe("Veggie Cream Soup", [
// 		// "Any Carrot or Pumpkin
// 		// Fresh Milk
// 		// Rock Salt"
// 	]),
// 	new Recipe("Veggie Rice Balls", [
// 		// "Any Vegetable, Herb, or Flower
// 		// Hylian Rice"
// 	]),
// 	new Recipe("Warm Milk", [
// 		// Fresh Milk
// 	]),
// 	new Recipe("Wheat Bread", [
// 		// "Tabantha Wheat
// 		// Rock Salt"
// 	]),
// 	new Recipe("Wildberry Crepe", [
// 		// "Wildberry
// 		// Fresh Milk
// 		// Cane Sugar
// 		// Tabantha Wheat
// 		// Bird Egg"
// 	]),
// ];
