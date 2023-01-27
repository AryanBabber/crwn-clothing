import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";


export const ProductContext = createContext({
	currentProduct: [],
});
export const ProductProvider = ({ children }) => {
	const [currentProduct, setCurrentProduct] = useState([]);
	
	const value = { currentProduct };
	
	return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};