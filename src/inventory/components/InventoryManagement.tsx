import React, {useEffect, useRef, useState} from "react";
import "../sass/InventoryManagement.scss"
import ClickableIngredient from "../../item/components/ClickableItem";
import InventorySearch from "./InventorySearch";
import ReactTooltip from "react-tooltip";
import {Inventory} from "../Inventory";
import {ItemStack} from "../../item/ItemStack";
import InventoryTally from "./InventoryTally";
import {Item} from "../../item/Item";
import {allMaterials} from "../../item/database/materials"
import {primaryCategories, Category} from "../../item/database/itemCategories";
import {Material} from "../../item/Material";
import {ItemCategory} from "../../item/ItemCategory";

const availableIngredients: ItemStack<Material>[] = allMaterials.map(i => new ItemStack(i, 0));
const inventoryTabs: string[] = Object.keys(primaryCategories);

interface InventoryViewProps {
	inventory: Inventory,
	onInventoryUpdated?: (inventory: Inventory) => void
}

const InventoryManagement = (props: InventoryViewProps) => {
	const [cacheId, setCacheId] = useState(0);
	const [inventory, setInventory] = useState(props.inventory);
	const [selectedTab, setSelectedTab] = useState<ItemCategory>(primaryCategories[Category.FRUIT]);
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

	const onIngredientUpdate = (prevStack: ItemStack<Item>, curStack: ItemStack<Item>): void => {
		inventory.addInventoryItem(curStack as ItemStack<Material>);
		inventoryUpdated();
	};

	const changeTab = (category: ItemCategory): void => {
		setSearchQuery("");
		// @ts-ignore
		searchElement.current.value = '';
		setSelectedTab(category);
	};

	const onClearAll = (): void => {
		setCacheId(cacheId + 1);
		inventory.clear();
		inventoryUpdated();
	};

	const onFillInventory = (): void => {
		setCacheId(cacheId + 1);
		inventory.clear();
		for (const item of allMaterials) {
			inventory.addInventoryItem(new ItemStack<Material>(item, ItemStack.STACK_MAX));
		}
		inventoryUpdated();
	};

	const onSelectTab = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		const selectedTab = (event.target as HTMLButtonElement).dataset.target as string;
		changeTab(primaryCategories[selectedTab]);
	};

	const onSearch = (searchQuery: string): void => {
		const query = searchQuery.toLowerCase();

		if (query.length === 0) {
			changeTab(primaryCategories[Category.FRUIT]);
			return;
		}

		setSearchQuery(searchQuery);
	};

	const inventoryUpdated = () => {
		const clonedInventory = Inventory.clone(inventory);
		if (props.onInventoryUpdated) {
			props.onInventoryUpdated(clonedInventory);
		}

		setInventory(clonedInventory);
	};

	return (
		<section className={"inventory-management"}>

			<div className={"inventory-search-wrapper"}>
				<InventorySearch onSearchQuery={onSearch} ref={searchElement} />
				<sub>Search Shortcut: "/"</sub>
			</div>

			<div className={"inventory-view"}>
				{/*Tabs*/}
				<nav className={"inventory-tab-list"}>
					{inventoryTabs.map(t => {
						return (
							<div key={`inventory-selector-${primaryCategories[t].id}`} className={`inventory-selector ${selectedTab.id === primaryCategories[t].id ? 'selected' : ''}`}>
								<button data-target={t} onClick={e => onSelectTab(e)}>{primaryCategories[t].id}</button>
							</div>
						);
					})}
				</nav>

				{searchQuery.length <= 0 &&
					<div className={"inventory-tab-containers"}>
						{inventoryTabs.map(t => {
							return (
								<div key={`inventory-content-tab-${primaryCategories[t].id}`} className={`grid inventory-tab tab-${primaryCategories[t].id} ${selectedTab.id === primaryCategories[t].id ? 'shown' : ''}`}>
									{availableIngredients
										.filter(i => i.item.categories.includes(primaryCategories[t]))
										.map(i => <ClickableIngredient key={`${i.item.id}-${cacheId}`} onAmountUpdated={onIngredientUpdate} item={i.item} initialAmount={inventory.item(i.item)?.stack || 0} />)}
								</div>
							);
						})}
					</div>
				}

				{searchQuery.length > 0 &&
					<div className={`grid`}>
						{availableIngredients
							.filter(i => i.item.name.toLowerCase().includes(searchQuery))
							.map(i => <ClickableIngredient key={`${i.item.id}-${cacheId}`} onAmountUpdated={onIngredientUpdate} item={i.item} initialAmount={inventory.item(i.item)?.stack || 0} />)}
					</div>
				}
			</div>

			<button className={"inventory-operation"} onClick={e => onFillInventory()}>Fill Inventory</button>
			<button className={"inventory-operation"} onClick={e => onClearAll()}>Clear Inventory</button>

			<ReactTooltip />

			<InventoryTally inventory={inventory} />
		</section>
	);
}

export default InventoryManagement;
