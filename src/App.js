import { useState } from "react";
import "./App.css";
import Filters from "./components/Filters/Filters";
import HeaderSearch from "./components/HeaderSearch/HeaderSearch";
import Products from "./components/Products/Products";

function App() {
	const [productsList, setProductsList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const fetchProduct = (searchedTerm) => {
		setIsLoading(true);
		fetch(`https://fakestoreapi.com/products/category/${searchedTerm.trim()}`)
			.then((res) => res.json())
			.then((json) => {
				const modifiedJson = json.map((data) => {
					return data.price < 150
						? { tag: "popular", ...data }
						: { tag: "new", ...data };
				});
				setProductsList(modifiedJson);
				setIsLoading(false);
			})
			.catch(() => setIsLoading(false));
	};

	const filterData = (filter) => {
		let filteredData, priceData;
		if (filter === "popular" || filter === "new") {
			filteredData = productsList.filter((item) => item.tag === filter);
			setProductsList(filteredData);
		} else if (filter === "high price") {
			priceData = [...productsList].sort((a, b) => b.price - a.price);
			setProductsList(priceData);
		} else if (filter === "low price") {
			priceData = [...productsList].sort((a, b) => a.price - b.price);
			setProductsList(priceData);
		}
	};

	return (
		<div className="App">
			<HeaderSearch fetchProduct={fetchProduct} />
			{productsList.length ? <Filters filterData={filterData} /> : null}
			<Products productsList={productsList} isLoading={isLoading} />
		</div>
	);
}

export default App;
