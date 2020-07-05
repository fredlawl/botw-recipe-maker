import React from 'react';
import {ImmunityBuffType} from "../ImmunityBuff";
import Material from "../Material";
import Recipe, {Logic, RecipeIngredient} from "../Recipe";
import ItemStack from "../ItemStack";
import {Category, primaryCategories} from "../data/itemCategories";

describe("RecipeIngredient.matches()", function () {
	const strawberry = new Material("Strawberry", [], [], ImmunityBuffType.NONE);
	const banana = new Material("Banana", [], [], ImmunityBuffType.NONE);

	test("entity id does not match", () => {
		const recipeIngredient = new RecipeIngredient(strawberry, 1);
		expect(recipeIngredient.matches(banana, 1)).toBe(false);
	});

	test("matching amount is greater than or equal to recipe amount", () => {
		const ingredient = new RecipeIngredient(strawberry, 1);
		expect(ingredient.matches(strawberry, 0)).toBe(false);
		expect(ingredient.matches(strawberry, 1)).toBe(true);
		expect(ingredient.matches(strawberry, 3)).toBe(true);
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
		expect(thinAirRecipe.makeup([])).toBe(null);
	});

	test("empty ingredients makes the item not craftable", () => {
		const recipe = new Recipe("Strawberry Banana Cream", [
			Logic.OR,
			new RecipeIngredient(strawberry, 1)
		]);
		expect(recipe.makeup([])).toBe(null);
	});

	test("Logic.AND works", () => {
		const expected = {
			recipe: strawberryAndBananaCream,
			materials: [
				strawberry,
				banana
			]
		};

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
		])).toBe(null);
	});

	test("Logic.OR works", () => {
		const expected = {
			recipe: strawberryOrBananaCream,
			materials: [
				banana
			]
		};

		expect(strawberryOrBananaCream.makeup([
			new ItemStack<Material>(banana, 1),
			new ItemStack<Material>(extra, 1),
		])).toStrictEqual(expected);
	});

	test("Logic.OR fails when no items match criteria", () => {
		expect(strawberryOrBananaCream.makeup([
			new ItemStack<Material>(extra, 1),
		])).toBe(null);
	});

	// todo: See Recipe makeup algorithm for details on why this fails.
	test("match on categories and items", () => {
		const expected = {
			recipe: fruitSmoothie,
			materials: [
				banana,
				strawberry
			]
		};

		expect(fruitSmoothie.makeup([
			new ItemStack<Material>(strawberry, 2),
			new ItemStack<Material>(banana, 2),
		])).toStrictEqual(expected);
	});

	test("match on categories and items fails", () => {
		expect(fruitSmoothie.makeup([
			new ItemStack<Material>(strawberry, 0),
			new ItemStack<Material>(banana, 1),
		])).toBe(null);
	});

	test("deeply nested matches work", () => {
		const expected = {
			recipe: smoothie,
			materials: [
				strawberry,
				banana,
				blueberry,
				ice
			]
		};

		expect(smoothie.makeup([
			new ItemStack<Material>(strawberry, 10),
			new ItemStack<Material>(banana, 10),
			new ItemStack<Material>(blueberry, 10),
			new ItemStack<Material>(ice, 10),
		])).toStrictEqual(expected);
	});

});
