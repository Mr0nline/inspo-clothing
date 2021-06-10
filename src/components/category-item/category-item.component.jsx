import React from "react";

import "./category-item.styles.scss";

import LabelContainer from "../label-container/label-container.component";

const CategoryItem = ({ title, subtitle, imageUrl, size }) => (
  <div className={`${size} category-item`}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <LabelContainer title={title} subtitle={subtitle} />
  </div>
);

export default CategoryItem;
