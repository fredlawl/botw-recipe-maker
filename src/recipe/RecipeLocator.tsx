import React from "react";
import Inventory from "../inventory/Inventory";
import InventoryTally from "../inventory/InventoryTally";

interface RecipeLocatorProps {
	inventory: Inventory
}

const RecipeLocator = (props: RecipeLocatorProps) => {
	return (
		<section className={"recipe-locator"}>
			<InventoryTally inventory={props.inventory}/>
		</section>
	);
};

export default RecipeLocator;
