import React, {useState} from "react";
import "./ClickableIngredient.scss";
import "./Ingredient.css"
import Ingredient, {getIngredientIconClass} from "./Ingredient";

interface props {
	ingredient: Ingredient,
	initialAmount?: number,
	onAmountUpdated?: (ingredient: Ingredient, previousAmount: number, newAmount: number) => void
}

const ClickableIngredient = (props: props) => {
	const AMNT_MIN: number = 0;
	const AMNT_MAX: number = 100;

	const clampAmount = (amnt: number): number => {
		amnt = (amnt < AMNT_MAX) ? amnt : AMNT_MAX;
		return (amnt >= AMNT_MIN) ? amnt : AMNT_MIN;
	}

	const [amount, setAmount] = useState(clampAmount(props.initialAmount || 0));

	const updateAmount = (newAmount: number) => {
		const prevAmount = amount;
		newAmount = clampAmount(newAmount);

		if (props.onAmountUpdated) {
			props.onAmountUpdated(props.ingredient, prevAmount, newAmount);
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
				min={AMNT_MIN}
				max={AMNT_MAX}
				value={amount}
				className={"numberInInventory"}/>
		</div>
	);
};

export default React.memo(ClickableIngredient);
