import Recipe from "../Recipe";

const bakedRecipes: Recipe[] = [
	new Recipe("Baked Apple", [
		"apple",
	]),
	new Recipe("Baked Fortified Pumpkin", [
		"fortified-pumpkin"
	]),
	new Recipe("Baked Palm Fruit", [
		"palm-fruit"
	]),
	new Recipe("Blackened Crab", [
		"crab"
	]),
	new Recipe("Blueshell Escargot", [
		"hearty-blueshell-snail"
	]),
	new Recipe("Campfire Egg", [
		"bird-egg"
	]),
	new Recipe("Charred Pepper", [
		"spicy-pepper"
	]),
	new Recipe("Roasted Acorn", [
		"acorn"
	]),
	new Recipe("Roasted Armoranth", [
		"armoranth"
	]),
	new Recipe("Roasted Bass", [
		"roasted-bass"
	]),
	new Recipe("Hearty Roasted Bass", [
		"hearty-bass"
	]),
	new Recipe("Roasted Big Radish", [
		"big-hearty-radish"
	]),
	// new Recipe("Roasted Bird Drumstick", []),
	// new Recipe("Roasted Bird Thigh", []),
	// new Recipe("Roasted Carp", []),
	// new Recipe("Roasted Endura Carrot", []),
	// new Recipe("Roasted Hearty Bass", []),
	// new Recipe("Roasted Hearty Durian", []),
	// new Recipe("Roasted Hearty Salmon", []),
	// new Recipe("Roasted Hydromelon", []),
	// new Recipe("Roasted Lotus Seeds", []),
	// new Recipe("Roasted Mighty Bananas", []),
	// new Recipe("Roasted Mighty Thistle", []),
	// new Recipe("Roasted Porgy", []),
	// new Recipe("Roasted Radish", []),
	// new Recipe("Roasted Swift Carrot", []),
	// new Recipe("Roasted Tree Nut", []),
	// new Recipe("Roasted Trout", []),
	// new Recipe("Roasted Voltfruit", []),
	// new Recipe("Roasted Whole Bird", []),
	// new Recipe("Roasted Wildberry", []),
	// new Recipe("Seared Gourmet Steak", []),
	// new Recipe("Seared Prime Steak", []),
	// new Recipe("Seared Steak", []),
	// new Recipe("Sneaky River Escargot", []),
	// new Recipe("Toasted Big Hearty Truffle", []),
	// new Recipe("Toasted Hearty Truffle", []),
	// new Recipe("Toasty Chillshroom", []),
	// new Recipe("Toasty Endura Shroom", []),
	// new Recipe("Toasty Hylian Shroom", []),
	// new Recipe("Toasty Ironshroom", []),
	// new Recipe("Toasty Razorshroom", []),
	// new Recipe("Toasty Rushroom", []),
	// new Recipe("Toasty Silent Shroom", []),
	// new Recipe("Toasty Stamella Shroom", []),
	// new Recipe("Toasty Sunshroom", []),
	// new Recipe("Toasty Zapshroom", []),
];

const allRecipes: Recipe[] = [
	...bakedRecipes
];

export { bakedRecipes, allRecipes };
