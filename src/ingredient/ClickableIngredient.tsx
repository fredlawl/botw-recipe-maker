import React, {useState} from "react";
import "./ClickableIngredient.scss";
import "./Ingredient.scss"
import Ingredient, {getIngredientIconClass} from "./Ingredient";
import IngredientStack from "./IngredientStack";

interface props {
	ingredient: Ingredient,
	initialAmount?: number,
	onAmountUpdated?: (ingredient: Ingredient, previousAmount: number, newAmount: number) => void
}

const ClickableIngredient = (props: props) => {
	const [amount, setAmount] = useState(IngredientStack.clamp(props.initialAmount || 0));

	const updateAmount = (newAmount: number) => {
		if (isNaN(newAmount)) {
			newAmount = 0;
		}

		newAmount = IngredientStack.clamp(newAmount);
		if (props.onAmountUpdated) {
			props.onAmountUpdated(props.ingredient, amount, newAmount);
		}

		setAmount(newAmount);
	};

	return (
		<div
			className={"clickableIngredient"}>
			<div
				data-tip={props.ingredient.name}
				className={getIngredientIconClass(props.ingredient)}
				title={props.ingredient.name}
				onClick={() => updateAmount(amount + 1)}/>
			<input
				onChange={e => updateAmount(parseInt(e.target.value))}
				onFocus={e => e.target.select()}
				type={"number"}
				min={IngredientStack.STACK_MIN}
				max={IngredientStack.STACK_MAX}
				value={amount}
				className={"numberInInventory"}/>
		</div>
	);
};

export default React.memo(ClickableIngredient);
