import Ingredient from "./Ingredient";

class IngredientStack {
	public static readonly STACK_MIN: number = 0;
	public static readonly STACK_MAX: number = 999;

	public readonly ingredient: Ingredient;
	public readonly amount: number;

	public static clamp = (amount: number): number => {
		amount = (amount < IngredientStack.STACK_MAX) ? amount : IngredientStack.STACK_MAX;
		return (amount >= IngredientStack.STACK_MIN) ? amount : IngredientStack.STACK_MIN;
	}

	constructor(ingredient: Ingredient, amount: number) {
		this.ingredient = ingredient;
		this.amount = IngredientStack.clamp(amount);
	}
}

export default IngredientStack;
