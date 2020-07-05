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

describe("Recipe.isCraftable()", () => {
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
		expect(thinAirRecipe.isCraftable([])).toBe(true);
	});

	test("empty ingredients makes the item not craftable", () => {
		const recipe = new Recipe("Strawberry Banana Cream", [
			Logic.OR,
			new RecipeIngredient(strawberry, 1)
		]);
		expect(recipe.isCraftable([])).toBe(false);
	});

	test("Logic.AND works", () => {
		expect(strawberryAndBananaCream.isCraftable([
			new ItemStack<Material>(strawberry, 1),
			new ItemStack<Material>(banana, 1),
			new ItemStack<Material>(extra, 1),
		])).toBe(true);
	});

	test("Logic.AND fails", () => {
		expect(strawberryAndBananaCream.isCraftable([
			new ItemStack<Material>(strawberry, 1),
			new ItemStack<Material>(extra, 1),
		])).toBe(false);
	});

	test("Logic.OR works", () => {
		expect(strawberryOrBananaCream.isCraftable([
			new ItemStack<Material>(banana, 1),
			new ItemStack<Material>(extra, 1),
		])).toBe(true);
	});

	test("Logic.OR fails", () => {
		expect(strawberryOrBananaCream.isCraftable([
			new ItemStack<Material>(extra, 1),
		])).toBe(false);
	});

	test("Logic.OR fails when no items match criteria", () => {
		expect(strawberryOrBananaCream.isCraftable([
			new ItemStack<Material>(extra, 1),
		])).toBe(false);
	});

	test("match on categories and items", () => {
		expect(fruitSmoothie.isCraftable([
			new ItemStack<Material>(strawberry, 2),
			new ItemStack<Material>(banana, 2),
		])).toBe(true);
	});

	test("match on categories and items fails", () => {
		expect(fruitSmoothie.isCraftable([
			new ItemStack<Material>(strawberry, 0),
			new ItemStack<Material>(banana, 1),
		])).toBe(false);
	});

	test("deeply nested matches work", () => {
		expect(smoothie.isCraftable([
			new ItemStack<Material>(strawberry, 10),
			new ItemStack<Material>(banana, 10),
			new ItemStack<Material>(blueberry, 10),
			new ItemStack<Material>(ice, 10),
		])).toBe(true);
	});

});
