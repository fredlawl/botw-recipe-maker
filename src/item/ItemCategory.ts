import Entity from "../Entity";

class ItemCategory extends Entity<ItemCategory> {
	public readonly name: string;
	public readonly children: ItemCategory[];
	protected _parent: ItemCategory | null;

	public constructor(name: string, children?: ItemCategory[]) {
		super(name);
		this._parent = null;
		this.name = name;

		this.children = [];
		if (children) {
			this.children = [...children];
		}

		for (const child of this.children) {
			child._parent = this;
		}
	}

	get hasChildren(): boolean {
		return this.children.length > 0;
	}

	get isRoot(): boolean {
		return this._parent === null;
	}
}

export default ItemCategory;
