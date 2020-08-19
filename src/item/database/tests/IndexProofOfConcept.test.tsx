import React from "react";

// @ts-ignore
function isSuperset(set, subset) {
	for (let elem of subset) {
		if (!set.has(elem)) {
			return false
		}
	}
	return true
}

describe("Indexing proof of concept", () => {
	const recipes = [
		{
			name: 'Fruit Smoothie',
			id: 'fruit-smoothie',
			ingredients: new Map<string, number>([
				['strawberry', 1],
				['banana', 1],
				['ice', 1]
			])
		},
		{
			name: 'Fruit Smoothie',
			id: 'fruit-smoothie',
			ingredients: new Map<string, number>([
				['strawberry', 1],
				['blueberry', 1],
				['ice', 1]
			])
		},
		{
			name: 'Fruit Smoothie',
			id: 'fruit-smoothie',
			ingredients: new Map<string, number>([
				['strawberry', 1],
				['blueberry', 1],
				['ice', 1]
			])
		},
		{
			name: 'Fruit Cake',
			id: 'fruit-cake',
			ingredients: new Map<string, number>([
				['banana', 2],
				['strawberry', 1],
				['flour', 1]
			])
		}
	];

	const inventory = new Map<string, number>([
		['strawberry', 999],
		['banana', 999],
		['ice', 999],
		['flour', 999]
	]);

	test("test", () => {
		// console.log('recipes: ', recipes, 'many to many', manyMaterialsToManyRecipiesIndex)

		const firstPassRecipies: any[] = [];
		const secondPassRecipies: any[] = [];

		// First pass: verify all recipes we can produce
		const inventoryItems = Array.from(inventory.keys());
		const materialsInventorySet = new Set(inventoryItems);
		for (const recipe of recipes) {
			const ingredientsSet = new Set(Array.from(recipe.ingredients.keys()));
			if (isSuperset(materialsInventorySet, ingredientsSet)) {
				firstPassRecipies.push(recipe);
			}
		}

		// Second pass: validate counts
		for (const recipe of firstPassRecipies) {
			let passes = true;
			let min = Number.MAX_SAFE_INTEGER;

			for (const [materialKey, ingredientValue] of recipe.ingredients.entries()) {
				const inventoryValue = inventory.get(materialKey) as number;
				if (inventoryValue < ingredientValue) {
					passes = false;
					break;
				}

				const divides = Math.ceil(inventoryValue / ingredientValue);
				min = (divides < min) ? divides : min;
			}

			if (!passes) {
				continue;
			}

			secondPassRecipies.push({
				recipe: recipe,
				count: min
			})
		}
	});
});
