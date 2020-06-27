import React from 'react';
import ItemStack from "../ItemStack";
import Ingredient, {CategoryType} from '../Ingredient';
import Recipe from "../Recipe";
import {ImmunityBuffType} from "../Item";
import Effect from '../Effect';

describe("Recipe.craft()", () => {
	test("given already crafted recipe-search, it remains crafted", () => {
		const craftedRecipe = Recipe.createCrafted("crafted", []);
		expect(craftedRecipe.craft([]).crafted).toBe(true);
	});

	test("given sufficient inventory, recipe-search is crafted", () => {
		const inventory: ItemStack<Ingredient>[] = [
			new ItemStack(new Ingredient("Apple", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()), 10),
			new ItemStack(new Ingredient("Banana", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()), 1),
			new ItemStack(new Ingredient("Strawberry", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()), 20),
		];

		const strawBerryBananaPopsicle = new Recipe("Strawberry Banana Popsicle", [
			new ItemStack(new Ingredient("Strawberry", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()), 3),
			new ItemStack(new Ingredient("Banana", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()), 1),
		]);

		expect(strawBerryBananaPopsicle.craft(inventory).crafted).toBe(true);
	});

	test("given insufficient inventory the recipe-search is not crafted", () => {
		const inventory: ItemStack<Ingredient>[] = [
			new ItemStack(new Ingredient("Apple", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()), 10),
			new ItemStack(new Ingredient("Banana", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()), 1),
			new ItemStack(new Ingredient("Strawberry", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()), 20),
		];

		const strawBerryBananaPopsicle = new Recipe("Strawberry Banana Popsicle", [
			new ItemStack(new Ingredient("Strawberry", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()), 3),
			new ItemStack(new Ingredient("Banana", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()), 3),
		]);

		expect(strawBerryBananaPopsicle.craft(inventory).crafted).toBe(false);
	});
});

describe("Recipe.isCraftable()", () => {
	test("given sufficient inventory the recipe-search is not craftable", () => {
		const inventory: ItemStack<Ingredient>[] = [
			new ItemStack(new Ingredient("Apple", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()), 10),
			new ItemStack(new Ingredient("Banana", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()), 1),
			new ItemStack(new Ingredient("Strawberry", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()), 20),
		];

		const strawBerryBananaPopsicle = new Recipe("Strawberry Banana Popsicle", [
			new ItemStack(new Ingredient("Strawberry", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()), 3),
			new ItemStack(new Ingredient("Banana", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()), 1),
		]);

		expect(strawBerryBananaPopsicle.isCraftable(inventory)).toBe(true);
	});

	test("given insufficient inventory the recipe-search is not craftable", () => {
		const inventory: ItemStack<Ingredient>[] = [
			new ItemStack(new Ingredient("Apple", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()), 10),
			new ItemStack(new Ingredient("Banana", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()), 1),
			new ItemStack(new Ingredient("Strawberry", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()), 20),
		];

		const strawBerryBananaPopsicle = new Recipe("Strawberry Banana Popsicle", [
			new ItemStack(new Ingredient("Strawberry", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()), 3),
			new ItemStack(new Ingredient("Banana", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()), 3),
		]);

		expect(strawBerryBananaPopsicle.isCraftable(inventory)).toBe(false);
	});

	test("given missing inventory the recipe-search is not craftable", () => {
		const inventory: ItemStack<Ingredient>[] = [
			new ItemStack(new Ingredient("Apple", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()), 10),
			new ItemStack(new Ingredient("Banana", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()), 1),
		];

		const strawBerryBananaPopsicle = new Recipe("Strawberry Banana Popsicle", [
			new ItemStack(new Ingredient("Strawberry", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()), 3),
			new ItemStack(new Ingredient("Banana", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()), 3),
		]);

		expect(strawBerryBananaPopsicle.isCraftable(inventory)).toBe(false);
	});

	test("given no inventory the recipe-search is not craftable", () => {
		const inventory: ItemStack<Ingredient>[] = [];

		const strawBerryBananaPopsicle = new Recipe("Strawberry Banana Popsicle", [
			new ItemStack(new Ingredient("Strawberry", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()), 3),
			new ItemStack(new Ingredient("Banana", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()), 3),
		]);

		expect(strawBerryBananaPopsicle.isCraftable(inventory)).toBe(false);
	});

	test("given no ingredients the recipe-search is craftable", () => {
		const inventory: ItemStack<Ingredient>[] = [
			new ItemStack(new Ingredient("Apple", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()), 10),
			new ItemStack(new Ingredient("Banana", CategoryType.FRUIT, ImmunityBuffType.NONE, Effect.none()), 1),
		];

		const strawBerryBananaPopsicle = new Recipe("Strawberry Banana Popsicle", []);

		expect(strawBerryBananaPopsicle.isCraftable(inventory)).toBe(true);
	});
});
