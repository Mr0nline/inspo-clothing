import React from "react";
import "./homepage.styles.scss";

const HomePage = () => (
  <div className='category-container'>
    <div className='category-item'>
      <div className='label-container'>
        <h1 className='label-title'>HATS</h1>
        <span className='label-subtitle'>Shop Now</span>
      </div>
    </div>

    <div className='category-item'>
      <div className='label-container'>
        <h1 className='label-title'>JACKETS</h1>
        <span className='label-subtitle'>Shop Now</span>
      </div>
    </div>

    <div className='category-item'>
      <div className='label-container'>
        <h1 className='label-title'>SNEAKERS</h1>
        <span className='label-subtitle'>Shop Now</span>
      </div>
    </div>

    <div className='category-item'>
      <div className='label-container'>
        <h1 className='label-title'>WOMES</h1>
        <span className='label-subtitle'>Shop Now</span>
      </div>
    </div>

    <div className='category-item'>
      <div className='label-container'>
        <h1 className='label-title'>MENS</h1>
        <span className='label-subtitle'>Shop Now</span>
      </div>
    </div>
  </div>
);

export default HomePage;
