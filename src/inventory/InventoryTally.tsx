import React from "react";
import Inventory from "./Inventory";
import IngredientBundle from "../ingredient/IngredientBundle";

interface InventoryTallyProps {
	inventory: Inventory
}

const InventoryTally = (props: InventoryTallyProps) => {
	const sortFunc = (a: IngredientBundle, b: IngredientBundle) => {
		if (a.amount === b.amount) return 0;
		return (a.amount > b.amount) ? -1 : 1;
	};

	return (
		<section className={"inventory-tally"}>
			<header>
				<h1>Ingredients Selected: {props.inventory.totalCount}</h1>
			</header>
			{props.inventory.totalCount > 0 &&
				<ul>
					{props.inventory.items.sort(sortFunc).map(i =>
						<li key={i.ingredient.id}>{i.ingredient.name}: {i.amount}</li>)}
				</ul>
			}
		</section>
	);
};

export default InventoryTally;
