import React from "react";
import "./ProductItem.css";

const ProductItem = (props) => {
	const { title, price, description, image } = props.product;
	return (
		<div className="product-info">
			<div className="product-title">{title.substring(0, 20)}</div>
			<div className="product-image">
				<img className="product-image__img" src={image} alt="" />
			</div>
			<hr style={{ width: "100%" }} />
			<div className="product-price">Price: ${price}</div>
			<hr style={{ width: "100%" }} />
			<div className="product-desc">{description.substring(0, 80)}</div>
		</div>
	);
};

export default ProductItem;
