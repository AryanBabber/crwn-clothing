import Directory from "../../components/directory/directory.component";
import categoryList from "../../components/data/categories.json";
import { Outlet } from "react-router-dom";
const categories = categoryList.category;


const Home = () => {
	return (
        <div>
            <Directory categories={categories} />
            <Outlet />
        </div>
    );
};

export default Home;
