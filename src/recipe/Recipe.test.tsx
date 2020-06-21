import React from 'react';
import IngredientBundle from "../ingredient/IngredientBundle";
import Ingredient, {IngredientClass} from '../ingredient/Ingredient';
import Recipe from "./Recipe";

describe("Recipe.craft()", () => {
	test("given already crafted recipe, it remains crafted", () => {
		const craftedRecipe = Recipe.createdCrafted("crafted", []);
		expect(craftedRecipe.craft([]).crafted).toBe(true);
	});

	test("given sufficient inventory, recipe is crafted", () => {
		const inventory: IngredientBundle[] = [
			new IngredientBundle(new Ingredient("Apple", IngredientClass.FRUIT), 10),
			new IngredientBundle(new Ingredient("Banana", IngredientClass.FRUIT), 1),
			new IngredientBundle(new Ingredient("Strawberry", IngredientClass.FRUIT), 20),
		];

		const strawBerryBananaPopsicle = new Recipe("Strawberry Banana Popsicle", [
			new IngredientBundle(new Ingredient("Strawberry", IngredientClass.FRUIT), 3),
			new IngredientBundle(new Ingredient("Banana", IngredientClass.FRUIT), 1),
		]);

		expect(strawBerryBananaPopsicle.craft(inventory).crafted).toBe(true);
	});

	test("given insufficient inventory the recipe is not crafted", () => {
		const inventory: IngredientBundle[] = [
			new IngredientBundle(new Ingredient("Apple", IngredientClass.FRUIT), 10),
			new IngredientBundle(new Ingredient("Banana", IngredientClass.FRUIT), 1),
			new IngredientBundle(new Ingredient("Strawberry", IngredientClass.FRUIT), 20),
		];

		const strawBerryBananaPopsicle = new Recipe("Strawberry Banana Popsicle", [
			new IngredientBundle(new Ingredient("Strawberry", IngredientClass.FRUIT), 3),
			new IngredientBundle(new Ingredient("Banana", IngredientClass.FRUIT), 3),
		]);

		expect(strawBerryBananaPopsicle.craft(inventory).crafted).toBe(false);
	});
});

describe("Recipe.isCraftable()", () => {
	test("given sufficient inventory the recipe is not craftable", () => {
		const inventory: IngredientBundle[] = [
			new IngredientBundle(new Ingredient("Apple", IngredientClass.FRUIT), 10),
			new IngredientBundle(new Ingredient("Banana", IngredientClass.FRUIT), 1),
			new IngredientBundle(new Ingredient("Strawberry", IngredientClass.FRUIT), 20),
		];

		const strawBerryBananaPopsicle = new Recipe("Strawberry Banana Popsicle", [
			new IngredientBundle(new Ingredient("Strawberry", IngredientClass.FRUIT), 3),
			new IngredientBundle(new Ingredient("Banana", IngredientClass.FRUIT), 1),
		]);

		expect(strawBerryBananaPopsicle.isCraftable(inventory)).toBe(true);
	});

	test("given insufficient inventory the recipe is not craftable", () => {
		const inventory: IngredientBundle[] = [
			new IngredientBundle(new Ingredient("Apple", IngredientClass.FRUIT), 10),
			new IngredientBundle(new Ingredient("Banana", IngredientClass.FRUIT), 1),
			new IngredientBundle(new Ingredient("Strawberry", IngredientClass.FRUIT), 20),
		];

		const strawBerryBananaPopsicle = new Recipe("Strawberry Banana Popsicle", [
			new IngredientBundle(new Ingredient("Strawberry", IngredientClass.FRUIT), 3),
			new IngredientBundle(new Ingredient("Banana", IngredientClass.FRUIT), 3),
		]);

		expect(strawBerryBananaPopsicle.isCraftable(inventory)).toBe(false);
	});

	test("given missing inventory the recipe is not craftable", () => {
		const inventory: IngredientBundle[] = [
			new IngredientBundle(new Ingredient("Apple", IngredientClass.FRUIT), 10),
			new IngredientBundle(new Ingredient("Banana", IngredientClass.FRUIT), 1),
		];

		const strawBerryBananaPopsicle = new Recipe("Strawberry Banana Popsicle", [
			new IngredientBundle(new Ingredient("Strawberry", IngredientClass.FRUIT), 3),
			new IngredientBundle(new Ingredient("Banana", IngredientClass.FRUIT), 3),
		]);

		expect(strawBerryBananaPopsicle.isCraftable(inventory)).toBe(false);
	});

	test("given no inventory the recipe is not craftable", () => {
		const inventory: IngredientBundle[] = [];

		const strawBerryBananaPopsicle = new Recipe("Strawberry Banana Popsicle", [
			new IngredientBundle(new Ingredient("Strawberry", IngredientClass.FRUIT), 3),
			new IngredientBundle(new Ingredient("Banana", IngredientClass.FRUIT), 3),
		]);

		expect(strawBerryBananaPopsicle.isCraftable(inventory)).toBe(false);
	});

	test("given no ingredients the recipe is craftable", () => {
		const inventory: IngredientBundle[] = [
			new IngredientBundle(new Ingredient("Apple", IngredientClass.FRUIT), 10),
			new IngredientBundle(new Ingredient("Banana", IngredientClass.FRUIT), 1),
		];

		const strawBerryBananaPopsicle = new Recipe("Strawberry Banana Popsicle", []);

		expect(strawBerryBananaPopsicle.isCraftable(inventory)).toBe(true);
	});
});
