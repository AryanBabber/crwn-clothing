import "./categories.styles.scss";
import categoryList from "../data/categories.json";
import CategoryItem from "../category-item/category-item.component";

const categories = categoryList.category;

// console.log(categories);

const Categories = () => {
	return (
		<div className="categories-container">
			{categories.map((category) => (
				<CategoryItem
					key={category.id}
					{...category}
				/>
			))}
		</div>
	);
};

export default Categories