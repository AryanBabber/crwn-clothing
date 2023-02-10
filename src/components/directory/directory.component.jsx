import {DirectoryContainer} from "./directory.styles";
import DirectoryItem from "../directory-item/directory-item.component";
import categoryList from "../../components/data/categories.json";
const categories = categoryList.category;

const Directory = () => {
	return (
		<DirectoryContainer>
			{categories.map((category) => (
				<DirectoryItem
					key={category.id}
					{...category}
				/>
			))}
		</DirectoryContainer>
	);
};

export default Directory;
