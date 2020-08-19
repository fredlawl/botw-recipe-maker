import {ItemStack} from "../item/ItemStack";
import {Material} from "../item/Material";

export class Inventory {
	private _totalCount: number;
	private _items: Map<string, ItemStack<Material>>;

	public static clone(prevInventory: Inventory): Inventory {
		const newInventory = new Inventory();
		newInventory._totalCount = prevInventory.totalCount;
		newInventory._items = new Map<string, ItemStack<Material>>(prevInventory._items);
		return newInventory;
	}

	public static bulkCreate(items: ItemStack<Material>[]): Inventory {
		const inventory = new Inventory();
		inventory._items = new Map<string, ItemStack<Material>>(items.map(i => [i.item.id, i]));
		inventory._totalCount = inventory._items.size;
		return inventory;
	}

	public constructor() {
		this._totalCount = 0;
		this._items = new Map<string, ItemStack<Material>>();
	}

	public addInventoryItem(item: ItemStack<Material>): boolean {
		this.remove(item.item);

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

	get items(): ItemStack<Material>[] {
		return Array.from(this._items.values());
	}

	public clear(): ItemStack<Material>[] {
		let currentInventory = this.items;
		this._items = new Map<string, ItemStack<Material>>();
		this._totalCount = 0;
		return currentInventory;
	}

	public remove(item: Material) {
		const foundItem = this.item(item);
		if (foundItem) {
			this._totalCount -= foundItem.stack;
			this._items.delete(item.id);
		}
	}

	public item(item: Material): ItemStack<Material> | undefined {
		return this._items.get(item.id);
	}
}
