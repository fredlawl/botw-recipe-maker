import Ingredient from "./Ingredient";

class IngredientBundle {
	public readonly ingredient: Ingredient;
	public readonly amount: number;
	constructor(ingredient: Ingredient, amount: number) {
		this.ingredient = ingredient;
		this.amount = amount;
	}
}

export default IngredientBundle;
