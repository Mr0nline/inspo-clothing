import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Router } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import history from './components/history/history';

class App extends Component {
	constructor() {
		super();

		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					})
				},()=>console.log(this.state));
			}
			this.setState({
				currentUser: userAuth
			});
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
					<Header currentUser={this.state.currentUser} />
					<Switch>
						<Route exact path='/' component={HomePage}></Route>
						<Route exact path='/shop' component={ShopPage}></Route>
						<Route
							exact
							path='/sign'
							// render={(props) => <SignInAndSignUpPage isSigned={this.state.currentUser ? true : false} {...props} /> } 
							component={
								// SignInAndSignUpPage 
								this.state.currentUser ? history.push('/') : SignInAndSignUpPage
							}
							/>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
