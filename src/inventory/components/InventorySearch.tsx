import React from "react";
import "../sass/InventorySearch.scss"

interface InventorySearchProps {
	placeholder?: string,
	onSearchQuery: (searchTerm: string) => void
}

const InventorySearch = React.forwardRef<HTMLInputElement, InventorySearchProps>((props: InventorySearchProps, ref) => {
	return (
		<div className={"inventory-search"}>
			<input
				ref={ref}
				type={"text"}
				placeholder={props.placeholder || "Search inventory"}
				onChange={e => props.onSearchQuery(e.target.value)} />
		</div>
	);
});

export default InventorySearch;
