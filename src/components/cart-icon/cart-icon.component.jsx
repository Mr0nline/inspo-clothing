import React from 'react';
import { ReactComponent as IconCart } from '../../assets/icon_cart.svg';
import './cart-icon.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.action';

import { connect } from 'react-redux';

const CartIcon = ({ toggleCartHidden }) => (
	<div className='cart-icon' onClick={toggleCartHidden}>
		<IconCart className='shopping-icon' />
		<span className='item-count'>10</span>
	</div>
);

// <span className='item-count'>{this.props.CartItemCount}</span>
const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
