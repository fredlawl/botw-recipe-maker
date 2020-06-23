import React from "react";
import "./RecipeLocator.scss";
import Inventory from "../inventory/Inventory";

interface RecipeLocatorProps {
	inventory: Inventory
}

const RecipeLocator = (props: RecipeLocatorProps) => {
	return (
		<div className={"recipe-locator"}>
			<div className={"container"}>
				<aside className={"options"}>
					<h1>Filters</h1>
					{/*<div className={"fieldgroup"}>*/}
					{/*	<span className={"fieldgroup-header"}>Recovery Hearts:</span>*/}
					{/*	<div className={"field"}>*/}
					{/*		<label>*/}
					{/*			<input type={"checkbox"} name={"health"} value={"-1"} defaultChecked={true}/>*/}
					{/*			Any*/}
					{/*		</label>*/}
					{/*	</div>*/}
					{/*	<div className={"field"}>*/}
					{/*		<label>*/}
					{/*			<input type={"range"} name={"health"} max={"20"} min={"0"} step={"1"}*/}
					{/*				   list={"ice-cream-flavors"}/>*/}
					{/*			<datalist id="ice-cream-flavors">*/}
					{/*				<option value="0"/>*/}
					{/*				<option value="5"/>*/}
					{/*				<option value="10"/>*/}
					{/*				<option value="15"/>*/}
					{/*				<option value="20"/>*/}
					{/*			</datalist>*/}
					{/*		</label>*/}
					{/*	</div>*/}
					{/*</div>*/}
					<div className={"fieldgroup"}>
						<span className={"fieldgroup-header"}>Boost:</span>
						<div className={"field"}>
							<label>
								<input type={"checkbox"} name={"boost[hearts]"}/>
								Hearts
							</label>
						</div>
						<div className={"field"}>
							<label>
								<input type={"checkbox"} name={"boost[stamina]"}/>
								Stamina
							</label>
						</div>
						<div className={"field"}>
							<label>
								<input type={"checkbox"} name={"boost[defense]"}/>
								Defense
							</label>
						</div>
						<div className={"field"}>
							<label>
								<input type={"checkbox"} name={"boost[speed]"}/>
								Speed
							</label>
						</div>
						<div className={"field"}>
							<label>
								<input type={"checkbox"} name={"boost[stealth]"}/>
								Stealth
							</label>
						</div>
					</div>
					<div className={"fieldgroup"}>
						<span className={"fieldgroup-header"}>Immunity:</span>
						<div className={"field"}>
							<label>
								<input type={"checkbox"} name={"immunity[ice]"}/>
								Ice
							</label>
						</div>
						<div className={"field"}>
							<label>
								<input type={"checkbox"} name={"immunity[fire]"}/>
								Fire
							</label>
						</div>
						<div className={"field"}>
							<label>
								<input type={"checkbox"} name={"immunity[electric]"}/>
								Electric
							</label>
						</div>
					</div>

				</aside>
				<section className={"results"}>
					<h1>Craftable Recipes</h1>
					<div className={"sort-options"}>
						<span>Sort By:</span>
						<button title={"Sort by Hearts DESC"}>Hearts (ASC)</button>
						<button title={"Sort by Duration ASC"}>Duration (DESC)</button>
					</div>
				</section>
			</div>
		</div>
	);
};

export default RecipeLocator;
