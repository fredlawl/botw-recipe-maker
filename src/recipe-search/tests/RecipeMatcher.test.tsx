import React from "react";
import {Recipe} from "../../item/Recipe";
import {ItemStack} from "../../item/ItemStack";
import {Material} from "../../item/Material";
import {allItemCategories, Category} from "../../item/database/itemCategories";
import {ImmunityBuffType} from "../../item/ImmunityBuff";
import {RecipeMatcher} from "../RecipeMatcher";
import {Inventory} from "../../inventory/Inventory";

describe("RecipeMatcher.match", () => {
	const materials = {
		strawberry: new Material("Strawberry", [allItemCategories[Category.FRUIT]], [], ImmunityBuffType.NONE),
		banana: new Material("Banana", [allItemCategories[Category.FRUIT]], [], ImmunityBuffType.NONE),
		ice: new Material("Ice", [allItemCategories[Category.MISC]], [], ImmunityBuffType.NONE),
		flour: new Material("Flour", [allItemCategories[Category.MISC]], [], ImmunityBuffType.NONE),
		blueberry: new Material("Blueberry", [allItemCategories[Category.FRUIT]], [], ImmunityBuffType.NONE),
	};

	const recipes = [
		new Recipe('Fruit Smoothie', [
			new ItemStack<Material>(materials['strawberry'], 1),
			new ItemStack<Material>(materials['banana'], 1),
			new ItemStack<Material>(materials['ice'], 1),
		]),
		new Recipe('Fruit Smoothie', [
			new ItemStack<Material>(materials['strawberry'], 1),
			new ItemStack<Material>(materials['blueberry'], 1),
			new ItemStack<Material>(materials['ice'], 1),
		]),
		new Recipe('Fruit Smoothie', [
			new ItemStack<Material>(materials['banana'], 1),
			new ItemStack<Material>(materials['strawberry'], 1),
			new ItemStack<Material>(materials['flour'], 1),
		]),
	];

	const inventory: ItemStack<Material>[] = [
		new ItemStack<Material>(materials['strawberry'], 999),
		new ItemStack<Material>(materials['banana'], 999),
		new ItemStack<Material>(materials['ice'], 999),
		new ItemStack<Material>(materials['flour'], 999),
	];

	test("trivial test", () => {
		const actual = new RecipeMatcher(Inventory.bulkCreate(inventory)).getRecipes(recipes);
		expect(actual).toEqual([
			recipes[0].setStack(999),
			recipes[2].setStack(999)
		])
	});
});
