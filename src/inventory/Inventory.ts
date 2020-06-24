import IngredientStack from "../ingredient/IngredientStack";

class Inventory {
	private _totalCount: number;
	private _items: Map<string, IngredientStack>;

	public static clone(prevInventory: Inventory): Inventory {
		const newInventory = new Inventory();
		newInventory._totalCount = prevInventory.totalCount;
		newInventory._items = new Map<string, IngredientStack>(prevInventory._items);
		return newInventory;
	}

	public constructor() {
		this._totalCount = 0;
		this._items = new Map<string, IngredientStack>();
	}

	public addInventoryItem(item: IngredientStack): boolean {
		this.remove(item);

		// Don't add item if there's no amount
		if (item.amount <= 0) {
			return false;
		}

		this._totalCount += item.amount;
		this._items.set(item.ingredient.id, item);
		return true;
	}

	get totalCount(): number {
		return this._totalCount;
	}

	get items(): IngredientStack[] {
		return Array.from(this._items.values());
	}

	public clear(): IngredientStack[] {
		let currentInventory = this.items;
		this._items = new Map<string, IngredientStack>();
		this._totalCount = 0;
		return currentInventory;
	}

	public remove(item: IngredientStack) {
		const foundItem = this.item(item);
		if (foundItem) {
			this._totalCount -= foundItem.amount;
			this._items.delete(item.ingredient.id);
		}
	}

	public item(item: IngredientStack): IngredientStack | undefined {
		return this._items.get(item.ingredient.id);
	}
}

export default Inventory;
