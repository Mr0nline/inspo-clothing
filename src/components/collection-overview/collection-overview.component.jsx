import React from 'react';
import CollectionPreview from '../collection-preview/collection-preview.component';
import './collection-overview.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';

const CollectionsOverview = ({ collections }) => (
	<div className='collections-overview'>
		{console.log(collections)}
		{collections.map(({ id, ...otherCollectionProps }) => {
			return <CollectionPreview key={id} {...otherCollectionProps} />;
		})}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
