import { CartActionValues } from './cart.values';

export const toggleCartHidden = () => ({
	type: CartActionValues.TOGGLE_CART_HIDDEN,
});

export const addCartItem = (item) => ({
	type: CartActionValues.ADD_ITEM,
	payload: item,
});

export const removeCartItem = (item) => ({
	type: CartActionValues.REMOVE_ITEM,
	payload: item,
});

export const clearItemFromCart = (item) => ({
	type: CartActionValues.CLEAR_ITEM_FROM_CART,
	payload: item,
});
