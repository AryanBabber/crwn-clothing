import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryContainer, Title } from "./category.styles";
import { useSelector } from "react-redux";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/category.selector";
import { Spinner } from "../../components/spinner/spinner.component";

const Category = () => {
	const { category } = useParams();
	console.log('render/re-rendering-component')
	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectCategoriesIsLoading)
	const [products, setProducts] = useState(categoriesMap[category]);
	useEffect(() => {
		console.log('effect fired calling...')
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<Fragment>
			<Title>{category.toUpperCase()}</Title>

			{isLoading ? <Spinner /> : (
				<CategoryContainer>
					{products &&
						products.map((product) => (
							<ProductCard
								key={product.id}
								product={product}
							/>
					))}
				</CategoryContainer>
			)}
		</Fragment>
	);
};

export default Category;
