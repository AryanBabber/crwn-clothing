import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const addCartItem = (cartItems, productToAdd) => {
	const existingItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
	if (existingItem) {
		return cartItems.map((cartItem) => (cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
	}

	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeCartItem = (cartItems, cartItemsToRemove) => {
	const existingItem = cartItems.find((cartItem) => cartItem.id === cartItemsToRemove.id);

	if (existingItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemsToRemove.id);
	}

	return cartItems.map((cartItem) => (cartItem.id === cartItemsToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem));
};

export const clearCartItem = (cartItems, clearedItem) => cartItems.filter((cartItem) => cartItem.id !== clearedItem.id);

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, clearedItem) => {
    const newCartItems = clearCartItem(cartItems, clearedItem);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

// export const setCartItems = (c) => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, c);
export const setIsCartOpen = (c) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, c);
