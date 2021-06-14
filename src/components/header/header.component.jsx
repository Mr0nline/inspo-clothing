import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';
import { connect } from 'react-redux';

const Header = ({ currentUser }) => (
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
		</div>
	</div>
);

const mapStateToProps = state => ({
	currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
