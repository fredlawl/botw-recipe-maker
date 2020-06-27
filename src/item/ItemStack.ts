import Item from "./Item";

class ItemStack<T extends Item> {
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
}

export default ItemStack;
