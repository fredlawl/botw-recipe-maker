import {Inventory} from "../inventory/Inventory";
import {recipes} from "../item/database/recipes";
import {Recipe} from "../item/Recipe";

// @ts-ignore
function isSuperset(set, subset) {
	for (let elem of subset) {
		if (!set.has(elem)) {
			return false
		}
	}
	return true
}

export class RecipeMatcher {
	private _inventory: Inventory;

	constructor(inventory: Inventory) {
		this._inventory = inventory;
	}

	public getRecipes(): Recipe[] {
		const firstPassRecipes: Recipe[] = [];
		const secondPassRecipes: Recipe[] = [];

		if (this._inventory.totalCount <= 0) {
			return [];
		}

		// First pass: verify all recipes we can produce
		const inventoryItems = this._inventory.items.map(i => i.item.id);
		const materialsInventorySet = new Set(inventoryItems);
		for (const recipe of recipes) {
			const ingredientsSet = new Set(recipe.ingredients.map(i => i.item.id));
			if (isSuperset(materialsInventorySet, ingredientsSet)) {
				firstPassRecipes.push(recipe);
			}
		}

		// Second pass: validate counts
		for (const recipe of firstPassRecipes) {
			let passes = true;
			let min = Number.MAX_SAFE_INTEGER;

			for (const ingredient of recipe.ingredients) {
				const inventoryValue = this._inventory.item(ingredient.item)?.stack as number;
				if (inventoryValue < ingredient.stack) {
					passes = false;
					break;
				}

				const divides = Math.ceil(inventoryValue / ingredient.stack);
				min = (divides < min) ? divides : min;
			}

			if (!passes) {
				continue;
			}

			secondPassRecipes.push(recipe.setStack(min))
		}

		return secondPassRecipes;
	}
}
