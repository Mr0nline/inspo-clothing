import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';
import { addCartItem } from '../../redux/cart/cart.action';

const CollectionItem = ({ item, addCartItem }) => {
	const { imageUrl, name, price } = item;
	return (
		<div className='collection-item'>
			<div className='image-container'>
				<div
					className='image'
					style={{
						backgroundImage: `url(${imageUrl})`,
					}}
				/>
			</div>
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>${price}</span>
			</div>
			<CustomButton onClick={() => addCartItem(item)} inverted='inverted'>
				Add to cart
			</CustomButton>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		addCartItem: (item) => dispatch(addCartItem(item)),
	};
};

export default connect(null, mapDispatchToProps)(CollectionItem);
