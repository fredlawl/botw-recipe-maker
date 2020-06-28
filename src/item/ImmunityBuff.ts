export enum ImmunityBuffType {
	NONE,
	FREEZE,
	FIRE,
	ELECTRIC,
}

export const immunityBuffTypeLookupTable: any = {
	[ImmunityBuffType.NONE]: ImmunityBuffType.NONE,
	[ImmunityBuffType.FREEZE]: ImmunityBuffType.FREEZE,
	[ImmunityBuffType.FIRE]: ImmunityBuffType.FIRE,
	[ImmunityBuffType.ELECTRIC]: ImmunityBuffType.ELECTRIC,
};
