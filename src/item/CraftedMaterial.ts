import {BaseItem} from "./Item";
import {Effectional} from "./Effectional";
import Effect, {EffectType} from "./Effect";
import { ImmunityBuffType } from "./ImmunityBuff";

class CraftedMaterial extends BaseItem<CraftedMaterial> implements Effectional {
	public readonly effects: Effect[];
	public readonly immunity: ImmunityBuffType;

	public constructor(name: string, effects: Effect[], immunity: ImmunityBuffType) {
		super(name, []);
		this.effects = effects;
		this.immunity = immunity;
		this._id = this.createHashCode();
	}

	private createHashCode(): string {
		let effects = this.effects.map(e => e.effect).sort(EffectType.compareTo);
		return [
			this._id,
			...effects,
			this.immunity
		].join('_');
	}
}

export default CraftedMaterial;
