import React, {useState} from 'react';
import './App.scss';
import InventoryManagement from "./inventory/InventoryManagement";
import Inventory from "./inventory/Inventory";
import RecipeLocator from "./recipe/RecipeLocator";

const defaultInventory = new Inventory();

const App = () => {
	const [inventory, setInventory] = useState(defaultInventory);

	const onInventoryUpdated = (newInventory: Inventory) => {
		setInventory(newInventory);
	};

	return (
		<div className={"app"}>
			<InventoryManagement inventory={inventory} onInventoryUpdated={onInventoryUpdated}/>
			<RecipeLocator inventory={inventory}/>
		</div>
	);
}

export default App;
