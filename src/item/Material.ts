import {Effectional} from "./Effectional";
import {ImmunityBuffType} from "./ImmunityBuff";
import Effect from "./Effect";
import {BaseItem} from "./Item";
import ItemCategory from "./ItemCategory";

class Material extends BaseItem<Material> implements Effectional {
	public readonly effects: Effect[];
	public readonly immunity: ImmunityBuffType;

	public constructor(name: string, categories: ItemCategory[], effects: Effect[], immunity: ImmunityBuffType) {
		super(name, categories);
		this.effects = effects;
		this.immunity = immunity;
	}
}

export default Material;
