import Ingredient from "./Ingredient";

class InventoryIngredient {
	public readonly ingredient: Ingredient;
	public readonly amount: number;
	public constructor(ingredient: Ingredient, amount: number) {
		this.ingredient = ingredient;
		this.amount = amount;
	}
}

export default InventoryIngredient;
