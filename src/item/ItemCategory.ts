import {EntityType, TypedEntity} from "../Entity";

class ItemCategory extends TypedEntity<ItemCategory> {
	public readonly name: string;
	public readonly children: ItemCategory[];
	public readonly type: EntityType = EntityType.Category;
	protected _parent: ItemCategory | null;

	public constructor(name: string, children: ItemCategory[] = []) {
		super(name);
		this._parent = null;
		this.name = name;
		this.children = [];

		for (const child of children) {
			child._parent = this;
			this.children.push(child);
		}
	}

	get hasChildren(): boolean {
		return this.children.length > 0;
	}

	get isRoot(): boolean {
		return this._parent === null;
	}

	get lineage(): ItemCategory[] {
		const categories: ItemCategory[] = [];
		let currentCategory: ItemCategory | null = this;
		while (currentCategory !== null) {
			categories.push(currentCategory);
			currentCategory = currentCategory._parent;
		}

		return categories;
	}
}

export default ItemCategory;
