export enum ItemType {
	MATERIAL = 1,
	CONSUMABLE
}

export default interface Item {
	id: string,
	name: string,
	type: ItemType
}
