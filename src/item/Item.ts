import Entity from "../Entity";
import ItemCategory from "./ItemCategory";

export interface Item {
	id: string,
	name: string;
	categories: ItemCategory[],
	identifiers: string[]
}

export abstract class BaseItem<T> extends Entity<T> implements Item {
	public readonly name: string;
	public readonly categories: ItemCategory[];

	private _categoryIdentifiers: string[];

	protected constructor(name: string, categories: ItemCategory[]) {
		super(name);
		this.name = name;
		this.categories = categories;
		this._categoryIdentifiers = categories.map(c => c.id);
	}

	get identifiers(): string[] {
		return [this.id, ...this._categoryIdentifiers];
	}
}
