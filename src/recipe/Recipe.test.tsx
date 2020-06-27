import React from 'react';
import ItemStack from "../item/ItemStack";
import Ingredient, {CategoryType} from '../inventory/Ingredient';
import Recipe from "./Recipe";
import {ImmunityBuffType, EffectType} from "../item/Item";

describe("Recipe.craft()", () => {
	test("given already crafted recipe, it remains crafted", () => {
		const craftedRecipe = Recipe.createCrafted("crafted", []);
		expect(craftedRecipe.craft([]).crafted).toBe(true);
	});

	test("given sufficient inventory, recipe is crafted", () => {
		const inventory: ItemStack<Ingredient>[] = [
			new ItemStack(new Ingredient("Apple", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE), 10),
			new ItemStack(new Ingredient("Banana", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE), 1),
			new ItemStack(new Ingredient("Strawberry", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE), 20),
		];

		const strawBerryBananaPopsicle = new Recipe("Strawberry Banana Popsicle", [
			new ItemStack(new Ingredient("Strawberry", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE), 3),
			new ItemStack(new Ingredient("Banana", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE), 1),
		]);

		expect(strawBerryBananaPopsicle.craft(inventory).crafted).toBe(true);
	});

	test("given insufficient inventory the recipe is not crafted", () => {
		const inventory: ItemStack<Ingredient>[] = [
			new ItemStack(new Ingredient("Apple", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE), 10),
			new ItemStack(new Ingredient("Banana", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE), 1),
			new ItemStack(new Ingredient("Strawberry", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE), 20),
		];

		const strawBerryBananaPopsicle = new Recipe("Strawberry Banana Popsicle", [
			new ItemStack(new Ingredient("Strawberry", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE), 3),
			new ItemStack(new Ingredient("Banana", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE), 3),
		]);

		expect(strawBerryBananaPopsicle.craft(inventory).crafted).toBe(false);
	});
});

describe("Recipe.isCraftable()", () => {
	test("given sufficient inventory the recipe is not craftable", () => {
		const inventory: ItemStack<Ingredient>[] = [
			new ItemStack(new Ingredient("Apple", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE), 10),
			new ItemStack(new Ingredient("Banana", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE), 1),
			new ItemStack(new Ingredient("Strawberry", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE), 20),
		];

		const strawBerryBananaPopsicle = new Recipe("Strawberry Banana Popsicle", [
			new ItemStack(new Ingredient("Strawberry", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE), 3),
			new ItemStack(new Ingredient("Banana", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE), 1),
		]);

		expect(strawBerryBananaPopsicle.isCraftable(inventory)).toBe(true);
	});

	test("given insufficient inventory the recipe is not craftable", () => {
		const inventory: ItemStack<Ingredient>[] = [
			new ItemStack(new Ingredient("Apple", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE), 10),
			new ItemStack(new Ingredient("Banana", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE), 1),
			new ItemStack(new Ingredient("Strawberry", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE), 20),
		];

		const strawBerryBananaPopsicle = new Recipe("Strawberry Banana Popsicle", [
			new ItemStack(new Ingredient("Strawberry", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE), 3),
			new ItemStack(new Ingredient("Banana", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE), 3),
		]);

		expect(strawBerryBananaPopsicle.isCraftable(inventory)).toBe(false);
	});

	test("given missing inventory the recipe is not craftable", () => {
		const inventory: ItemStack<Ingredient>[] = [
			new ItemStack(new Ingredient("Apple", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE), 10),
			new ItemStack(new Ingredient("Banana", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE), 1),
		];

		const strawBerryBananaPopsicle = new Recipe("Strawberry Banana Popsicle", [
			new ItemStack(new Ingredient("Strawberry", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE), 3),
			new ItemStack(new Ingredient("Banana", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE), 3),
		]);

		expect(strawBerryBananaPopsicle.isCraftable(inventory)).toBe(false);
	});

	test("given no inventory the recipe is not craftable", () => {
		const inventory: ItemStack<Ingredient>[] = [];

		const strawBerryBananaPopsicle = new Recipe("Strawberry Banana Popsicle", [
			new ItemStack(new Ingredient("Strawberry", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE), 3),
			new ItemStack(new Ingredient("Banana", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE), 3),
		]);

		expect(strawBerryBananaPopsicle.isCraftable(inventory)).toBe(false);
	});

	test("given no ingredients the recipe is craftable", () => {
		const inventory: ItemStack<Ingredient>[] = [
			new ItemStack(new Ingredient("Apple", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE), 10),
			new ItemStack(new Ingredient("Banana", CategoryType.FRUIT, ImmunityBuffType.NONE, EffectType.NONE), 1),
		];

		const strawBerryBananaPopsicle = new Recipe("Strawberry Banana Popsicle", []);

		expect(strawBerryBananaPopsicle.isCraftable(inventory)).toBe(true);
	});
});
