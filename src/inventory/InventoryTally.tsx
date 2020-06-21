import React from "react";
import Inventory from "./Inventory";

interface InventoryTallyProps {
	inventory: Inventory
}

const InventoryTally = (props: InventoryTallyProps) => {
	return (
		<section className={"inventory-tally"}>
			<header>
				<h1>Total Items Selected: {props.inventory.totalCount}</h1>
			</header>
			{props.inventory.totalCount > 0 &&
				<ul>
					{props.inventory.items.map(i =>
						<li key={i.ingredient.id}>{i.ingredient.name}: {i.amount}</li>)}
				</ul>
			}
		</section>
	);
};

export default InventoryTally;
