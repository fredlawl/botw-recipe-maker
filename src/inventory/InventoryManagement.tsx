import React, {useEffect, useRef, useState} from "react";
import "./InventoryManagement.scss"
import Ingredient, {allIngredientsLookupTable, IngredientClass, ingredientClassLookupTable} from "../ingredient/Ingredient";
import ClickableIngredient from "../ingredient/ClickableIngredient";
import InventorySearch from "./InventorySearch";
import ReactTooltip from "react-tooltip";
import Inventory from "./Inventory";
import IngredientStack from "../ingredient/IngredientStack";
import InventoryTally from "./InventoryTally";

const availableIngredients: IngredientStack[] = allIngredientsLookupTable.map(i => new IngredientStack(i, 0));
const inventoryTabs: IngredientClass[] = Object.values<IngredientClass>(ingredientClassLookupTable);

interface InventoryViewProps {
	inventory: Inventory,
	onInventoryUpdated?: (inventory: Inventory) => void
}

const InventoryManagement = (props: InventoryViewProps) => {
	const [cacheId, setCacheId] = useState(0);
	const [inventory, setInventory] = useState(props.inventory);
	const [selectedTab, setSelectedTab] = useState<IngredientClass | undefined>(IngredientClass.FRUIT);
	const [searchQuery, setSearchQuery] = useState('');
	const searchElement = useRef<HTMLInputElement>(null);

	useEffect(() => {
		/*
		 * ReactTooltip is sensitive to how state changes, therefore, we need
		 * to rebuild the tooltips when component state is mutated.
		 */
		ReactTooltip.rebuild();
	}, [searchQuery, selectedTab, inventory]);

	// Create a shortcut "/" to automatically select search element for search
	useEffect(() => {
		const onKeyup = (e: KeyboardEvent) => {
			const element = searchElement.current;
			if (e.key === '/' && element !== document.activeElement) {
				e.preventDefault();
				element?.focus();
			}
		};

		document.addEventListener('keyup', onKeyup);

		return () => {
			document.removeEventListener('keyup', onKeyup);
		};
	}, [searchElement]);

	const onIngredientUpdate = (ingredient: Ingredient, previousAmount: number, newAmount: number): void => {
		const inventoryIngredient = new IngredientStack(ingredient, newAmount);
		inventory.addInventoryItem(inventoryIngredient);
		inventoryUpdated();
	};

	const changeTab = (inventoryClass: IngredientClass): void => {
		setSearchQuery("");
		// @ts-ignore
		searchElement.current.value = '';
		setSelectedTab(inventoryClass);
	};

	const onClearAll = (): void => {
		setCacheId(cacheId + 1);
		inventory.clear();
		changeTab(IngredientClass.FRUIT);
		inventoryUpdated();
	}

	const onSelectTab = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		const selectedTab = (event.target as HTMLButtonElement).dataset.target as string;
		changeTab(ingredientClassLookupTable[selectedTab]);
	};

	const onSearch = (searchQuery: string): void => {
		const query = searchQuery.toLowerCase();

		if (query.length === 0) {
			changeTab(IngredientClass.FRUIT);
			return;
		}

		setSearchQuery(searchQuery);
		setSelectedTab(undefined);

	};

	const inventoryUpdated = () => {
		const clonedInventory = Inventory.clone(inventory);
		if (props.onInventoryUpdated) {
			props.onInventoryUpdated(clonedInventory);
		}

		setInventory(clonedInventory);
	}

	return (
		<section className={"inventory-management"}>

			<div className={"inventory-search-wrapper"}>
				<InventorySearch onSearchQuery={onSearch} ref={searchElement} />
				<sub>Search Shortcut: "/"</sub>
			</div>


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

			<div className={"inventory-view"}>
				{searchQuery.length <= 0 &&
					<div className={"inventory-tab-containers"}>
						{inventoryTabs.map(t => {
							return (
								<div className={`grid inventory-tab tab-${t} ${selectedTab === t ? 'shown' : ''}`} key={`inventory-content-tab-${t}`}>
									{availableIngredients
										.filter(i => i.ingredient.classification === t)
										.map(i => <ClickableIngredient key={`${i.ingredient.id}-${cacheId}`} onAmountUpdated={onIngredientUpdate} ingredient={i.ingredient} initialAmount={inventory.item(i)?.amount || 0} />)}
								</div>
							);
						})}
					</div>
				}

				{searchQuery.length > 0 &&
					<div className={`grid`}>
						{availableIngredients
							.filter(i => i.ingredient.name.toLowerCase().includes(searchQuery))
							.map(i => <ClickableIngredient key={`${i.ingredient.id}-${cacheId}`} onAmountUpdated={onIngredientUpdate} ingredient={i.ingredient} initialAmount={inventory.item(i)?.amount || 0} />)}
					</div>
				}
			</div>

			<button className={"clear-all-btn"} onClick={e => onClearAll()}>Clear Inventory</button>

			<ReactTooltip />

			<InventoryTally inventory={inventory} />
		</section>
	);
}

export default InventoryManagement;
