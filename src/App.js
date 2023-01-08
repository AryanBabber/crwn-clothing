import Categories from "./components/categories/categories.component";
import categoryList from "./components/data/categories.json";

const categories = categoryList.category;


const App = () => {
	return <Categories categories={categories} />;
};

export default App;
