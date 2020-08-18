export class EffectType {
	public static readonly NONE = new EffectType(0);
	public static readonly HEALTH = new EffectType(1);
	public static readonly ATTACK = new EffectType(2);
	public static readonly STAMINA = new EffectType(3);
	public static readonly SPEED = new EffectType(4);
	public static readonly DEFENSE = new EffectType(5);
	public static readonly STEALTH = new EffectType(6);

	private _id: number;

	private constructor(id: number) {
		this._id = id;
	}

	public toString(): string {
		return `#<EffectType:${this._id}>`;
	}

	public equals(et: EffectType): boolean {
		return this._id === et._id;
	}

	public compareTo(et: EffectType): number {
		if (this.equals(et)) {
			return 0;
		}

		return (this._id > et._id) ? 1 : -1;
	}

	public static compareTo(a: EffectType, b: EffectType): number {
		if (a.equals(b)) {
			return 0;
		}

		return a.compareTo(b);
	}
}

export class Effect {
	public readonly effect: EffectType;
	public readonly value: number;

	public static none(): Effect {
		return new Effect("No effect", EffectType.NONE, 0);
	}

	public constructor(name: string, effect: EffectType, value: number) {
		this.effect = effect;
		this.value = value;
	}
}

export const effectTypeLookupTable: any = {
	[EffectType.NONE.toString()]: EffectType.NONE,
	[EffectType.HEALTH.toString()]: EffectType.HEALTH,
	[EffectType.STAMINA.toString()]: EffectType.STAMINA,
	[EffectType.ATTACK.toString()]: EffectType.ATTACK,
	[EffectType.SPEED.toString()]: EffectType.SPEED,
	[EffectType.DEFENSE.toString()]: EffectType.DEFENSE,
	[EffectType.STEALTH.toString()]: EffectType.STEALTH,
};
