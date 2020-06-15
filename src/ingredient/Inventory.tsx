import React, {useRef, useState} from "react";
import "./Inventory.scss"
import Ingredient, {allIngredientsLookupTable, IngredientClass, ingredientClassLookupTable} from "./Ingredient";
import ClickableIngredient from "./ClickableIngredient";
import InventoryIngredient from "./InventoryIngredient";
import InventorySearch from "./InventorySearch";

const availableIngredients: Ingredient[] = allIngredientsLookupTable;
const inventoryTabs: IngredientClass[] = Object.values<IngredientClass>(ingredientClassLookupTable);

const Inventory = () => {
	const [inventory, setInventory] = useState(new Map<number, InventoryIngredient>());
	const [mountCount, setMountCount] = useState(0);
	const [selectedTab, setSelectedTab] = useState(IngredientClass.FRUIT);
	const [searchQuery, setSearchQuery] = useState('');
	const searchElement = useRef<HTMLInputElement>(null);

	const onIngredientUpdate = (ingredient: Ingredient, previousAmount: number, newAmount: number): void => {
		const inventoryIngredient = new InventoryIngredient(ingredient, newAmount);
		inventory.set(ingredient.id, inventoryIngredient);

		// We dont want objects in our master inventory list if we no longer have items for it
		if (newAmount <= 0) {
			inventory.delete(ingredient.id);
		}

		setInventory(new Map<number, InventoryIngredient>(inventory));
	};

	const getTotalItemsInInventory = (): number => {
		return Array.from(inventory.values()).reduce<number>((prevValue, ingredient) => {
			return prevValue + ingredient.amount;
		}, 0);
	}

	const changeTab = (inventoryClass: IngredientClass): void => {
		setSearchQuery("");
		// @ts-ignore
		searchElement.current.value = '';
		setSelectedTab(inventoryClass);
	};

	const onClearAll = (): void => {
		setInventory(new Map<number, InventoryIngredient>());
		setMountCount(mountCount + 1);
		changeTab(IngredientClass.FRUIT);
	}

	const onSelectTab = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		const selectedTab = (event.target as HTMLButtonElement).dataset.target as string;
		changeTab(ingredientClassLookupTable[selectedTab]);
	};

	const onSearch = (searchQuery: string): void => {
		setSearchQuery(searchQuery.toLowerCase());
	};

	return (
		<div className={"inventory"}>
			<span>Total Items Selected: {getTotalItemsInInventory()}</span>

			<ul>
				{Array.from(inventory.values()).map(i => <li key={i.ingredient.id}>{i.ingredient.name}: {i.amount}</li>)}
			</ul>

			<InventorySearch onSearchQuery={onSearch} ref={searchElement} />

			<button onClick={e => onClearAll()}>Clear All</button>

			{/*Tabs*/}
			<nav className={"inventory-tab-list"}>
				{inventoryTabs.map(t => {
					return (
						<div className={`inventory-selector ${selectedTab === t ? 'selected' : ''}`} key={`inventory-selector-${t}`}>
							<button data-target={t} onClick={e => onSelectTab(e)}>{t}</button>
						</div>
					);
				})}
			</nav>

			{searchQuery.length <= 0 &&
				<div className={"inventory-tab-containers"}>
					{inventoryTabs.map(t => {
						return (
							<div className={`grid inventory-tab tab-${t} ${selectedTab === t ? 'shown' : ''}`} key={`inventory-content-tab-${t}`}>
								{availableIngredients
									.filter(i => i.classification === t)
									.map(i => <ClickableIngredient key={'categorized-' + i.id + '-' + mountCount} onAmountUpdated={onIngredientUpdate} ingredient={i} initialAmount={inventory.get(i.id)?.amount || 0} />)}
							</div>
						);
					})}
				</div>
			}

			{searchQuery.length > 0 &&
				<div className={`grid`}>
					{availableIngredients
						.filter(i => i.name.toLowerCase().includes(searchQuery))
						.map(i => <ClickableIngredient key={'seaarch-' + i.id + '-' + mountCount} onAmountUpdated={onIngredientUpdate} ingredient={i} initialAmount={inventory.get(i.id)?.amount || 0} />)}
				</div>
			}
		</div>
	);
}

export default Inventory;
