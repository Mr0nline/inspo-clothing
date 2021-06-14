import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
	<div className='header'>
		<Link className='logo-container' to='/'>
			<Logo className='header-logo' />
		</Link>
		<div className='header-options'>
			<Link className='header-option' to='/shop/'>
				SHOP
			</Link>
			<Link className='header-option' to='/contact/'>
				CONTACT
			</Link>
			{currentUser ? (
				<div className='header-option' onClick={() => auth.signOut()}>
					SIGN OUT
				</div>
			) : (
				<Link className='header-option' to='/sign/'>
					SIGN IN
				</Link>
			)}
			<CartIcon />
		</div>
		{hidden ? null : <CartDropDown />}
	</div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser,
	hidden,
});

export default connect(mapStateToProps)(Header);
