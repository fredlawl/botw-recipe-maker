import React from 'react';
import {ImmunityBuffType} from "../ImmunityBuff";
import {Material} from "../Material";
import {Recipe} from "../Recipe";
import {ItemStack} from "../ItemStack";
import {Category, primaryCategories} from "../database/itemCategories";
import {ItemCategory} from "../ItemCategory";
import {materialTypeLookupTable, MaterialType} from "../database/materials";

describe("RecipeIngredient.matches()", function () {
	const fruitCategory = new ItemCategory("Fruit");
	const strawberry = new Material("Strawberry", [
		fruitCategory
	], [], ImmunityBuffType.NONE);
	const banana = new Material("Banana", [
		fruitCategory
	], [], ImmunityBuffType.NONE);

	test("entity id does not match", () => {
		const recipeIngredient = new RecipeIngredient(strawberry, 1);
		expect(recipeIngredient.matches(new ItemStack<Material>(banana, 1))).toBe(false);
	});

	test("matching amount is greater than or equal to recipe amount", () => {
		const ingredient = new RecipeIngredient(strawberry, 1);
		expect(ingredient.matches(new ItemStack<Material>(strawberry, 0))).toBe(false);
		expect(ingredient.matches(new ItemStack<Material>(strawberry, 1))).toBe(true);
		expect(ingredient.matches(new ItemStack<Material>(strawberry, 3))).toBe(true);
	});

	test("material matches category", () => {
		const ingredient = new RecipeIngredient(fruitCategory, 1);
		expect(ingredient.matches(new ItemStack<Material>(strawberry, 1))).toBe(true);
	});

	test("material should not match different category", () => {
		const ingredient = new RecipeIngredient(new ItemCategory("Shrooms"), 1);
		expect(ingredient.matches(new ItemStack<Material>(strawberry, 1))).toBe(false);
	});
});

describe("Recipe.makeup()", () => {
	const strawberry = new Material("Strawberry", [
		primaryCategories[Category.FRUIT]
	], [], ImmunityBuffType.NONE);

	const banana = new Material("Banana", [
		primaryCategories[Category.FRUIT]
	], [], ImmunityBuffType.NONE);

	const blueberry = new Material("Blueberry", [
		primaryCategories[Category.FRUIT]
	], [], ImmunityBuffType.NONE);

	const ice = new Material("Ice", [], [], ImmunityBuffType.NONE);

	const extra = new Material("Extra", [], [], ImmunityBuffType.NONE);

	const strawberryAndBananaCream = new Recipe("Strawberry Banana Cream", [
		Logic.AND,
		new RecipeIngredient(strawberry, 1),
		new RecipeIngredient(banana, 1),
	]);

	const strawberryOrBananaCream = new Recipe("Strawberry Or Banana Cream", [
		Logic.OR,
		new RecipeIngredient(strawberry, 1),
		new RecipeIngredient(banana, 1),
	]);

	const smoothie = new Recipe("Berry smoothie", [
		Logic.AND,
		[
			Logic.OR,
			new RecipeIngredient(strawberry, 1),
			new RecipeIngredient(banana, 1),
			new RecipeIngredient(blueberry, 1)
		],
		new RecipeIngredient(ice, 1)
	]);

	const fruitSmoothie = new Recipe("Fruit Smoothy", [
		Logic.AND,
		new RecipeIngredient(primaryCategories[Category.FRUIT], 2)
	]);

	test("recipe with no defined logic is craftable", () => {
		const thinAirRecipe = new Recipe("Thin air", []);
		expect(thinAirRecipe.makeup([])).toEqual([]);
	});

	test("empty ingredients makes the item not craftable", () => {
		const recipe = new Recipe("Strawberry Banana Cream", [
			Logic.OR,
			new RecipeIngredient(strawberry, 1)
		]);
		expect(recipe.makeup([])).toEqual([]);
	});

	test("Logic.AND works", () => {
		const expected = [
			Recipe.craftable(strawberryAndBananaCream, [
				new ItemStack<Material>(strawberry, 1),
				new ItemStack<Material>(banana, 1)
			])
		];

		expect(strawberryAndBananaCream.makeup([
			new ItemStack<Material>(strawberry, 1),
			new ItemStack<Material>(banana, 1),
			new ItemStack<Material>(extra, 1),
		])).toStrictEqual(expected);
	});

	test("Logic.AND fails", () => {
		expect(strawberryAndBananaCream.makeup([
			new ItemStack<Material>(strawberry, 1),
			new ItemStack<Material>(extra, 1),
		])).toEqual([]);
	});

	test("Logic.OR works", () => {
		const expected = [
			Recipe.craftable(strawberryOrBananaCream, [
				new ItemStack<Material>(banana, 1)
			])
		];

		expect(strawberryOrBananaCream.makeup([
			new ItemStack<Material>(banana, 1),
			new ItemStack<Material>(extra, 1),
		])).toStrictEqual(expected);
	});

	test("Logic.OR fails when no items match criteria", () => {
		expect(strawberryOrBananaCream.makeup([
			new ItemStack<Material>(extra, 1),
		])).toEqual([]);
	});

	test("match on category expect stack of 1 because of two ingredients consumed", () => {
		const expected = [
			Recipe.craftable(fruitSmoothie, [
				new ItemStack<Material>(strawberry, 2),
			])
		];

		expect(fruitSmoothie.makeup([
			new ItemStack<Material>(strawberry, 3),
		])).toStrictEqual(expected);
	});

	test("match on category expect stack of 2 because of two ingredients consumed", () => {
		const expected = [
			Recipe.craftable(fruitSmoothie, [
				new ItemStack<Material>(strawberry, 2)
			]),
			Recipe.craftable(fruitSmoothie, [
				new ItemStack<Material>(banana, 2)
			])
		];

		expect(fruitSmoothie.makeup([
			new ItemStack<Material>(strawberry, 2),
			new ItemStack<Material>(banana, 2),
		])).toStrictEqual(expected);
	});

	test("match on categories and items fails", () => {
		expect(fruitSmoothie.makeup([
			new ItemStack<Material>(strawberry, 0),
			new ItemStack<Material>(banana, 1),
		])).toEqual([]);
	});

	test("fruit and shroom should be null given only fruit", () => {
		const fruitAndShroom = new Recipe("Fruit and Mushroom Mix", [
			Logic.AND,
			new RecipeIngredient(primaryCategories[Category.FRUIT], 1),
			new RecipeIngredient(primaryCategories[Category.SHROOMS], 1),
		]);

		expect(fruitAndShroom.makeup([
			new ItemStack<Material>(strawberry, 1),
			new ItemStack<Material>(banana, 1)
		])).toStrictEqual([]);
	});

	test("fruit and shroom should not be null given 2 fruits + shroom", () => {
		const shroomie = new Material("shroomie", [primaryCategories[Category.SHROOMS]], [], ImmunityBuffType.NONE);
		const fruitAndShroom = new Recipe("Fruit and Mushroom Mix", [
			Logic.AND,
			new RecipeIngredient(primaryCategories[Category.FRUIT], 1),
			new RecipeIngredient(primaryCategories[Category.SHROOMS], 1),
		]);

		const actual = fruitAndShroom.makeup([
			new ItemStack<Material>(strawberry, 1),
			new ItemStack<Material>(banana, 1),
			new ItemStack<Material>(shroomie, 1)
		]);

		const expected = [
			Recipe.craftable(fruitAndShroom, [
				new ItemStack<Material>(strawberry, 1),
				new ItemStack<Material>(shroomie, 1)
			])
		];

		expect(actual).toStrictEqual(expected);
	});

	test("Fruitcake should work", () => {
		// Brittle test, but needed for figuring out algorithm
		const apple = materialTypeLookupTable[MaterialType.APPLE];
		const caneSugar = materialTypeLookupTable[MaterialType.CANE_SUGAR];
		const bananna = materialTypeLookupTable[MaterialType.MIGHTY_BANANAS];
		const wheat = materialTypeLookupTable[MaterialType.TABANTHA_WHEAT];
		const wildberry = materialTypeLookupTable[MaterialType.WILDBERRY];

		const fruitcake = new Recipe("Fruitcake", [
			Logic.AND,
			new RecipeIngredient(wheat, 1),
			new RecipeIngredient(caneSugar, 1),
			new RecipeIngredient(primaryCategories[Category.FRUIT], 1),
			[
				Logic.OR,
				new RecipeIngredient(apple, 1),
				new RecipeIngredient(wildberry, 1),
			]
		]);

		const expected = [
			Recipe.craftable(fruitcake, [
				new ItemStack<Material>(apple, 1),
				new ItemStack<Material>(wheat, 1),
				new ItemStack<Material>(caneSugar, 1),
				new ItemStack<Material>(bananna, 1),
			])
		];

		expect(fruitcake.makeup([
			new ItemStack<Material>(apple, 1),
			new ItemStack<Material>(caneSugar, 1),
			new ItemStack<Material>(wheat, 1),
			new ItemStack<Material>(bananna, 1),
		])).toStrictEqual(expected);

	});


});
