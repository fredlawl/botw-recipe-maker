import {Effect} from "./Effect";
import {ImmunityBuffType} from "./ImmunityBuff";

export interface Effectional {
	immunity: ImmunityBuffType,
	effects: Effect[]
}
