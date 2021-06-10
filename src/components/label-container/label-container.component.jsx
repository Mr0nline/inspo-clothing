import React from "react";

import "./label-container.styles.scss";

const LabelContainer = ({ title, subtitle }) => (
  <div className='label-container'>
    <h1 className='label-title'>{title}</h1>
    <span className='label-subtitle'>{subtitle}</span>
  </div>
);

export default LabelContainer;
