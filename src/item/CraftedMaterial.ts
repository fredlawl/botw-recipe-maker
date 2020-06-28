import {BaseItem} from "./Item";
import {Effectional} from "./Effectional";
import Effect from "./Effect";
import { ImmunityBuffType } from "./ImmunityBuff";

class CraftedMaterial extends BaseItem<CraftedMaterial> implements Effectional {
	public readonly effects: Effect[];
	public readonly immunity: ImmunityBuffType;

	public constructor(name: string, effects: Effect[], immunity: ImmunityBuffType) {
		super(name, []);
		this.effects = effects;
		this.immunity = immunity;
	}
}

export default CraftedMaterial;
