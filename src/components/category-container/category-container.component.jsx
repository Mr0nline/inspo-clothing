import React from 'react';

import './category-container.styles.scss';

import CategoryItem from '../../components/category-item/category-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/category-container/category-container.selector';

const CategoryContainer = ({ sections }) => (
	<div className='category-container'>
		{sections.map(({ id, ...otherSelectionProps }) => (
			<CategoryItem key={id} {...otherSelectionProps} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

export default connect(mapStateToProps)(CategoryContainer);
