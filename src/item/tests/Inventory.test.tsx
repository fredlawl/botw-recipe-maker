import React from 'react';
import Inventory from "../../inventory/Inventory";
import ItemStack from "../ItemStack";
import Effect from '../Effect';
import {ImmunityBuffType} from "../ImmunityBuff";
import Material from "../Material";
import {primaryCategories, PrimaryCategory} from "../data/itemCategories";

describe("Inventory.addInventoryItem()", () => {
	test("add inventory item works with 1 item", () => {
		const expectedStack = 20;
		const inventory = new Inventory();
		const strawberry = new Material("Strawberry", [ primaryCategories[PrimaryCategory.FRUIT] ], [], ImmunityBuffType.NONE);
		const ingredientStack = new ItemStack(strawberry, expectedStack);
		inventory.addInventoryItem(ingredientStack);

		expect(inventory.totalCount).toBe(expectedStack);
		expect(inventory.items[0].item.id).toBe(strawberry.id);
	});

	test("add inventory does not add with 0 stack", () => {
		const expectedStack = 0;
		const inventory = new Inventory();
		const strawberry = new Material("Strawberry", [ primaryCategories[PrimaryCategory.FRUIT] ], [], ImmunityBuffType.NONE);
		const ingredientStack = new ItemStack(strawberry, expectedStack);
		inventory.addInventoryItem(ingredientStack);

		expect(inventory.totalCount).toBe(expectedStack);
		expect(inventory.items.length).toBe(0);
	});

	test("add inventory works with more than 1 item", () => {
		const inventory = new Inventory();
		const strawberry = new Material("Strawberry", [ primaryCategories[PrimaryCategory.FRUIT] ], [], ImmunityBuffType.NONE);
		const banana = new Material("Banana", [ primaryCategories[PrimaryCategory.FRUIT] ], [], ImmunityBuffType.NONE);
		inventory.addInventoryItem(new ItemStack(strawberry, 20));
		inventory.addInventoryItem(new ItemStack(banana, 20));

		expect(inventory.totalCount).toBe(40);
		expect(inventory.items.length).toBe(2);
	});

	test("add inventory works with adding same item", () => {
		const inventory = new Inventory();
		const strawberry = new Material("Strawberry", [ primaryCategories[PrimaryCategory.FRUIT] ], [], ImmunityBuffType.NONE);
		inventory.addInventoryItem(new ItemStack(strawberry, 20));
		inventory.addInventoryItem(new ItemStack(strawberry, 30));

		expect(inventory.totalCount).toBe(30);
	});
});

describe("Inventory.remove()", () => {
	test("removal of inventory decreases total stack", () => {
		const expectedStack = 20;
		const inventory = new Inventory();
		const strawberry = new Material("Strawberry", [ primaryCategories[PrimaryCategory.FRUIT] ], [], ImmunityBuffType.NONE);
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
		const strawberry = new Material("Strawberry", [ primaryCategories[PrimaryCategory.FRUIT] ], [], ImmunityBuffType.NONE);
		const banana = new Material("Banana", [ primaryCategories[PrimaryCategory.FRUIT] ], [], ImmunityBuffType.NONE);
		inventory.addInventoryItem(new ItemStack(strawberry, 20));
		inventory.addInventoryItem(new ItemStack(banana, 20));
		const clearedItems = inventory.clear();
		expect(inventory.totalCount).toBe(0);
		expect(inventory.items.length).toBe(0);
		expect(clearedItems.length).toBe(2);
	});
});
