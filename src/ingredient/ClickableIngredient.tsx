import React, {useState} from "react";
import "./ClickableIngredient.scss";
import "./Ingredient.scss"
import Ingredient, {getIngredientIconClass} from "./Ingredient";
import IngredientStack from "./IngredientStack";

interface props {
	ingredient: Ingredient,
	initialAmount?: number,
	onAmountUpdated?: (prevStack: IngredientStack, curStack: IngredientStack) => void
}

const ClickableIngredient = (props: props) => {
	const [stack, setStack] = useState(
		new IngredientStack(props.ingredient, IngredientStack.clamp(props.initialAmount || 0))
	);

	const updateAmount = (newAmount: number) => {
		if (isNaN(newAmount)) {
			newAmount = 0;
		}

		const newStack = new IngredientStack(props.ingredient, newAmount);
		if (props.onAmountUpdated) {
			props.onAmountUpdated(stack, newStack);
		}

		setStack(newStack);
	};

	return (
		<div
			className={"clickableIngredient"}>
			<div
				data-tip={props.ingredient.name}
				className={getIngredientIconClass(props.ingredient)}
				title={props.ingredient.name}
				onClick={() => updateAmount(stack.amount + 1)}/>
			<input
				onChange={e => updateAmount(parseInt(e.target.value))}
				onFocus={e => e.target.select()}
				type={"number"}
				min={IngredientStack.STACK_MIN}
				max={IngredientStack.STACK_MAX}
				value={stack.amount}
				className={"numberInInventory"}/>
		</div>
	);
};

export default React.memo(ClickableIngredient);
