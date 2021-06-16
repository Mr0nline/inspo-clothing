import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => {
	return (
		<div className='collection-container'>
			<h1 className='collection-title'>{title}</h1>
			<div className='collection-items'>
				{items
					.filter((item, indx) => indx < 4)
					.map((item) => (
						<CollectionItem key={item.id} item={item} />
						// <div key={item.id}>{item.name}</div>
					))}
			</div>
		</div>
	);
};

export default CollectionPreview;
