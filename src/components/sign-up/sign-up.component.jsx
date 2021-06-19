import React from 'react';
import './sign-up.styles.scss';
import '../sign-in/sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class SignUp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: '',
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert(`Password doesn't match with each other`);
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUserProfileDocument(user, { displayName });
			this.setState = {
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			};
			toast.success('Registration successful!\nLogging you in...', {
				autoClose: 3000,
			});
		} catch (error) {
			toast.error(error.message, { autoClose: 5000 });
			// console.log('Error while registration, ', error.message);
		}
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className='sign-in'>
				<h2 className='title'>I do not have an account!</h2>
				<span>Sign up with email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						label='Display Name'
						name='displayName'
						type='text'
						value={this.state.displayName}
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						label='Email'
						name='email'
						type='emai'
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
					<FormInput
						label='Confirm Password'
						name='confirmPassword'
						type='password'
						value={this.state.confirmPassword}
						handleChange={this.handleChange}
						required
					/>
					<div className='buttons'>
						<CustomButton type='submit'>Sign up</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignUp;
