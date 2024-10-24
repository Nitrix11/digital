import React from 'react';
import './GetStartedToday.scss';

const GetStartedToday = () => {
  return (
    <div className="get-started-today">
      <div className="content-wrapper">
        <h2>Get Started Today</h2>
        <p>Claim Your 50% Discount</p>
        <div className="form-container">
          <form>
            <div className="form-group">
              <input type="text" placeholder="Full Name (Required)" />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Phone Number (Required)" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address (Required)" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Business Name (Required)" />
            </div>
            <button type="submit" className="cta-button">
              Schedule Free Consultation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetStartedToday;