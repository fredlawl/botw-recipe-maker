import React from 'react';
import Inventory from "./Inventory";
import ItemStack from "../item/ItemStack";
import Ingredient, {CategoryType} from "./Ingredient"
import {EffectType, StatsType} from "../item/Item";

describe("Inventory.addInventoryItem()", () => {
	test("add inventory item works with 1 item", () => {
		const expectedStack = 20;
		const inventory = new Inventory();
		const strawberry = new Ingredient("Strawberry", CategoryType.FRUIT, EffectType.NONE, StatsType.NONE);
		const ingredientStack = new ItemStack(strawberry, expectedStack);
		inventory.addInventoryItem(ingredientStack);

		expect(inventory.totalCount).toBe(expectedStack);
		expect(inventory.items[0].item.id).toBe(strawberry.id);
	});

	test("add inventory does not add with 0 stack", () => {
		const expectedStack = 0;
		const inventory = new Inventory();
		const strawberry = new Ingredient("Strawberry", CategoryType.FRUIT, EffectType.NONE, StatsType.NONE);
		const ingredientStack = new ItemStack(strawberry, expectedStack);
		inventory.addInventoryItem(ingredientStack);

		expect(inventory.totalCount).toBe(expectedStack);
		expect(inventory.items.length).toBe(0);
	});

	test("add inventory works with more than 1 item", () => {
		const inventory = new Inventory();
		const strawberry = new Ingredient("Strawberry", CategoryType.FRUIT, EffectType.NONE, StatsType.NONE);
		const banana = new Ingredient("Banana", CategoryType.FRUIT, EffectType.NONE, StatsType.NONE);
		inventory.addInventoryItem(new ItemStack(strawberry, 20));
		inventory.addInventoryItem(new ItemStack(banana, 20));

		expect(inventory.totalCount).toBe(40);
		expect(inventory.items.length).toBe(2);
	});

	test("add inventory works with adding same item", () => {
		const inventory = new Inventory();
		const strawberry = new Ingredient("Strawberry", CategoryType.FRUIT, EffectType.NONE, StatsType.NONE);
		inventory.addInventoryItem(new ItemStack(strawberry, 20));
		inventory.addInventoryItem(new ItemStack(strawberry, 30));

		expect(inventory.totalCount).toBe(30);
	});
});

describe("Inventory.remove()", () => {
	test("removal of inventory decreases total stack", () => {
		const expectedStack = 20;
		const inventory = new Inventory();
		const strawberry = new Ingredient("Strawberry", CategoryType.FRUIT, EffectType.NONE, StatsType.NONE);
		const ingredientStack = new ItemStack(strawberry, expectedStack);
		inventory.addInventoryItem(ingredientStack);

		expect(inventory.totalCount).toBe(expectedStack);

		inventory.remove(ingredientStack);

		expect(inventory.totalCount).toBe(0);
	});
});

describe("Inventory.clear()", () => {
	test("clears inventory", () => {
		const inventory = new Inventory();
		const strawberry = new Ingredient("Strawberry", CategoryType.FRUIT, EffectType.NONE, StatsType.NONE);
		const banana = new Ingredient("Banana", CategoryType.FRUIT, EffectType.NONE, StatsType.NONE);
		inventory.addInventoryItem(new ItemStack(strawberry, 20));
		inventory.addInventoryItem(new ItemStack(banana, 20));
		const clearedItems = inventory.clear();
		expect(inventory.totalCount).toBe(0);
		expect(inventory.items.length).toBe(0);
		expect(clearedItems.length).toBe(2);
	});
});
