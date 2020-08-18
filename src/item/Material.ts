import {Effectional} from "./Effectional";
import {ImmunityBuffType} from "./ImmunityBuff";
import {Effect} from "./Effect";
import {BaseItem} from "./Item";
import {ItemCategory} from "./ItemCategory";
import {EntityType} from "../Entity";

export class Material extends BaseItem<Material> implements Effectional {
	public readonly effects: Effect[];
	public readonly immunity: ImmunityBuffType;
	public readonly type: EntityType = EntityType.Material;

	public constructor(name: string, categories: ItemCategory[], effects: Effect[], immunity: ImmunityBuffType) {
		super(name, categories);
		this.effects = effects;
		this.immunity = immunity;
	}
}
