import {Item} from "./Item";

export class ItemStack<T extends Item> {
	public static readonly STACK_MIN: number = 0;
	public static readonly STACK_MAX: number = 999;

	public readonly item: T;
	public readonly stack: number;

	public static clamp = (amount: number): number => {
		amount = (amount < ItemStack.STACK_MAX) ? amount : ItemStack.STACK_MAX;
		return (amount >= ItemStack.STACK_MIN) ? amount : ItemStack.STACK_MIN;
	}

	constructor(ingredient: T, amount: number) {
		this.item = ingredient;
		this.stack = ItemStack.clamp(amount);
	}

	public increment(amount: number): ItemStack<T> {
		return new ItemStack<T>(this.item, this.stack + amount);
	}

	public decrement(amount: number): ItemStack<T> {
		return new ItemStack<T>(this.item, this.stack - amount);
	}
}
