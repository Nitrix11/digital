import React from 'react';
import './Pricing.scss';
import price from "../images/price.png"

const Pricing = () => {
  return (
    <div className="pricing">
   
      <div className="content-wrapper">
        <h2>Pricing</h2>
        <p>Affordable Pricing For Premium Social Media Management</p>
        <div className="promo-price">
          <h3>Promo Price:</h3>
          <p>$225 for 3 months</p>
          <p>(50% discount from $150/month)</p>
        </div>
      
        <button className="cta-button">Get Started Now</button>
      </div>
      <div className="image-wrapper">
          <img src={price} alt="Social Media Setup" />
        </div>
    </div>
  );
};

export default Pricing;