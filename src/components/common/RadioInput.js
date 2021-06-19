import React from "react";
import "./RadioInput.css";

const RadioInput = (props) => {
	return (
		<div className="radio-container">
			<input
				type="radio"
				value={props.value}
				onChange={props.onChange}
				checked={props.checked}
			/>
			<label>{props.label}</label>
		</div>
	);
};

export default RadioInput;
