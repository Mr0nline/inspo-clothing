import React from 'react';
import { ReactComponent as IconCart } from '../../assets/icon_cart.svg';
import './cart-icon.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<div className='cart-icon' onClick={toggleCartHidden}>
		<IconCart fill='red' className='shopping-icon' />
		<span className='item-count'>{itemCount}</span>
	</div>
);

// <span className='item-count'>{this.props.CartItemCount}</span>

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
