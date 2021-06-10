import React from "react";
import { withRouter } from "react-router-dom";
import "./category-item.styles.scss";

import LabelContainer from "../label-container/label-container.component";

const CategoryItem = ({
  title,
  subtitle,
  imageUrl,
  size,
  history,
  match,
  linkUrl,
}) => (
  <div
    className={`${size} category-item`}
    onClick={() => {
      history.push(`${match.url}${linkUrl}`);
    }}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <LabelContainer title={title.toUpperCase()} subtitle={subtitle} />
  </div>
);

export default withRouter(CategoryItem);
