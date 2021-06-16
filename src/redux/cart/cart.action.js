import { CartActionValues } from './cart.values';

export const toggleCartHidden = () => ({
	type: CartActionValues.TOGGLE_CART_HIDDEN,
});

export const addCartItem = (item) => ({
	type: CartActionValues.ADD_ITEM,
	payload: item,
});
