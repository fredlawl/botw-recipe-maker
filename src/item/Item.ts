import {TypedEntity} from "../Entity";
import ItemCategory from "./ItemCategory";

export interface Item {
	id: string,
	name: string;
	categories: ItemCategory[],
	identifiers: string[]
}

export abstract class BaseItem<T> extends TypedEntity<T> implements Item {
	public readonly name: string;
	public readonly categories: ItemCategory[];

	private _categoryIdentifiers: string[];

	protected constructor(name: string, categories: ItemCategory[]) {
		super(name);
		this.name = name;

		this.categories = [];
		this._categoryIdentifiers = [];

		// We want a single array of all categories this material may belong to
		categories = categories.reduce<ItemCategory[]>((acc, c) => {
			return [...acc, ...c.lineage];
		}, []);

		// Next, we only want the unique ones
		const uniqueCategoreis: any = [];
		for (const category of categories) {
			if (uniqueCategoreis[category.id]) {
				continue;
			}

			uniqueCategoreis[category.id] = category;
			this.categories.push(category);
			this._categoryIdentifiers.push(category.id);
		}
	}

	get identifiers(): string[] {
		return [this.id, ...this.categoryIdentifiers];
	}

	get categoryIdentifiers(): string[] {
		return this._categoryIdentifiers;
	}
}
