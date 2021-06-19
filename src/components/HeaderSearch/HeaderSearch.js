import React, { useState } from "react";
import "./HeaderSearch.css";

const HeaderSearch = (props) => {
	const [searchedItem, setSearchedItem] = useState("");

	const onSubmitHandler = (e) => {
		e.preventDefault();
		props.fetchProduct(searchedItem);
	};

	return (
		<form onSubmit={onSubmitHandler} className="header-search">
			<input
				type="text"
				className="input-search"
				value={searchedItem}
				onChange={(e) => setSearchedItem(e.target.value)}
			/>
			<button>Search</button>
		</form>
	);
};

export default HeaderSearch;
