import React from "react";
import "./InventoryTally.scss";
import Inventory from "./Inventory";
import IngredientStack from "../ingredient/IngredientStack";

interface InventoryTallyProps {
	inventory: Inventory
}

const InventoryTally = (props: InventoryTallyProps) => {
	const sortFunc = (a: IngredientStack, b: IngredientStack) => {
		if (a.amount === b.amount) return 0;
		return (a.amount > b.amount) ? -1 : 1;
	};

	return (
		<div className={"inventory-tally"}>
			<h1>Ingredients Selected: {props.inventory.totalCount}</h1>
			{props.inventory.totalCount > 0 &&
				<ul>
					{props.inventory.items.sort(sortFunc).map(i =>
						<li key={i.ingredient.id}><span className={"amount"}>{i.amount}</span>x {i.ingredient.name}</li>)}
				</ul>
			}
		</div>
	);
};

export default InventoryTally;
