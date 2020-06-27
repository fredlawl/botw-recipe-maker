enum EffectType {
	NONE,
	HEALTH,
	ATTACK,
	STAMINA,
	SPEED,
	DEFENSE,
	STEALTH
}

class Effect {
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

const effectTypeLookupTable: any = {
	[EffectType.NONE]: EffectType.NONE,
	[EffectType.HEALTH]: EffectType.HEALTH,
	[EffectType.STAMINA]: EffectType.STAMINA,
	[EffectType.ATTACK]: EffectType.ATTACK,
	[EffectType.SPEED]: EffectType.SPEED,
	[EffectType.DEFENSE]: EffectType.DEFENSE,
	[EffectType.STEALTH]: EffectType.STEALTH,
};

export {
	Effect as default,
	EffectType,
	effectTypeLookupTable
};
