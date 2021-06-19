import React from "react";
import Loader from "../common/Loader";
import ProductItem from "./ProductItem";

const Products = (props) => {
	const classes =
		props.productsList && props.productsList.length ? "products" : "empty";

	return (
		<div className={`${classes}`}>
			{props.productsList && props.productsList.length ? (
				props.productsList.map((item) => (
					<ProductItem key={item.id} product={item} />
				))
			) : props.isLoading ? (
				<div className="loader-container">
					<Loader />
				</div>
			) : (
				<p>Search for Jewelery, electronics, men clothing, women clothing</p>
			)}
		</div>
	);
};

export default Products;
