import React from "react";

interface InventorySearchProps {
	placeholder?: string,
	onSearchQuery: (searchTerm: string) => void
}

const InventorySearch = React.forwardRef<HTMLInputElement, InventorySearchProps>((props: InventorySearchProps, ref) => {
	return (
		<div>
			<input
				ref={ref}
				type={"text"}
				placeholder={props.placeholder || "Search inventory"}
				onChange={e => props.onSearchQuery(e.target.value)} />
		</div>
	);
});

export default InventorySearch;
