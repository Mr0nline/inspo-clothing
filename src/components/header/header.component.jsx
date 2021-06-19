import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const Header = ({ currentUser, hidden }) => (
	<div className='header'>
		<Link className='logo-container' to='/'>
			<Logo className='header-logo' />
		</Link>
		<div className='header-options'>
			<Link className='header-option' to='/shop'>
				SHOP
			</Link>
			<Link className='header-option' to='/contact'>
				CONTACT
			</Link>
			{currentUser ? (
				<div
					className='header-option'
					onClick={async () => {
						await auth.signOut();
						toast.info('Signed Out!', {
							autoClose: 3000,
						});
					}}>
					SIGN OUT
				</div>
			) : (
				<Link className='header-option' to='/sign'>
					SIGN IN
				</Link>
			)}
			<CartIcon />
		</div>
		{hidden ? null : <CartDropDown />}
	</div>
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
