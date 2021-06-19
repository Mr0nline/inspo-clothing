import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
			toast.success('Log in successful!', {
				autoClose: 3000,
			});
		} catch (error) {
			toast.error(error.message, { autoClose: 5000 });
		}
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className='sign-in'>
				<h2 className='title'>I already have an account!</h2>
				<span>Sign in with email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						label='Email'
						name='email'
						type='email'
						value={this.state.email}
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						label='Password'
						name='password'
						type='password'
						value={this.state.password}
						handleChange={this.handleChange}
						required
					/>
					<div className='buttons'>
						<CustomButton type='submit'>Sign in</CustomButton>
						<CustomButton
							type='button'
							onClick={signInWithGoogle}
							isGoogleSignIn>
							Sign with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
