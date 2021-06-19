import React, { useState } from "react";
import RadioInput from "../common/RadioInput";
import "./Filters.css";

const filterOptions = ["popular", "low price", "high price", "new"];

const Filters = (props) => {
	const [selectedFilter, setSelectedFilter] = useState(null);

	const onChangeHandler = (option) => {
		setSelectedFilter(option);
		props.filterData(option);
	};

	return (
		<div className="filters">
			{filterOptions.map((option) => (
				<RadioInput
					key={option}
					value={option}
					label={option}
					onChange={(e) => onChangeHandler(e.target.value)}
					checked={selectedFilter === option}
				/>
			))}
		</div>
	);
};

export default Filters;
