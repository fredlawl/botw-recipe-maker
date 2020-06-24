import React from 'react';
import IngredientStack from "./IngredientStack";

describe("InventoryStack.clamp()", () => {
	test("test clamp works as intended", () => {
		expect(IngredientStack.clamp(IngredientStack.STACK_MIN)).toBe(IngredientStack.STACK_MIN);
		expect(IngredientStack.clamp(IngredientStack.STACK_MIN - 1)).toBe(IngredientStack.STACK_MIN);
		expect(IngredientStack.clamp(IngredientStack.STACK_MAX)).toBe(IngredientStack.STACK_MAX);
		expect(IngredientStack.clamp(IngredientStack.STACK_MAX + 1)).toBe(IngredientStack.STACK_MAX);
		expect(IngredientStack.clamp(5)).toBe(5);
	});
});
