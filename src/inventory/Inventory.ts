import IngredientBundle from "../ingredient/IngredientBundle";

class Inventory {
	private _totalCount: number;
	private _items: Map<string, IngredientBundle>;

	public static clone(prevInventory: Inventory): Inventory {
		const newInventory = new Inventory();
		newInventory._totalCount = prevInventory.totalCount;
		newInventory._items = new Map<string, IngredientBundle>(prevInventory._items);
		return newInventory;
	}

	public constructor() {
		this._totalCount = 0;
		this._items = new Map<string, IngredientBundle>();
	}

	public addInventoryItem(item: IngredientBundle): boolean {
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

	get items(): IngredientBundle[] {
		return Array.from(this._items.values());
	}

	public clear(): IngredientBundle[] {
		let currentInventory = this.items;
		this._items = new Map<string, IngredientBundle>();
		this._totalCount = 0;
		return currentInventory;
	}

	public remove(item: IngredientBundle) {
		const foundItem = this.item(item);
		if (foundItem) {
			this._totalCount -= foundItem.amount;
			this._items.delete(item.ingredient.id);
		}
	}

	public item(item: IngredientBundle): IngredientBundle | undefined {
		return this._items.get(item.ingredient.id);
	}
}

export default Inventory;
