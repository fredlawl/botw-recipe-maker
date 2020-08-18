import {ItemStack} from "./ItemStack";
import {Entity} from "../Entity";
import {Material} from "./Material";

export class Recipe extends Entity<Recipe> {
	public readonly name: string;
	public readonly ingredients: ItemStack<Material>[] = [];
	private _stack: number = 0;

	public clone(): Recipe {
		const newRecipe = new Recipe(this.name, this.ingredients);
		newRecipe._stack = this._stack;
		return newRecipe;
	}

	constructor(name: string, ingredients: ItemStack<Material>[]) {
		super(name);
		this.name = name;
		this.ingredients = ingredients;
		this._id = [this._id, ...this.ingredients.map(i => `${i.item.id}_${i.stack}`)].join('_');
	}

	get stack(): number {
		return this._stack;
	}

	public setStack(stack: number): Recipe {
		const cloned = this.clone();
		cloned._stack = stack;
		return cloned;
	}
}
