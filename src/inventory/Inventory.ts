import ItemStack from "../item/ItemStack";
import {Item} from "../item/Item";

class Inventory {
	private _totalCount: number;
	private _items: Map<string, ItemStack<Item>>;

	public static clone(prevInventory: Inventory): Inventory {
		const newInventory = new Inventory();
		newInventory._totalCount = prevInventory.totalCount;
		newInventory._items = new Map<string, ItemStack<Item>>(prevInventory._items);
		return newInventory;
	}

	public constructor() {
		this._totalCount = 0;
		this._items = new Map<string, ItemStack<Item>>();
	}

	public addInventoryItem(item: ItemStack<Item>): boolean {
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

	get items(): ItemStack<Item>[] {
		return Array.from(this._items.values());
	}

	public clear(): ItemStack<Item>[] {
		let currentInventory = this.items;
		this._items = new Map<string, ItemStack<Item>>();
		this._totalCount = 0;
		return currentInventory;
	}

	public remove(item: ItemStack<Item>) {
		const foundItem = this.item(item);
		if (foundItem) {
			this._totalCount -= foundItem.stack;
			this._items.delete(item.item.id);
		}
	}

	public item(item: ItemStack<Item>): ItemStack<Item> | undefined {
		return this._items.get(item.item.id);
	}
}

export default Inventory;
