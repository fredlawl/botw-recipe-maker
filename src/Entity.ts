import slugify from "slugify";

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
}

export default Entity;
