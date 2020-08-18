import React from "react";
import "../sass/InventoryTally.scss";
import {Inventory} from "../Inventory";
import {ItemStack} from "../../item/ItemStack";
import {Item} from "../../item/Item";

interface InventoryTallyProps {
	inventory: Inventory
}

const InventoryTally = (props: InventoryTallyProps) => {
	const sortFunc = (a: ItemStack<Item>, b: ItemStack<Item>) => {
		if (a.stack === b.stack) return 0;
		return (a.stack > b.stack) ? -1 : 1;
	};

	return (
		<div className={"inventory-tally"}>
			<h1>Ingredients Selected: {props.inventory.totalCount}</h1>
			{props.inventory.totalCount > 0 &&
				<ul>
					{props.inventory.items.sort(sortFunc).map(i =>
						<li key={i.item.id}><span className={"amount"}>{i.stack}</span>x {i.item.name}</li>)}
				</ul>
			}
		</div>
	);
};

export default InventoryTally;
