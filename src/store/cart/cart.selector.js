import { createSelector } from "reselect";

const selectCartReducer = (s) => s.cart;

export const selectCartItems = createSelector([selectCartReducer], (cart) => cart.cartItems);

export const selectIsCartOpen = createSelector([selectCartReducer], (cart) => cart.isCartOpen);

export const selectCartCount = createSelector([selectCartItems], (cart) => cart.reduce((total, {quantity}) => total + quantity, 0));

export const selectCartTotal = createSelector([selectCartItems], (cart) => cart.reduce((total, c) => total + c.quantity * c.price, 0));
