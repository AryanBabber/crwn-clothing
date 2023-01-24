import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
	const existingItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
	if (existingItem) {
		return cartItems.map((cartItem) => (cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
	}

	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemsToRemove) => {
	const existingItem = cartItems.find((cartItem) => cartItem.id === cartItemsToRemove.id);

	if (existingItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemsToRemove.id);
	}

	return cartItems.map((cartItem) => (cartItem.id === cartItemsToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem));
};

const clearCartItem = (cartItems, clearedItem) => cartItems.filter(cartItem => cartItem.id !== clearedItem.id)

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	clearItemFromCart: () => {},
	cartCount: 0,
	cartTotal: 0
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [cartTotal, setCartTotal] = useState(0)

	useEffect(() => {
		const newCartCount = cartItems.reduce((a, b) => a + b.quantity, 0);
		setCartCount(newCartCount);
	}, [cartItems]);

	useEffect(() => {
		const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
		setCartTotal(newCartTotal)
	}, [cartItems]);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

	const removeItemFromCart = (cartItemToRemove) => {
		setCartItems(removeCartItem(cartItems, cartItemToRemove));
	};

	const clearItemFromCart = (clearedItem) => {
		setCartItems(clearCartItem(cartItems, clearedItem))
	}

	const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemFromCart, clearItemFromCart, cartTotal };

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
