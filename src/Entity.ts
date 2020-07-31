import slugify from "slugify";

export enum EntityType {
	Material,
	Category,
	Crafted
}

abstract class Entity<T> {
	protected _id: string;

	protected constructor(identifier: string) {
		this._id = slugify(identifier, {
			lower: true
		});
	}

	get id(): string {
		return this._id;
	}

	public equals(b: Entity<T>): boolean {
		return this._id === b._id;
	}
}

export abstract class TypedEntity<T> extends Entity<T> {
	public abstract readonly type: EntityType;

	protected constructor(identifier: string) {
		super(identifier);
	}

	public isType(type: EntityType): boolean {
		return this.type === type;
	}

	public equals(b: TypedEntity<T>): boolean {
		return super.equals(b) && this.isType(b.type);
	}
}

export default Entity;
