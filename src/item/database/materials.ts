import {ImmunityBuffType} from "../ImmunityBuff";
import {Material} from "../Material";
import {Category, primaryCategories, subCategories} from "./itemCategories";

export enum MaterialType {
	ACORN,
	APPLE,
	ARMORANTH,
	ARMORED_CARP,
	ARMORED_PORGY,
	BIG_HEARTY_RADISH,
	BIG_HEARTY_TRUFFLE,
	BIRD_EGG,
	BLADED_RHINO_BEETLE,
	BLUE_NIGHTSHADE,
	BRIGHT_EYED_CRAB,
	CANE_SUGAR,
	CHICKALOO_TREE_NUT,
	CHILLFIN_TROUT,
	CHILLSHROOM,
	COLD_DARNER,
	COOL_SAFFLINA,
	COURSER_BEE_HONEY,
	ELECTRIC_DARNER,
	ELECTRIC_SAFFLINA,
	ENDURA_CARROT,
	ENDURA_SHROOM,
	ENERGETIC_RHINO_BEETLE,
	FAIRY,
	FIREPROOF_LIZARD,
	FLEET_LOTUS_SEEDS,
	FORTIFIED_PUMPKIN,
	FRESH_MILK,
	GOAT_BUTTER,
	GORON_SPICE,
	HEARTY_BASS,
	HEARTY_BLUESHELL_SNAIL,
	HEARTY_DURIAN,
	HEARTY_LIZARD,
	HEARTY_RADISH,
	HEARTY_SALMON,
	HEARTY_TRUFFLE,
	HIGHTAIL_LIZARD,
	HOT_FOOTED_FROG,
	HYDROMELON,
	HYLIAN_RICE,
	HYLIAN_SHROOM,
	HYRULE_BASS,
	HYRULE_HERB,
	IRONSHELL_CRAB,
	IRONSHROOM,
	MIGHTY_BANANAS,
	MIGHTY_CARP,
	MIGHTY_PORGY,
	MIGHTY_THISTLE,
	MONSTER_EXTRACT,
	PALM_FRUIT,
	RAW_BIRD_THIGH,
	RAW_BIRD_DRUMSTICK,
	RAW_MEAT,
	RAW_PRIME_MEAT,
	RAW_GOURMET_MEAT,
	RAW_WHOLE_BIRD,
	RAZORCLAW_CRAB,
	RAZORSHROOM,
	ROCK_SALT,
	RESTLESS_CRICKET,
	RUGGED_RHINO_BEETLE,
	RUSHROOM,
	SANKE_CARP,
	SILENT_PRINCESS,
	SILENT_SHROOM,
	SIZZLEFIN_TROUT,
	SMOTHERWING_BUTTERFLY,
	SNEAKY_RIVER_SNAIL,
	SPICY_PEPPER,
	STAMELLA_SHROOM,
	STAMINOKA_BASS,
	STEALTHFIN_TROUT,
	SUMMERWING_BUTTERFLY,
	SUNSET_FIREFLY,
	SUNSHROOM,
	SWIFT_CARROT,
	SWIFT_VIOLET,
	TABANTHA_WHEAT,
	THUNDERWING_BUTTERFLY,
	TIRELESS_FROG,
	VOLTFIN_TROUT,
	VOLTFRUIT,
	WARM_DARNER,
	WARM_SAFFLINA,
	WILDBERRY,
	WINTERWING_BUTTERFLY,
	ZAPSHROOM,
}

export const materialTypeLookupTable: any = {
	[MaterialType.ACORN]: new Material("Acorn", [ primaryCategories[Category.MISC] ], [], ImmunityBuffType.NONE),
	[MaterialType.APPLE]: new Material("Apple", [ primaryCategories[Category.FRUIT] ], [], ImmunityBuffType.NONE),
	[MaterialType.ARMORANTH]: new Material("Armoranth", [ primaryCategories[Category.PLANTS] ], [], ImmunityBuffType.NONE),
	[MaterialType.ARMORED_CARP]: new Material("Armored Carp", [
		primaryCategories[Category.SEAFOOD],
		subCategories[Category.FISH_AND_SNALES]
	], [], ImmunityBuffType.NONE),
	[MaterialType.ARMORED_PORGY]: new Material("Armored Porgy", [
		primaryCategories[Category.SEAFOOD],
		subCategories[Category.FISH_AND_SNALES]
	], [], ImmunityBuffType.NONE),
	[MaterialType.BIG_HEARTY_RADISH]: new Material("Big Hearty Radish", [ primaryCategories[Category.VEGETABLES] ], [], ImmunityBuffType.NONE),
	[MaterialType.BIG_HEARTY_TRUFFLE]: new Material("Big Hearty Truffle", [ primaryCategories[Category.SHROOMS] ], [], ImmunityBuffType.NONE),
	[MaterialType.BIRD_EGG]: new Material("Bird Egg", [ primaryCategories[Category.MISC] ], [], ImmunityBuffType.NONE),
	[MaterialType.BLADED_RHINO_BEETLE]: new Material("Bladed Rhino Beetle", [ primaryCategories[Category.CRITTERS] ], [], ImmunityBuffType.NONE),
	[MaterialType.BLUE_NIGHTSHADE]: new Material("Blue Nightshade", [ primaryCategories[Category.PLANTS] ], [], ImmunityBuffType.NONE),
	[MaterialType.BRIGHT_EYED_CRAB]: new Material("Bright-Eyed Crab", [
		primaryCategories[Category.SEAFOOD],
		subCategories[Category.CRAB]
	], [], ImmunityBuffType.NONE),
	[MaterialType.CANE_SUGAR]: new Material("Cane Sugar", [ primaryCategories[Category.MISC] ], [], ImmunityBuffType.NONE),
	[MaterialType.CHICKALOO_TREE_NUT]: new Material("Chickaloo Tree Nut", [ primaryCategories[Category.MISC] ], [], ImmunityBuffType.NONE),
	[MaterialType.CHILLFIN_TROUT]: new Material("Chillfin Trout", [
		primaryCategories[Category.SEAFOOD],
		subCategories[Category.FISH_AND_SNALES]
	], [], ImmunityBuffType.NONE),
	[MaterialType.CHILLSHROOM]: new Material("Chillshroom", [ primaryCategories[Category.SHROOMS] ], [], ImmunityBuffType.NONE),
	[MaterialType.COLD_DARNER]: new Material("Cold Darner", [ primaryCategories[Category.CRITTERS] ], [], ImmunityBuffType.NONE),
	[MaterialType.COOL_SAFFLINA]: new Material("Cool Safflina", [ primaryCategories[Category.PLANTS] ], [], ImmunityBuffType.NONE),
	[MaterialType.COURSER_BEE_HONEY]: new Material("Courser Bee Honey", [ primaryCategories[Category.MISC] ], [], ImmunityBuffType.NONE),
	[MaterialType.ELECTRIC_DARNER]: new Material("Electric Darner", [ primaryCategories[Category.CRITTERS] ], [], ImmunityBuffType.NONE),
	[MaterialType.ELECTRIC_SAFFLINA]: new Material("Electric Safflina", [ primaryCategories[Category.PLANTS] ], [], ImmunityBuffType.NONE),
	[MaterialType.ENDURA_CARROT]: new Material("Endura Carrot", [ primaryCategories[Category.VEGETABLES] ], [], ImmunityBuffType.NONE),
	[MaterialType.ENDURA_SHROOM]: new Material("Endura Shroom", [ primaryCategories[Category.SHROOMS] ], [], ImmunityBuffType.NONE),
	[MaterialType.ENERGETIC_RHINO_BEETLE]: new Material("Energetic Rhino Beetle", [ primaryCategories[Category.CRITTERS] ], [], ImmunityBuffType.NONE),
	[MaterialType.FAIRY]: new Material("Fairy", [ primaryCategories[Category.CRITTERS] ], [], ImmunityBuffType.NONE),
	[MaterialType.FIREPROOF_LIZARD]: new Material("Fireproof Lizard", [ primaryCategories[Category.CRITTERS] ], [], ImmunityBuffType.NONE),
	[MaterialType.FLEET_LOTUS_SEEDS]: new Material("Fleet-Lotus Seeds", [ primaryCategories[Category.FRUIT] ], [], ImmunityBuffType.NONE),
	[MaterialType.FORTIFIED_PUMPKIN]: new Material("Fortified Pumpkin", [ primaryCategories[Category.VEGETABLES] ], [], ImmunityBuffType.NONE),
	[MaterialType.FRESH_MILK]: new Material("Fresh Milk", [ primaryCategories[Category.MISC] ], [], ImmunityBuffType.NONE),
	[MaterialType.GOAT_BUTTER]: new Material("Goat Butter", [ primaryCategories[Category.MISC] ], [], ImmunityBuffType.NONE),
	[MaterialType.GORON_SPICE]: new Material("Goron Spice", [ primaryCategories[Category.MISC] ], [], ImmunityBuffType.NONE),
	[MaterialType.HEARTY_BASS]: new Material("Hearty Bass", [
		primaryCategories[Category.SEAFOOD],
		subCategories[Category.FISH_AND_SNALES]
	], [], ImmunityBuffType.NONE),
	[MaterialType.HEARTY_BLUESHELL_SNAIL]: new Material("Hearty Blueshell Snail", [
		primaryCategories[Category.SEAFOOD],
		subCategories[Category.FISH_AND_SNALES]
	], [], ImmunityBuffType.NONE),
	[MaterialType.HEARTY_DURIAN]: new Material("Hearty Durian", [ primaryCategories[Category.FRUIT] ], [], ImmunityBuffType.NONE),
	[MaterialType.HEARTY_LIZARD]: new Material("Hearty Lizard", [ primaryCategories[Category.CRITTERS] ], [], ImmunityBuffType.NONE),
	[MaterialType.HEARTY_RADISH]: new Material("Hearty Radish", [ primaryCategories[Category.VEGETABLES] ], [], ImmunityBuffType.NONE),
	[MaterialType.HEARTY_SALMON]: new Material("Hearty Salmon", [
		primaryCategories[Category.SEAFOOD],
		subCategories[Category.FISH_AND_SNALES]
	], [], ImmunityBuffType.NONE),
	[MaterialType.HEARTY_TRUFFLE]: new Material("Hearty Truffle", [ primaryCategories[Category.SHROOMS] ], [], ImmunityBuffType.NONE),
	[MaterialType.HIGHTAIL_LIZARD]: new Material("Hightail Lizard", [ primaryCategories[Category.CRITTERS] ], [], ImmunityBuffType.NONE),
	[MaterialType.HOT_FOOTED_FROG]: new Material("Hot-Footed Frog", [ primaryCategories[Category.CRITTERS] ], [], ImmunityBuffType.NONE),
	[MaterialType.HYDROMELON]: new Material("Hydromelon", [ primaryCategories[Category.FRUIT] ], [], ImmunityBuffType.NONE),
	[MaterialType.HYLIAN_RICE]: new Material("Hylian Rice", [ primaryCategories[Category.MISC] ], [], ImmunityBuffType.NONE),
	[MaterialType.HYLIAN_SHROOM]: new Material("Hylian Shroom", [ primaryCategories[Category.SHROOMS] ], [], ImmunityBuffType.NONE),
	[MaterialType.HYRULE_BASS]: new Material("Hyrule Bass", [
		primaryCategories[Category.SEAFOOD],
		subCategories[Category.FISH_AND_SNALES]
	], [], ImmunityBuffType.NONE),
	[MaterialType.HYRULE_HERB]: new Material("Hyrule Herb", [ primaryCategories[Category.PLANTS] ], [], ImmunityBuffType.NONE),
	[MaterialType.IRONSHELL_CRAB]: new Material("Ironshell Crab", [
		primaryCategories[Category.SEAFOOD],
		subCategories[Category.CRAB]
	], [], ImmunityBuffType.NONE),
	[MaterialType.IRONSHROOM]: new Material("Ironshroom", [ primaryCategories[Category.SHROOMS] ], [], ImmunityBuffType.NONE),
	[MaterialType.MIGHTY_BANANAS]: new Material("Mighty Bananas", [ primaryCategories[Category.FRUIT] ], [], ImmunityBuffType.NONE),
	[MaterialType.MIGHTY_CARP]: new Material("Mighty Carp", [
		primaryCategories[Category.SEAFOOD],
		subCategories[Category.FISH_AND_SNALES]
	], [], ImmunityBuffType.NONE),
	[MaterialType.MIGHTY_PORGY]: new Material("Mighty Porgy", [
		primaryCategories[Category.SEAFOOD],
		subCategories[Category.FISH_AND_SNALES]
	], [], ImmunityBuffType.NONE),
	[MaterialType.MIGHTY_THISTLE]: new Material("Mighty Thistle", [ primaryCategories[Category.PLANTS] ], [], ImmunityBuffType.NONE),
	[MaterialType.MONSTER_EXTRACT]: new Material("Monster Extract", [ primaryCategories[Category.MISC] ], [], ImmunityBuffType.NONE),
	[MaterialType.PALM_FRUIT]: new Material("Palm Fruit", [ primaryCategories[Category.FRUIT] ], [], ImmunityBuffType.NONE),
	[MaterialType.RAW_BIRD_THIGH]: new Material("Raw Bird Thigh", [
		primaryCategories[Category.MEAT],
		subCategories[Category.POULTRY]
	], [], ImmunityBuffType.NONE),
	[MaterialType.RAW_BIRD_DRUMSTICK]: new Material("Raw Bird Drumstick", [
		primaryCategories[Category.MEAT],
		subCategories[Category.POULTRY]
	], [], ImmunityBuffType.NONE),
	[MaterialType.RAW_MEAT]: new Material("Raw Meat", [
		primaryCategories[Category.MEAT],
		subCategories[Category.RED_MEAT]
	], [], ImmunityBuffType.NONE),
	[MaterialType.RAW_PRIME_MEAT]: new Material("Raw Prime Meat", [
		primaryCategories[Category.MEAT],
		subCategories[Category.RED_MEAT]
	], [], ImmunityBuffType.NONE),
	[MaterialType.RAW_GOURMET_MEAT]: new Material("Raw Gourmet Meat", [
		primaryCategories[Category.MEAT],
		subCategories[Category.RED_MEAT]
	], [], ImmunityBuffType.NONE),
	[MaterialType.RAW_WHOLE_BIRD]: new Material("Raw Whole Bird", [
		primaryCategories[Category.MEAT],
		subCategories[Category.POULTRY]
	], [], ImmunityBuffType.NONE),
	[MaterialType.RAZORCLAW_CRAB]: new Material("Razorclaw Crab", [
		primaryCategories[Category.SEAFOOD],
		subCategories[Category.CRAB]
	], [], ImmunityBuffType.NONE),
	[MaterialType.RAZORSHROOM]: new Material("Razorshroom", [ primaryCategories[Category.SHROOMS] ], [], ImmunityBuffType.NONE),
	[MaterialType.ROCK_SALT]: new Material("Rock Salt", [ primaryCategories[Category.MISC] ], [], ImmunityBuffType.NONE),
	[MaterialType.RESTLESS_CRICKET]: new Material("Restless Cricket", [ primaryCategories[Category.CRITTERS] ], [], ImmunityBuffType.NONE),
	[MaterialType.RUGGED_RHINO_BEETLE]: new Material("Rugged Rhino Beetle", [ primaryCategories[Category.CRITTERS] ], [], ImmunityBuffType.NONE),
	[MaterialType.RUSHROOM]: new Material("Rushroom", [ primaryCategories[Category.SHROOMS] ], [], ImmunityBuffType.NONE),
	[MaterialType.SANKE_CARP]: new Material("Sanke Carp", [
		primaryCategories[Category.SEAFOOD],
		subCategories[Category.FISH_AND_SNALES]
	], [], ImmunityBuffType.NONE),
	[MaterialType.SILENT_PRINCESS]: new Material("Silent Princess", [ primaryCategories[Category.PLANTS] ], [], ImmunityBuffType.NONE),
	[MaterialType.SILENT_SHROOM]: new Material("Silent Shroom", [ primaryCategories[Category.SHROOMS] ], [], ImmunityBuffType.NONE),
	[MaterialType.SIZZLEFIN_TROUT]: new Material("Sizzlefin Trout", [
		primaryCategories[Category.SEAFOOD],
		subCategories[Category.FISH_AND_SNALES]
	], [], ImmunityBuffType.NONE),
	[MaterialType.SMOTHERWING_BUTTERFLY]: new Material("Smotherwing Butterfly", [ primaryCategories[Category.CRITTERS] ], [], ImmunityBuffType.NONE),
	[MaterialType.SNEAKY_RIVER_SNAIL]: new Material("Sneaky River Snail", [
		primaryCategories[Category.SEAFOOD],
		subCategories[Category.FISH_AND_SNALES]
	], [], ImmunityBuffType.NONE),
	[MaterialType.SPICY_PEPPER]: new Material("Spicy Pepper", [ primaryCategories[Category.FRUIT] ], [], ImmunityBuffType.NONE),
	[MaterialType.STAMELLA_SHROOM]: new Material("Stamella Shroom", [ primaryCategories[Category.SHROOMS] ], [], ImmunityBuffType.NONE),
	[MaterialType.STAMINOKA_BASS]: new Material("Staminoka Bass", [
		primaryCategories[Category.SEAFOOD],
		subCategories[Category.FISH_AND_SNALES]
	], [], ImmunityBuffType.NONE),
	[MaterialType.STEALTHFIN_TROUT]: new Material("Stealthfin Trout", [
		primaryCategories[Category.SEAFOOD],
		subCategories[Category.FISH_AND_SNALES]
	], [], ImmunityBuffType.NONE),
	[MaterialType.SUMMERWING_BUTTERFLY]: new Material("Summerwing Butterfly", [ primaryCategories[Category.CRITTERS] ], [], ImmunityBuffType.NONE),
	[MaterialType.SUNSET_FIREFLY]: new Material("Sunset Firefly", [ primaryCategories[Category.CRITTERS] ], [], ImmunityBuffType.NONE),
	[MaterialType.SUNSHROOM]: new Material("Sunshroom", [ primaryCategories[Category.SHROOMS] ], [], ImmunityBuffType.NONE),
	[MaterialType.SWIFT_CARROT]: new Material("Swift Carrot", [ primaryCategories[Category.VEGETABLES] ], [], ImmunityBuffType.NONE),
	[MaterialType.SWIFT_VIOLET]: new Material("Swift Violet", [ primaryCategories[Category.PLANTS] ], [], ImmunityBuffType.NONE),
	[MaterialType.TABANTHA_WHEAT]: new Material("Tabantha Wheat", [ primaryCategories[Category.MISC] ], [], ImmunityBuffType.NONE),
	[MaterialType.THUNDERWING_BUTTERFLY]: new Material("Thunderwing Butterfly", [ primaryCategories[Category.CRITTERS] ], [], ImmunityBuffType.NONE),
	[MaterialType.TIRELESS_FROG]: new Material("Tireless Frog", [ primaryCategories[Category.CRITTERS] ], [], ImmunityBuffType.NONE),
	[MaterialType.VOLTFIN_TROUT]: new Material("Voltfin Trout", [
		primaryCategories[Category.SEAFOOD],
		subCategories[Category.FISH_AND_SNALES]
	], [], ImmunityBuffType.NONE),
	[MaterialType.VOLTFRUIT]: new Material("Voltfruit", [ primaryCategories[Category.FRUIT] ], [], ImmunityBuffType.NONE),
	[MaterialType.WARM_DARNER]: new Material("Warm Darner", [ primaryCategories[Category.CRITTERS] ], [], ImmunityBuffType.NONE),
	[MaterialType.WARM_SAFFLINA]: new Material("Warm Safflina", [ primaryCategories[Category.PLANTS] ], [], ImmunityBuffType.NONE),
	[MaterialType.WILDBERRY]: new Material("Wildberry", [ primaryCategories[Category.FRUIT] ], [], ImmunityBuffType.NONE),
	[MaterialType.WINTERWING_BUTTERFLY]: new Material("Winterwing Butterfly", [ primaryCategories[Category.CRITTERS] ], [], ImmunityBuffType.NONE),
	[MaterialType.ZAPSHROOM]: new Material("Zapshroom", [ primaryCategories[Category.SHROOMS] ], [], ImmunityBuffType.NONE),
};

export const allMaterials: Material[] = [
	...Object.values<Material>(materialTypeLookupTable)
];

export const materialIdToMaterialLookupTable = (() => {
	const returnObj: any = {};
	for (let i = 0; i < allMaterials.length; i++) {
		returnObj[allMaterials[i].id] = i;
	}

	return returnObj;
})();

export const categoryToMaterialsLookupTable = (() => {
	const returnObj: any = {};
	for (let i = 0; i < allMaterials.length; i++) {
		const categoryLineage = allMaterials[i].categoryIdentifiers;
		for (const categoryId of categoryLineage) {
			if (!returnObj[categoryId]) {
				returnObj[categoryId] = new Set();
			}

			returnObj[categoryId].add(i);
		}
	}

	return returnObj;
})();

export function getMaterialById(id: string): Material {
	return allMaterials[materialIdToMaterialLookupTable[id]];
}
