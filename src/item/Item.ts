import Effect from "./Effect";

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

export default interface Item {
	id: string,
	name: string,
	type: ItemType,
	immunity: ImmunityBuffType,
	effect: Effect
}

const immunityBuffTypeLookupTable: any = {
	[ImmunityBuffType.NONE]: ImmunityBuffType.NONE,
	[ImmunityBuffType.FREEZE]: ImmunityBuffType.FREEZE,
	[ImmunityBuffType.FIRE]: ImmunityBuffType.FIRE,
	[ImmunityBuffType.ELECTRIC]: ImmunityBuffType.ELECTRIC,
};

export { immunityBuffTypeLookupTable };
