import React, {useState} from "react";
import {Inventory} from "../inventory/Inventory";
import InventoryManagement from "../inventory/components/InventoryManagement";
import RecipeLocator from "../recipe-search/components/RecipeLocator";

const defaultInventory = new Inventory();

const Main = () => {

	const [inventory, setInventory] = useState(defaultInventory);

	const onInventoryUpdated = (newInventory: Inventory) => {
		setInventory(newInventory);
	};

	return (
		<>
			<InventoryManagement inventory={inventory} onInventoryUpdated={onInventoryUpdated}/>
			<RecipeLocator inventory={inventory}/>
		</>
	)
};

export default Main;
