import React from "react";

function isSuperset(set, subset) {
	for (let elem of subset) {
		if (!set.has(elem)) {
			return false
		}
	}
	return true
}

describe("Indexing proof of concept", () => {
	const materials = [
		{
			name: 'Flour',
			id: 'flour'
		},
		{
			name: 'Strawberry',
			id: 'strawberry'
		},
		{
			name: 'Blueberry',
			id: 'blueberry'
		},
		{
			name: 'Banana',
			id: 'banana'
		},
		{
			name: "Ice",
			id: 'ice'
		}
	];

	const materialsIndex = new Map<string, number>(materials.map((m, i) => {
		return [ m.id, i ];
	}));

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

	let manyMaterialsToManyRecipiesIndex = new Map<string, number[]>();
	for (let i = 0; i < recipes.length; i++) {
		const ingredientKeys = Array.from(recipes[i].ingredients.keys());
		for (const ik of ingredientKeys) {
			if (!manyMaterialsToManyRecipiesIndex.has(ik)) {
				manyMaterialsToManyRecipiesIndex.set(ik, []);
			}

			manyMaterialsToManyRecipiesIndex.get(ik)?.push(i);
		}
	}

	const inventory = new Map<string, number>([
		['strawberry', 999],
		['banana', 999],
		['ice', 999],
		['flour', 999]
	]);

	test("test", () => {
		console.log('materials: ', materialsIndex, 'recipes: ', recipes, 'many to many', manyMaterialsToManyRecipiesIndex)

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

		console.log('first pass', firstPassRecipies, 'second pass', secondPassRecipies);
	});
});
