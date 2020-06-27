import ItemStack from "../item/ItemStack";
import Ingredient from "../item/Ingredient";

class Inventory {
	private _totalCount: number;
	private _items: Map<string, ItemStack<Ingredient>>;

	public static clone(prevInventory: Inventory): Inventory {
		const newInventory = new Inventory();
		newInventory._totalCount = prevInventory.totalCount;
		newInventory._items = new Map<string, ItemStack<Ingredient>>(prevInventory._items);
		return newInventory;
	}

	public constructor() {
		this._totalCount = 0;
		this._items = new Map<string, ItemStack<Ingredient>>();
	}

	public addInventoryItem(item: ItemStack<Ingredient>): boolean {
		this.remove(item);

		// Don't add item if there's no stack
		if (item.stack <= 0) {
			return false;
		}

		this._totalCount += item.stack;
		this._items.set(item.item.id, item);
		return true;
	}

	get totalCount(): number {
		return this._totalCount;
	}

	get items(): ItemStack<Ingredient>[] {
		return Array.from(this._items.values());
	}

	public clear(): ItemStack<Ingredient>[] {
		let currentInventory = this.items;
		this._items = new Map<string, ItemStack<Ingredient>>();
		this._totalCount = 0;
		return currentInventory;
	}

	public remove(item: ItemStack<Ingredient>) {
		const foundItem = this.item(item);
		if (foundItem) {
			this._totalCount -= foundItem.stack;
			this._items.delete(item.item.id);
		}
	}

	public item(item: ItemStack<Ingredient>): ItemStack<Ingredient> | undefined {
		return this._items.get(item.item.id);
	}
}

export default Inventory;
