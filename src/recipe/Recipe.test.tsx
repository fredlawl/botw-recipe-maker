import React from 'react';
import ItemStack from "../item/ItemStack";
import Ingredient, {IngredientClass} from '../inventory/Ingredient';
import Recipe from "./Recipe";

describe("Recipe.craft()", () => {
	test("given already crafted recipe, it remains crafted", () => {
		const craftedRecipe = Recipe.createCrafted("crafted", []);
		expect(craftedRecipe.craft([]).crafted).toBe(true);
	});

	test("given sufficient inventory, recipe is crafted", () => {
		const inventory: ItemStack[] = [
			new ItemStack(new Ingredient("Apple", IngredientClass.FRUIT), 10),
			new ItemStack(new Ingredient("Banana", IngredientClass.FRUIT), 1),
			new ItemStack(new Ingredient("Strawberry", IngredientClass.FRUIT), 20),
		];

		const strawBerryBananaPopsicle = new Recipe("Strawberry Banana Popsicle", [
			new ItemStack(new Ingredient("Strawberry", IngredientClass.FRUIT), 3),
			new ItemStack(new Ingredient("Banana", IngredientClass.FRUIT), 1),
		]);

		expect(strawBerryBananaPopsicle.craft(inventory).crafted).toBe(true);
	});

	test("given insufficient inventory the recipe is not crafted", () => {
		const inventory: ItemStack[] = [
			new ItemStack(new Ingredient("Apple", IngredientClass.FRUIT), 10),
			new ItemStack(new Ingredient("Banana", IngredientClass.FRUIT), 1),
			new ItemStack(new Ingredient("Strawberry", IngredientClass.FRUIT), 20),
		];

		const strawBerryBananaPopsicle = new Recipe("Strawberry Banana Popsicle", [
			new ItemStack(new Ingredient("Strawberry", IngredientClass.FRUIT), 3),
			new ItemStack(new Ingredient("Banana", IngredientClass.FRUIT), 3),
		]);

		expect(strawBerryBananaPopsicle.craft(inventory).crafted).toBe(false);
	});
});

describe("Recipe.isCraftable()", () => {
	test("given sufficient inventory the recipe is not craftable", () => {
		const inventory: ItemStack[] = [
			new ItemStack(new Ingredient("Apple", IngredientClass.FRUIT), 10),
			new ItemStack(new Ingredient("Banana", IngredientClass.FRUIT), 1),
			new ItemStack(new Ingredient("Strawberry", IngredientClass.FRUIT), 20),
		];

		const strawBerryBananaPopsicle = new Recipe("Strawberry Banana Popsicle", [
			new ItemStack(new Ingredient("Strawberry", IngredientClass.FRUIT), 3),
			new ItemStack(new Ingredient("Banana", IngredientClass.FRUIT), 1),
		]);

		expect(strawBerryBananaPopsicle.isCraftable(inventory)).toBe(true);
	});

	test("given insufficient inventory the recipe is not craftable", () => {
		const inventory: ItemStack[] = [
			new ItemStack(new Ingredient("Apple", IngredientClass.FRUIT), 10),
			new ItemStack(new Ingredient("Banana", IngredientClass.FRUIT), 1),
			new ItemStack(new Ingredient("Strawberry", IngredientClass.FRUIT), 20),
		];

		const strawBerryBananaPopsicle = new Recipe("Strawberry Banana Popsicle", [
			new ItemStack(new Ingredient("Strawberry", IngredientClass.FRUIT), 3),
			new ItemStack(new Ingredient("Banana", IngredientClass.FRUIT), 3),
		]);

		expect(strawBerryBananaPopsicle.isCraftable(inventory)).toBe(false);
	});

	test("given missing inventory the recipe is not craftable", () => {
		const inventory: ItemStack[] = [
			new ItemStack(new Ingredient("Apple", IngredientClass.FRUIT), 10),
			new ItemStack(new Ingredient("Banana", IngredientClass.FRUIT), 1),
		];

		const strawBerryBananaPopsicle = new Recipe("Strawberry Banana Popsicle", [
			new ItemStack(new Ingredient("Strawberry", IngredientClass.FRUIT), 3),
			new ItemStack(new Ingredient("Banana", IngredientClass.FRUIT), 3),
		]);

		expect(strawBerryBananaPopsicle.isCraftable(inventory)).toBe(false);
	});

	test("given no inventory the recipe is not craftable", () => {
		const inventory: ItemStack[] = [];

		const strawBerryBananaPopsicle = new Recipe("Strawberry Banana Popsicle", [
			new ItemStack(new Ingredient("Strawberry", IngredientClass.FRUIT), 3),
			new ItemStack(new Ingredient("Banana", IngredientClass.FRUIT), 3),
		]);

		expect(strawBerryBananaPopsicle.isCraftable(inventory)).toBe(false);
	});

	test("given no ingredients the recipe is craftable", () => {
		const inventory: ItemStack[] = [
			new ItemStack(new Ingredient("Apple", IngredientClass.FRUIT), 10),
			new ItemStack(new Ingredient("Banana", IngredientClass.FRUIT), 1),
		];

		const strawBerryBananaPopsicle = new Recipe("Strawberry Banana Popsicle", []);

		expect(strawBerryBananaPopsicle.isCraftable(inventory)).toBe(true);
	});
});
