import {Item} from "./Item"

/**
 * Helper function to get the sprite icon for the item
 * @param item
 */
export const getItemIconClass = (item: Item): string => {
	return `icon-item ${item.identifiers.join(" ")}`
}
