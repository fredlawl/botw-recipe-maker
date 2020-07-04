import React from 'react';
import ItemStack from "../ItemStack";
import Recipe from "../Recipe";
import {ImmunityBuffType} from "../ImmunityBuff";
import {primaryCategories, Category} from "../data/itemCategories";
import {Item} from "../Item";
import Material from "../Material";

describe("Recipe.isCraftable()", () => {
	test("given sufficient inventory the recipe-search is not craftable", () => {
		const inventory: ItemStack<Item>[] = [
			new ItemStack(new Material("Apple", [ primaryCategories[Category.FRUIT] ], [], ImmunityBuffType.NONE), 10),
			new ItemStack(new Material("Banana", [ primaryCategories[Category.FRUIT] ], [], ImmunityBuffType.NONE), 1),
			new ItemStack(new Material("Strawberry", [ primaryCategories[Category.FRUIT] ], [], ImmunityBuffType.NONE), 20),
		];

		const strawBerryBananaPopsicle = new Recipe("Strawberry Banana Popsicle", [
			"strawberry",
			"banana",
		]);

		expect(strawBerryBananaPopsicle.isCraftable(inventory)).toBe(true);
	});

	test("given inventory with similar categories the recipe is craftabble", () => {
		const inventory: ItemStack<Item>[] = [
			new ItemStack(new Material("Apple", [ primaryCategories[Category.FRUIT] ], [], ImmunityBuffType.NONE), 10),
			new ItemStack(new Material("Banana", [ primaryCategories[Category.FRUIT] ], [], ImmunityBuffType.NONE), 1),
			new ItemStack(new Material("Strawberry", [ primaryCategories[Category.FRUIT] ], [], ImmunityBuffType.NONE), 20),
		];

		const strawBerryBananaPopsicle = new Recipe("Strawberry Banana Popsicle", [
			"fruit"
		]);

		expect(strawBerryBananaPopsicle.isCraftable(inventory)).toBe(true);
	});

	test("given missing inventory the recipe is not craftable", () => {
		const inventory: ItemStack<Item>[] = [
			new ItemStack(new Material("Apple", [ primaryCategories[Category.FRUIT] ], [], ImmunityBuffType.NONE), 10),
			new ItemStack(new Material("Banana", [ primaryCategories[Category.FRUIT] ], [], ImmunityBuffType.NONE), 1),
		];

		const strawBerryBananaPopsicle = new Recipe("Strawberry Banana Popsicle", [
			"strawberry",
			"banana",
		]);

		expect(strawBerryBananaPopsicle.isCraftable(inventory)).toBe(false);
	});

	test("given no inventory the recipe is not craftable", () => {
		const inventory: ItemStack<Item>[] = [];

		const strawBerryBananaPopsicle = new Recipe("Strawberry Banana Popsicle", [
			"strawberry",
			"banana",
		]);

		expect(strawBerryBananaPopsicle.isCraftable(inventory)).toBe(false);
	});

	test("given a recipe with no ingredient requirements recipe is craftable", () => {
		const inventory: ItemStack<Item>[] = [
			new ItemStack(new Material("Apple", [ primaryCategories[Category.FRUIT] ], [], ImmunityBuffType.NONE), 10),
			new ItemStack(new Material("Banana", [ primaryCategories[Category.FRUIT] ], [], ImmunityBuffType.NONE), 1),
		];

		const strawBerryBananaPopsicle = new Recipe("Strawberry Banana Popsicle", []);

		expect(strawBerryBananaPopsicle.isCraftable(inventory)).toBe(true);
	});
});
