import Entity from "../Entity";

class ItemCategory extends Entity<ItemCategory> {
	public readonly name: string;
	public constructor(name: string) {
		super(name);
		this.name = name;
	}
}

export default ItemCategory;
