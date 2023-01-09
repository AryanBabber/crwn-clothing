import Categories from "../../components/categories/categories.component";
import categoryList from "../../components/data/categories.json";
import { Outlet } from "react-router-dom";
const categories = categoryList.category;


const Home = () => {
	return (
        <div>
            <Categories categories={categories} />
            <Outlet />
        </div>
    );
};

export default Home;
