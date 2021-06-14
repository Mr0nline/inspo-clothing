import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Router } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import history from './components/history/history';
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.action'

class App extends Component {


	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
							id: snapShot.id,
							...snapShot.data()
						})
				},()=>console.log(this.state));
			}
			setCurrentUser(userAuth)				
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
						<Route exact path='/sign'component={SignInAndSignUpPage}/>
					</Switch>
				</div>
			</Router>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
