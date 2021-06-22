import React from 'react';
import './checkout-item.styles.scss';

import {
	clearItemFromCart,
	addCartItem,
	removeCartItem,
} from '../../redux/cart/cart.action';
import { connect } from 'react-redux';

const CheckOutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
	const { name, imageUrl, quantity, price } = cartItem;
	return (
		<div className='checkout-item'>
			<img alt='item' src={imageUrl} className='image-container' />
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div className='arrow' onClick={() => removeItem(cartItem)}>
					&#10094;
				</div>
				<div className='value'>{quantity}</div>
				<div className='arrow' onClick={() => addItem(cartItem)}>
					&#10095;
				</div>
			</span>
			<span className='price'>${price}</span>
			<div className='remove-button' onClick={() => clearItem(cartItem)}>
				&#10005;
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clearItemFromCart(item)),
	addItem: (item) => dispatch(addCartItem(item)),
	removeItem: (item) => dispatch(removeCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
