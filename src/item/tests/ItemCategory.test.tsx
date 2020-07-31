import React from 'react';
import ItemCategory from "../ItemCategory";

describe("Inventory.addInventoryItem()", () => {
	test('lineage recursively gets the parents', () => {
		const childTwo = new ItemCategory("Child 2", []);
		const grandchild = new ItemCategory("1.Grandchild 1", []);
		const childOne = new ItemCategory("Child 1", [
			grandchild
		]);

		const categoryTree = new ItemCategory("Root", [
			childOne,
			childTwo
		]);

		const expected = [
			grandchild,
			childOne,
			categoryTree
		];

		expect(grandchild.lineage).toEqual(expected);
	});
});
