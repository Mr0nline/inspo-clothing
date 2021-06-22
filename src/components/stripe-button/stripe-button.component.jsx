import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishKey =
		'pk_test_51J55J7SGtkUih3RX6AoSk0y1t303cilkS9cVtIX40y7wYtCPSAWkU2dZwcfLZEGfpYsHIyNhntsrD6If3fmIEr9Y00IOvZinzU';

	const onToken = (token) => {
		console.log(token);
		toast.success('Payment successful!\nHave a nice day!    ...', {
			autoClose: 3000,
		});
	};

	return (
		<StripeCheckout
			label='Pay now with 💳'
			name='Inspo Clothing Pvt. Ltd.'
			billingAdd
			shippingAddress
			image='https://svgshare.com/i/YP3.svg'
			description={`Your total is $${price}`}
			amount={`$${priceForStripe}`}
			panelLable='Pay Now'
			token={onToken}
			stripeKey={publishKey}
		/>
	);
};

export default StripeCheckoutButton;
