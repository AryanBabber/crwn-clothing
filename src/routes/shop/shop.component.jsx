import { useContext } from "react";
import './shop.styles.scss'
import { ProductContext } from "../../context/product.context";
import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
    const {currentProduct} = useContext(ProductContext)
	return (
		<div className="products-container">
			{currentProduct.map((product) => (
                <ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default Shop;
