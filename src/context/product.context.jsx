import { createContext, useState, useEffect } from "react";

import shopData from '../shop-data.json'

export const ProductContext = createContext({
	currentProduct: [],
});
export const ProductProvider = ({ children }) => {
	const [currentProduct, setCurrentProduct] = useState(shopData);
	const value = { currentProduct };

	// useEffect(() => {
	// 	const unsubscribe = onAuthStateChangedListener((user) => {
    //         if (user) {
    //             createUserDocumentFromAuth(user)
    //         }
    //         setCurrentUser(user);
	// 	});

	// 	return unsubscribe;
	// }, []);
	return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};