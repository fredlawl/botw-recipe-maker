export enum ItemType {
	MATERIAL = 1,
	CONSUMABLE
}

export enum ImmunityBuffType {
	NONE,
	FREEZE,
	FIRE,
	ELECTRIC,
}

export enum EffectType {
	NONE,
	HEALTH,
	ATTACK,
	STAMINA,
	SPEED,
	DEFENSE,
	STEALTH
}

export default interface Item {
	id: string,
	name: string,
	type: ItemType,
	immunity: ImmunityBuffType,
	effect: EffectType
}

const immunityBuffTypeLookupTable: any = {
	[ImmunityBuffType.NONE]: ImmunityBuffType.NONE,
	[ImmunityBuffType.FREEZE]: ImmunityBuffType.FREEZE,
	[ImmunityBuffType.FIRE]: ImmunityBuffType.FIRE,
	[ImmunityBuffType.ELECTRIC]: ImmunityBuffType.ELECTRIC,
};

const effectTypeLookupTable: any = {
	[EffectType.NONE]: EffectType.NONE,
	[EffectType.HEALTH]: EffectType.HEALTH,
	[EffectType.STAMINA]: EffectType.STAMINA,
	[EffectType.ATTACK]: EffectType.ATTACK,
	[EffectType.SPEED]: EffectType.SPEED,
	[EffectType.DEFENSE]: EffectType.DEFENSE,
	[EffectType.STEALTH]: EffectType.STEALTH,
};

export { immunityBuffTypeLookupTable, effectTypeLookupTable };
