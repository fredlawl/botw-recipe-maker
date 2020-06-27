export enum ItemType {
	MATERIAL = 1,
	CONSUMABLE
}

export enum EffectType {
	NONE,
	FREEZE,
	FIRE,
	ELECTRIC,
}

export enum StatsType {
	NONE,
	HEALTH,
	STAMINA,
	SPEED,
	DEFENSE,
	STEALTH
}

export default interface Item {
	id: string,
	name: string,
	type: ItemType,
	effect: EffectType,
	stats: StatsType
}

const effectTypeLookupTable: any = {
	[EffectType.NONE]: EffectType.NONE,
	[EffectType.FREEZE]: EffectType.FREEZE,
	[EffectType.FIRE]: EffectType.FIRE,
	[EffectType.ELECTRIC]: EffectType.ELECTRIC,
};

const statsTypeLookupTable: any = {
	[StatsType.NONE]: StatsType.NONE,
	[StatsType.HEALTH]: StatsType.HEALTH,
	[StatsType.STAMINA]: StatsType.STAMINA,
	[StatsType.SPEED]: StatsType.SPEED,
	[StatsType.DEFENSE]: StatsType.DEFENSE,
	[StatsType.STEALTH]: StatsType.STEALTH,
};

export { effectTypeLookupTable, statsTypeLookupTable };
