import React from 'react';
import {ItemStack} from "../ItemStack";

describe("InventoryStack.clamp()", () => {
	test("test clamp works as intended", () => {
		expect(ItemStack.clamp(ItemStack.STACK_MIN)).toBe(ItemStack.STACK_MIN);
		expect(ItemStack.clamp(ItemStack.STACK_MIN - 1)).toBe(ItemStack.STACK_MIN);
		expect(ItemStack.clamp(ItemStack.STACK_MAX)).toBe(ItemStack.STACK_MAX);
		expect(ItemStack.clamp(ItemStack.STACK_MAX + 1)).toBe(ItemStack.STACK_MAX);
		expect(ItemStack.clamp(5)).toBe(5);
	});
});
