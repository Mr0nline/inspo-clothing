import React, { Component } from 'react';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import ShopPage from './pages/shop/shop.component';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckOutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import history from './components/history/history';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';

class App extends Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(
					(snapShot) => {
						setCurrentUser({
							id: snapShot.id,
							...snapShot.data(),
						});
					},
					() => console.log(this.state)
				);
			}
			setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
		console.log(auth);
	}

	render() {
		return (
			<Router history={history}>
				<div>
					<Header />
					<Switch>
						<Route exact path='/' component={HomePage} />
						<Route exact path='/shop' component={ShopPage} />
						<Route exact path='/checkout' component={CheckOutPage} />
						<Route
							exact
							path='/sign'
							render={() =>
								this.props.currentUser ? (
									<Redirect to='/' />
								) : (
									<SignInAndSignUpPage />
								)
							}
						/>
					</Switch>
				</div>
			</Router>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
