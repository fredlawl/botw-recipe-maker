import React, {useState} from "react";
import "../sass/ClickableItem.scss";
import "../sass/ItemIcon.scss";
import ItemStack from "../ItemStack";
import Item from "../Item";
import {getItemIconClass} from "../utility";

interface props {
	item: Item,
	initialAmount?: number,
	onAmountUpdated?: (prevStack: ItemStack<Item>, curStack: ItemStack<Item>) => void
}

const ClickableItem = (props: props) => {
	const [stack, setStack] = useState(
		new ItemStack(props.item, ItemStack.clamp(props.initialAmount || 0))
	);

	const updateAmount = (newAmount: number) => {
		if (isNaN(newAmount)) {
			newAmount = 0;
		}

		const newStack = new ItemStack(props.item, newAmount);
		if (props.onAmountUpdated) {
			props.onAmountUpdated(stack, newStack);
		}

		setStack(newStack);
	};

	return (
		<div
			className={"clickableIngredient"}>
			<div
				data-tip={props.item.name}
				className={getItemIconClass(props.item)}
				title={props.item.name}
				onClick={() => updateAmount(stack.stack + 1)}/>
			<input
				onChange={e => updateAmount(parseInt(e.target.value))}
				onFocus={e => e.target.select()}
				type={"number"}
				min={ItemStack.STACK_MIN}
				max={ItemStack.STACK_MAX}
				value={stack.stack}
				className={"numberInInventory"}/>
		</div>
	);
};

export default React.memo(ClickableItem);
