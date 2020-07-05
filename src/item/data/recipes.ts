import Recipe, {RecipeIngredient, Logic} from "../Recipe";
import {materialLookupTable, MaterialType} from "./materials";
import {Category, primaryCategories, subCategories} from "./itemCategories";

const bakedRecipes: Recipe[] = [
	new Recipe("Baked Apple", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.APPLE], 1)
	]),
	new Recipe("Baked Fortified Pumpkin", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.FORTIFIED_PUMPKIN], 1)
	]),
	new Recipe("Baked Palm Fruit", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.PALM_FRUIT], 1)
	]),
	new Recipe("Blackened Crab", [
		Logic.AND,
		new RecipeIngredient(subCategories[Category.CRAB], 1)
	]),
	new Recipe("Blueshell Escargot", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.HEARTY_BLUESHELL_SNAIL], 1)
	]),
	new Recipe("Campfire Egg", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.BIRD_EGG], 1)
	]),
	new Recipe("Charred Pepper", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.SPICY_PEPPER], 1)
	]),
	new Recipe("Roasted Acorn", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.ACORN], 1)
	]),
	new Recipe("Roasted Armoranth", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.ARMORANTH], 1)
	]),
	new Recipe("Roasted Bass", [
		Logic.OR,
		new RecipeIngredient(materialLookupTable[MaterialType.HYRULE_BASS], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.STAMINOKA_BASS], 1)
	]),
	new Recipe("Hearty Roasted Bass", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.HEARTY_BASS], 1)
	]),
	new Recipe("Roasted Big Radish", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.BIG_HEARTY_RADISH], 1)
	]),
	new Recipe("Roasted Bird Drumstick", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.RAW_BIRD_DRUMSTICK], 1)
	]),
	new Recipe("Roasted Bird Thigh", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.RAW_BIRD_THIGH], 1)
	]),
	new Recipe("Roasted Carp", [
		Logic.OR,
		new RecipeIngredient(materialLookupTable[MaterialType.ARMORED_CARP], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.MIGHTY_CARP], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.SANKE_CARP], 1),
	]),
	new Recipe("Roasted Endura Carrot", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.ENDURA_CARROT], 1),
	]),
	new Recipe("Roasted Hearty Bass", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.HEARTY_BASS], 1),
	]),
	new Recipe("Roasted Hearty Durian", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.HEARTY_BASS], 1),
	]),
	new Recipe("Roasted Hearty Salmon", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.HEARTY_SALMON], 1),
	]),
	new Recipe("Roasted Hydromelon", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.HYDROMELON], 1),
	]),
	new Recipe("Roasted Lotus Seeds", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.FLEET_LOTUS_SEEDS], 1),
	]),
	new Recipe("Roasted Mighty Bananas", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.MIGHTY_BANANAS], 1),
	]),
	new Recipe("Roasted Mighty Thistle", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.MIGHTY_THISTLE], 1),
	]),
	new Recipe("Roasted Porgy", [
		Logic.OR,
		new RecipeIngredient(materialLookupTable[MaterialType.ARMORED_PORGY], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.MIGHTY_PORGY], 1),
	]),
	new Recipe("Roasted Radish", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.HEARTY_RADISH], 1),
	]),
	new Recipe("Roasted Swift Carrot", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.SWIFT_CARROT], 1),
	]),
	new Recipe("Roasted Tree Nut", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.CHICKALOO_TREE_NUT], 1),
	]),
	new Recipe("Roasted Trout", [
		Logic.OR,
		new RecipeIngredient(materialLookupTable[MaterialType.CHILLFIN_TROUT], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.SIZZLEFIN_TROUT], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.STEALTHFIN_TROUT], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.VOLTFIN_TROUT], 1),
	]),
	new Recipe("Roasted Voltfruit", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.VOLTFRUIT], 1),
	]),
	new Recipe("Roasted Whole Bird", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.RAW_WHOLE_BIRD], 1),
	]),
	new Recipe("Roasted Wildberry", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.WILDBERRY], 1),
	]),
	new Recipe("Seared Gourmet Steak", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.RAW_GOURMET_MEAT], 1),
	]),
	new Recipe("Seared Prime Steak", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.RAW_PRIME_MEAT], 1),
	]),
	new Recipe("Seared Steak", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.RAW_MEAT], 1),
	]),
	new Recipe("Sneaky River Escargot", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.SNEAKY_RIVER_SNAIL], 1),
	]),
	new Recipe("Toasted Big Hearty Truffle", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.BIG_HEARTY_TRUFFLE], 1),
	]),
	new Recipe("Toasted Hearty Truffle", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.HEARTY_TRUFFLE], 1),
	]),
	new Recipe("Toasty Chillshroom", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.CHILLSHROOM], 1),
	]),
	new Recipe("Toasty Endura Shroom", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.ENDURA_SHROOM], 1),
	]),
	new Recipe("Toasty Hylian Shroom", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.HYLIAN_SHROOM], 1),
	]),
	new Recipe("Toasty Ironshroom", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.IRONSHROOM], 1),
	]),
	new Recipe("Toasty Razorshroom", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.RAZORSHROOM], 1),
	]),
	new Recipe("Toasty Rushroom", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.RUSHROOM], 1),
	]),
	new Recipe("Toasty Silent Shroom", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.SILENT_SHROOM], 1),
	]),
	new Recipe("Toasty Stamella Shroom", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.STAMELLA_SHROOM], 1),
	]),
	new Recipe("Toasty Sunshroom", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.SUNSHROOM], 1),
	]),
	new Recipe("Toasty Zapshroom", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.ZAPSHROOM], 1),
	]),
	new Recipe("Apple Pie", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.TABANTHA_WHEAT], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.CANE_SUGAR], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.GOAT_BUTTER], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.APPLE], 1),
	]),
	new Recipe("Carrot Cake", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.TABANTHA_WHEAT], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.CANE_SUGAR], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.GOAT_BUTTER], 1),
		[
			Logic.OR,
			new RecipeIngredient(materialLookupTable[MaterialType.SWIFT_CARROT], 1),
			new RecipeIngredient(materialLookupTable[MaterialType.ENDURA_CARROT], 1),
		]
	]),
	new Recipe("Carrot Stew", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.FRESH_MILK], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.GOAT_BUTTER], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.TABANTHA_WHEAT], 1),
		[
			Logic.OR,
			new RecipeIngredient(materialLookupTable[MaterialType.SWIFT_CARROT], 1),
			new RecipeIngredient(materialLookupTable[MaterialType.ENDURA_CARROT], 1),
		]
	]),
	new Recipe("Crab Omelet with Rice", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.HYLIAN_RICE], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.BIRD_EGG], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.ROCK_SALT], 1),
		new RecipeIngredient(subCategories[Category.CRAB], 1),
	]),
	new Recipe("Crab Risotto", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.HYLIAN_RICE], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.GOAT_BUTTER], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.ROCK_SALT], 1),
		new RecipeIngredient(subCategories[Category.CRAB], 1),
	]),
	new Recipe("Crab Stir-Fry", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.GORON_SPICE], 1),
		new RecipeIngredient(subCategories[Category.CRAB], 1),
	]),
	new Recipe("Cream of Mushroom Soup", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.FRESH_MILK], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.ROCK_SALT], 1),
		new RecipeIngredient(primaryCategories[Category.SHROOMS], 1),
		[
			Logic.OR,
			new RecipeIngredient(primaryCategories[Category.PLANTS], 1),
			new RecipeIngredient(primaryCategories[Category.VEGETABLES], 1),
		]
	]),
	// todo: This recipe needs to be tested in game specifically
	new Recipe("Cream of Vegetable Soup", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.ROCK_SALT], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.FRESH_MILK], 1),
		[
			Logic.OR,
			new RecipeIngredient(primaryCategories[Category.PLANTS], 1),
			new RecipeIngredient(materialLookupTable[MaterialType.HEARTY_RADISH], 1),
			new RecipeIngredient(materialLookupTable[MaterialType.BIG_HEARTY_RADISH], 1),
		]
	]),
	new Recipe("Creamy Heart Soup", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.VOLTFRUIT], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.HYDROMELON], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.FRESH_MILK], 1),
		[
			Logic.OR,
			new RecipeIngredient(materialLookupTable[MaterialType.BIG_HEARTY_RADISH], 1),
			new RecipeIngredient(materialLookupTable[MaterialType.HEARTY_RADISH], 1),
		]
	]),
	new Recipe("Creamy Meat Soup", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.FRESH_MILK], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.ROCK_SALT], 1),
		new RecipeIngredient(primaryCategories[Category.MEAT], 1),
		[
			Logic.OR,
			new RecipeIngredient(primaryCategories[Category.PLANTS], 1),
			new RecipeIngredient(primaryCategories[Category.VEGETABLES], 1),
		]
	]),
	new Recipe("Creamy Seafood Soup", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.FRESH_MILK], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.ROCK_SALT], 1),
		new RecipeIngredient(primaryCategories[Category.SEAFOOD], 1),
		new RecipeIngredient(primaryCategories[Category.PLANTS], 1),
	]),
	new Recipe("Curry Pilaf", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.HYLIAN_RICE], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.BIRD_EGG], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.GOAT_BUTTER], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.GORON_SPICE], 1),
	]),
	new Recipe("Curry Rice", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.HYLIAN_RICE], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.GORON_SPICE], 1),
	]),
	// new Recipe("Dubious Food", [
	//
	// ]),
	new Recipe("Egg Pudding", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.FRESH_MILK], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.BIRD_EGG], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.CANE_SUGAR], 1),
	]),
	new Recipe("Egg Tart", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.TABANTHA_WHEAT], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.BIRD_EGG], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.CANE_SUGAR], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.GOAT_BUTTER], 1),
	]),
	new Recipe("Energizing Glazed Meat", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.COURSER_BEE_HONEY], 1),
		new RecipeIngredient(primaryCategories[Category.MEAT], 1),
	]),
	new Recipe("Energizing Honey Candy", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.COURSER_BEE_HONEY], 1),
	]),
	new Recipe("Energizing Honeyed Apple", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.COURSER_BEE_HONEY], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.APPLE], 1),
	]),
	// todo: Need to classify fish specifically for this, test with game if snail works
	new Recipe("Fish Skewer", [
		Logic.AND,
		new RecipeIngredient(subCategories[Category.FISH_AND_SNALES], 1),
	]),
	// todo: We'll want the UNIQUE operator here: "Any 4 different seafood"
	new Recipe("Copious Fish Skewers", [
		Logic.AND,
		new RecipeIngredient(primaryCategories[Category.SEAFOOD], 4),
	]),
	new Recipe("Fish and Mushroom Skewer", [
		Logic.AND,
		new RecipeIngredient(primaryCategories[Category.SEAFOOD], 1),
		new RecipeIngredient(primaryCategories[Category.SHROOMS], 4),
	]),
	new Recipe("Fish Pie", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.TABANTHA_WHEAT], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.GOAT_BUTTER], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.ROCK_SALT], 1),
		new RecipeIngredient(primaryCategories[Category.SEAFOOD], 1),
	]),
	new Recipe("Fragrant Mushroom Sauté", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.GORON_SPICE], 1),
		new RecipeIngredient(primaryCategories[Category.SHROOMS], 1),
	]),
	new Recipe("Fried Bananas", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.MIGHTY_BANANAS], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.TABANTHA_WHEAT], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.CANE_SUGAR], 1),
	]),
	new Recipe("Fried Egg and Rice", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.HYLIAN_RICE], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.BIRD_EGG], 1),
	]),
	// todo: Test this in game, it's a bit weirdly worded: Any Vegetable, Herb, or Flower
	new Recipe("Fried Wild Greens", [
		Logic.OR,
		new RecipeIngredient(primaryCategories[Category.PLANTS], 1),
		new RecipeIngredient(primaryCategories[Category.VEGETABLES], 1),
	]),
	// todo: Similar to "Copious Fish Skewers"; Any 4 different Vegetables, Herbs, or Flowers
	new Recipe("Copious Fried Wild Greens", [
		Logic.OR,
		new RecipeIngredient(primaryCategories[Category.PLANTS], 1),
		new RecipeIngredient(primaryCategories[Category.VEGETABLES], 1),
	]),
	new Recipe("Fruit and Mushroom Mix", [
		Logic.AND,
		new RecipeIngredient(primaryCategories[Category.FRUIT], 1),
		new RecipeIngredient(primaryCategories[Category.SHROOMS], 1),
	]),
	new Recipe("Fruit Pie", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.TABANTHA_WHEAT], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.CANE_SUGAR], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.GOAT_BUTTER], 1),
		[
			Logic.OR,
			// todo: Every fruit except Apple; so we need to fix that too :X
			new RecipeIngredient(materialLookupTable[MaterialType.FLEET_LOTUS_SEEDS], 1),
			new RecipeIngredient(materialLookupTable[MaterialType.HEARTY_DURIAN], 1),
			new RecipeIngredient(materialLookupTable[MaterialType.HYDROMELON], 1),
			new RecipeIngredient(materialLookupTable[MaterialType.MIGHTY_BANANAS], 1),
			new RecipeIngredient(materialLookupTable[MaterialType.PALM_FRUIT], 1),
			new RecipeIngredient(materialLookupTable[MaterialType.SPICY_PEPPER], 1),
			new RecipeIngredient(materialLookupTable[MaterialType.VOLTFRUIT], 1),
			new RecipeIngredient(materialLookupTable[MaterialType.WILDBERRY], 1),
		]
	]),
	new Recipe("Fruitcake", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.TABANTHA_WHEAT], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.CANE_SUGAR], 1),
		new RecipeIngredient(primaryCategories[Category.FRUIT], 1),
		[
			Logic.OR,
			new RecipeIngredient(materialLookupTable[MaterialType.APPLE], 1),
			new RecipeIngredient(materialLookupTable[MaterialType.WILDBERRY], 1),
		]
	]),
	new Recipe("Glazed Mushrooms", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.COURSER_BEE_HONEY], 1),
		new RecipeIngredient(primaryCategories[Category.SHROOMS], 1),
	]),
	new Recipe("Glazed Seafood", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.COURSER_BEE_HONEY], 1),
		new RecipeIngredient(primaryCategories[Category.SEAFOOD], 1),
	]),
	new Recipe("Glazed Veggies", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.COURSER_BEE_HONEY], 1),
		[
			Logic.OR,
			new RecipeIngredient(primaryCategories[Category.VEGETABLES], 1),
			new RecipeIngredient(primaryCategories[Category.PLANTS], 1),
		]
	]),
	new Recipe("Gourmet Meat and Rice Bowl", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.ROCK_SALT], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.HYLIAN_RICE], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.RAW_GOURMET_MEAT], 1),
	]),
	// todo: Test this in game, "Any gourmet meat", but there's only 1?? Does it mean any red meat?
	new Recipe("Gourmet Meat and Seafood Fry", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.RAW_GOURMET_MEAT], 1),
		new RecipeIngredient(primaryCategories[Category.SEAFOOD], 1)
	]),
	// todo: Test this in game, "Any gourmet meat", but there's only 1?? Does it mean any red meat?
	new Recipe("Gourmet Meat Curry", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.RAW_GOURMET_MEAT], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.GORON_SPICE], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.HYLIAN_RICE], 1),
	]),
	// todo: Test this in game, "Any gourmet meat", but there's only 1?? Does it mean any red meat?
	new Recipe("Gourmet Meat Stew", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.RAW_GOURMET_MEAT], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.TABANTHA_WHEAT], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.FRESH_MILK], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.GOAT_BUTTER], 1),
	]),
	new Recipe("Gourmet Poultry Curry", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.RAW_WHOLE_BIRD], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.HYLIAN_RICE], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.GORON_SPICE], 1),
	]),
	new Recipe("Gourmet Poultry Pilaf", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.RAW_WHOLE_BIRD], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.HYLIAN_RICE], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.GOAT_BUTTER], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.BIRD_EGG], 1),
	]),
	new Recipe("Gourmet Spiced Meat Skewer", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.RAW_GOURMET_MEAT], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.GORON_SPICE], 1),
	]),
	new Recipe("Hearty Clam Chowder", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.FRESH_MILK], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.TABANTHA_WHEAT], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.GOAT_BUTTER], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.HEARTY_BLUESHELL_SNAIL], 1),
	]),
	new Recipe("Hearty Salmon Muenière", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.TABANTHA_WHEAT], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.GOAT_BUTTER], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.HEARTY_SALMON], 1),
	]),
	new Recipe("Herb Sauté", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.GORON_SPICE], 1),
		[
			Logic.OR,
			new RecipeIngredient(primaryCategories[Category.VEGETABLES], 1),
			new RecipeIngredient(primaryCategories[Category.PLANTS], 1),
		]
	]),
	new Recipe("Honey Crepe", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.COURSER_BEE_HONEY], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.CANE_SUGAR], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.TABANTHA_WHEAT], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.BIRD_EGG], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.FRESH_MILK], 1),
	]),
	new Recipe("Honeyed Fruits", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.COURSER_BEE_HONEY], 1),
		[
			Logic.OR,
			// todo: Every fruit except Apple; so we need to fix that too :X
			new RecipeIngredient(materialLookupTable[MaterialType.FLEET_LOTUS_SEEDS], 1),
			new RecipeIngredient(materialLookupTable[MaterialType.HEARTY_DURIAN], 1),
			new RecipeIngredient(materialLookupTable[MaterialType.HYDROMELON], 1),
			new RecipeIngredient(materialLookupTable[MaterialType.MIGHTY_BANANAS], 1),
			new RecipeIngredient(materialLookupTable[MaterialType.PALM_FRUIT], 1),
			new RecipeIngredient(materialLookupTable[MaterialType.SPICY_PEPPER], 1),
			new RecipeIngredient(materialLookupTable[MaterialType.VOLTFRUIT], 1),
			new RecipeIngredient(materialLookupTable[MaterialType.WILDBERRY], 1),
		]
	]),
	new Recipe("Hot Buttered Apple", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.APPLE], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.GOAT_BUTTER], 1),
	]),
	new Recipe("Meat and Mushroom Skewer", [
		Logic.AND,
		new RecipeIngredient(primaryCategories[Category.MEAT], 1),
		new RecipeIngredient(primaryCategories[Category.SHROOMS], 1),
	]),
	new Recipe("Meat and Rice Bowl", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.HYLIAN_RICE], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.ROCK_SALT], 1),
		new RecipeIngredient(primaryCategories[Category.MEAT], 1),
	]),
	new Recipe("Meat and Seafood Fry", [
		Logic.AND,
		new RecipeIngredient(primaryCategories[Category.SEAFOOD], 1),
		new RecipeIngredient(primaryCategories[Category.MEAT], 1),
	]),
	new Recipe("Meat Curry", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.RAW_MEAT], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.GORON_SPICE], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.HYLIAN_RICE], 1),
	]),
	new Recipe("Meat Pie", [
		Logic.AND,
		new RecipeIngredient(primaryCategories[Category.MEAT], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.TABANTHA_WHEAT], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.GOAT_BUTTER], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.ROCK_SALT], 1),
	]),
	// todo: Any 3 or less logic needs implemented
	new Recipe("Meat Skewer", [
		Logic.AND,
		new RecipeIngredient(primaryCategories[Category.MEAT], 3),
	]),
	// todo: Any 4 meats needs to be implemented
	new Recipe("Copious Meat Skewers", [
		Logic.AND,
		new RecipeIngredient(primaryCategories[Category.MEAT], 4),
	]),
	new Recipe("Meat Stew", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.TABANTHA_WHEAT], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.GOAT_BUTTER], 1),
		new RecipeIngredient(materialLookupTable[MaterialType.FRESH_MILK], 1),
		[
			Logic.OR,
			new RecipeIngredient(materialLookupTable[MaterialType.RAW_MEAT], 1),
			new RecipeIngredient(materialLookupTable[MaterialType.RAW_BIRD_DRUMSTICK], 1),
		]
	]),
	new Recipe("Meaty Rice Balls", [
		Logic.AND,
		new RecipeIngredient(materialLookupTable[MaterialType.HYLIAN_RICE], 1),
		new RecipeIngredient(primaryCategories[Category.MEAT], 1)
	]),
	// new Recipe("Monster Cake", [
	// 	// "Tabantha Wheat
	// 	// Cane Sugar
	// 	// Goat Butter
	// 	// Monster Extract"
	// ]),
	// new Recipe("Monster Curry", [
	// 	// "Hylian Rice
	// 	// Goron Spice
	// 	// Monster Extract"
	// ]),
	// new Recipe("Monster Rice Balls", [
	// 	// "Hylian Rice
	// 	// Rock Salt
	// 	// Monster Extract"
	// ]),
	// new Recipe("Monster Soup", [
	// 	// "Monster Extract
	// 	// Tabantha Wheat
	// 	// Fresh Milk
	// 	// Goat Butter"
	// ]),
	// new Recipe("Monster Stew", [
	// 	// "Any Meat
	// 	// Any Seafood
	// 	// Monster Extract"
	// ]),
	// new Recipe("Mushroom Omelet", [
	// 	// "Any Mushroom
	// 	// Bird Egg
	// 	// Goat Butter
	// 	// Rock Salt"
	// ]),
	// new Recipe("Mushroom Rice Balls", [
	// 	// "Hylian Rice
	// 	// Any Mushroom"
	// ]),
	// new Recipe("Mushroom Risotto", [
	// 	// "Hylian Rice
	// 	// Goat Butter
	// 	// Rock Salt
	// 	// Any Mushroom"
	// ]),
	// new Recipe("Mushroom Skewer", [
	// 	// Any Mushroom
	// ]),
	// new Recipe("Copious Mushrooms Skewers", [
	// 	// Any 4 different Mushrooms
	// ]),
	// new Recipe("Nutcake", [
	// 	// "Any Nut
	// 	// Tabantha Wheat
	// 	// Cane Sugar
	// 	// Goat Butter"
	// ]),
	// new Recipe("Omelet", [
	// 	// Bird Egg
	// ]),
	// new Recipe("Pepper Seafood", [
	// 	// "Spicy Pepper
	// 	// Any Seafood"
	// ]),
	// new Recipe("Plain Crepe", [
	// 	// "Fresh Milk
	// 	// Cane Sugar
	// 	// Tabantha Wheat
	// 	// Bird Egg
	// 	// Goat Butter"
	// ]),
	// new Recipe("Porgy Meunière", [
	// 	// "Any Porgy
	// 	// Goat Butter
	// 	// Tabantha Wheat"
	// ]),
	// new Recipe("Poultry Curry", [
	// 	// "Raw Bird Drumstick
	// 	// Hylian Rice
	// 	// Goron Spice"
	// ]),
	// new Recipe("Poultry Pilaf", [
	// 	// "Raw Bird Drumstick
	// 	// Hylian Rice
	// 	// Bird Egg
	// 	// Goat Butter"
	// ]),
	// new Recipe("Prime Meat and Rice Bowl", [
	// 	// "Raw Prime Meat
	// 	// Hylian Rice
	// 	// Rock Salt"
	// ]),
	// new Recipe("Prime Meat and Seafood Fry", [
	// 	// "Any Prime Meat
	// 	// Any Seafood"
	// ]),
	// new Recipe("Prime Meat Curry", [
	// 	// "Raw Prime Meat
	// 	// Hylian Rice
	// 	// Goron Spice"
	// ]),
	// new Recipe("Prime Meat Stew", [
	// 	// "Any Prime Meat
	// 	// Tabantha Wheat
	// 	// Goat Butter
	// 	// Fresh Milk"
	// ]),
	// new Recipe("Prime Poultry Curry", [
	// 	// "Raw Bird Thigh
	// 	// Goron Spice
	// 	// Hylian Rice"
	// ]),
	// new Recipe("Prime Poultry Pilaf", [
	// 	// "Raw Bird Thigh
	// 	// Hylian Rice
	// 	// Bird Egg
	// 	// Goat Butter"
	// ]),
	// new Recipe("Prime Spiced Meat Skewer", [
	// 	// "Raw Prime Meat
	// 	// Goron Spice"
	// ]),
	// new Recipe("Pumpkin Pie", [
	// 	// "Fortified Pumpkin
	// 	// Tabantha Wheat
	// 	// Cane Sugar
	// 	// Goat Butter"
	// ]),
	// new Recipe("Pumpkin Stew", [
	// 	// "Fortified Pumpkin
	// 	// Tabantha Wheat
	// 	// Goat Butter
	// 	// Fresh Milk"
	// ]),
	// new Recipe("Rock-Hard Food", [
	// 	// Wood or ore
	// ]),
	// new Recipe("Salmon Risotto", [
	// 	// "Hearty Salmon
	// 	// Hylian Rice
	// 	// Goat Butter
	// 	// Rock Salt"
	// ]),
	// new Recipe("Salt-Grilled Crab", [
	// 	// "Rock Salt
	// 	// Any Crab"
	// ]),
	// new Recipe("Salt-Grilled Fish", [
	// 	// "Rock Salt
	// 	// Any Fish or Snail"
	// ]),
	// new Recipe("Salt-Grilled Gourmet Meat", [
	// 	// "Rock Salt
	// 	// Any Gourmet Meat"
	// ]),
	// new Recipe("Salt-Grilled Greens", [
	// 	// "Rock Salt
	// 	// Any Vegetable, Herb, or Flower"
	// ]),
	// new Recipe("Salt-Grilled Meat", [
	// 	// "Rock Salt
	// 	// Raw Meat or Raw Bird Drumstick"
	// ]),
	// new Recipe("Salt-Grilled Mushrooms", [
	// 	// "Any Mushroom
	// 	// Rock Salt"
	// ]),
	// new Recipe("Salt-Grilled Prime Meat", [
	// 	// "Any Prime Meat
	// 	// Rock Salt"
	// ]),
	// new Recipe("Sautéed Nuts", [
	// 	// "Acorn
	// 	// or
	// 	// Chickaloo Tree Nut"
	// ]),
	// new Recipe("Seafood Curry", [
	// 	// "Goron Spice
	// 	// Hylian Rice
	// 	// Hearty Blueshell Snail or Any Porgy"
	// ]),
	// new Recipe("Seafood Fried Rice", [
	// 	// "Hylian Rice
	// 	// Rock Salt
	// 	// Hearty Blueshell Snail or Any Porgy"
	// ]),
	// new Recipe("Seafood Meunière", [
	// 	// "Any Seafood (except Porgy or Salmon)
	// 	// Tabantha Wheat
	// 	// Goat Butter"
	// ]),
	// new Recipe("Seafood Paella", [
	// 	// "Hearty Blueshell Snail
	// 	// Any Porgy
	// 	// Hylian Rice
	// 	// Goat Butter
	// 	// Rock Salt"
	// ]),
	// new Recipe("Seafood Rice Balls", [
	// 	// "Hylian Rice
	// 	// Any Seafood"
	// ]),
	// new Recipe("Seafood Skewer", [
	// 	// Any Crab or Snail
	// ]),
	// new Recipe("Simmered Fruit", [
	// 	// Any Fruit
	// ]),
	// new Recipe("Copious Simmered Fruit", [
	// 	// Any 4 different Fruit
	// ]),
	// new Recipe("Spiced Meat Skewer", [
	// 	// "Goron Spice
	// 	// Raw Meat"
	// ]),
	// new Recipe("Spicy Pepper Steak", [
	// 	// "Spicy Pepper
	// 	// Any Meat"
	// ]),
	// new Recipe("Spicy Sautéed Peppers", [
	// 	// Spicy Pepper
	// ]),
	// new Recipe("Steamed Fish", [
	// 	// "Any Vegetable, Herb, or Flower
	// 	// Any Seafood"
	// ]),
	// new Recipe("Steamed Fruit", [
	// 	// "Any Fruit
	// 	// Any Vegetable, Herb, or Flower"
	// ]),
	// new Recipe("Steamed Meat", [
	// 	// "Any Meat
	// 	// Any Vegetable, Herb, or Flower (except Pumpkin)"
	// ]),
	// new Recipe("Steamed Mushroom", [
	// 	// "Any Mushroom
	// 	// Any Vegetable, Herb, or Flower"
	// ]),
	// new Recipe("Tough Meat-Stuffed Pumpkin", [
	// 	// "Fortified Pumpkin
	// 	// Any Meat"
	// ]),
	// new Recipe("Vegetable Curry", [
	// 	// "Any Carrot or Pumpkin
	// 	// Hylian Rice
	// 	// Goron Spice"
	// ]),
	// new Recipe("Vegetable Omelet", [
	// 	// "Any Vegetable, Herb, or Flower
	// 	// Bird Egg
	// 	// Goat Butter
	// 	// Rock Salt"
	// ]),
	// new Recipe("Vegetable Risotto", [
	// 	// "Any Carrot or Pumpkin
	// 	// Hylian Rice
	// 	// Goat Butter
	// 	// Rock Salt"
	// ]),
	// new Recipe("Veggie Cream Soup", [
	// 	// "Any Carrot or Pumpkin
	// 	// Fresh Milk
	// 	// Rock Salt"
	// ]),
	// new Recipe("Veggie Rice Balls", [
	// 	// "Any Vegetable, Herb, or Flower
	// 	// Hylian Rice"
	// ]),
	// new Recipe("Warm Milk", [
	// 	// Fresh Milk
	// ]),
	// new Recipe("Wheat Bread", [
	// 	// "Tabantha Wheat
	// 	// Rock Salt"
	// ]),
	// new Recipe("Wildberry Crepe", [
	// 	// "Wildberry
	// 	// Fresh Milk
	// 	// Cane Sugar
	// 	// Tabantha Wheat
	// 	// Bird Egg"
	// ]),
];

const allRecipes: Recipe[] = [
	...bakedRecipes
];

export { bakedRecipes, allRecipes };
