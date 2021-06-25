import React from 'react';
import { Link } from 'react-router-dom';

const InnerNav = () => {
  return (
    <div className="dropdown-menu dropdown-menu-right show">
      <div className="user-email">
        <div className="user">
          <span className="thumb"><i className="bi bi-person"></i></span>
          <div className="user-info">
            <h6>Saiful Islam</h6>
            <span>quixlab.com@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="user-balance">
        <div className="available">
          <p>Available</p>
          <span>0.00 USD</span>
        </div>
        <div className="total">
          <p>Total</p>
          <span>0.00 USD</span>
        </div>
      </div>
      <Link to="/account" className="dropdown-item">
        <i className="bi bi-house-door-fill"></i> Account
      </Link>
      <Link to="/data" className="dropdown-item">
        <i className="bi bi-calendar2-date-fill"></i> History
      </Link>
      <Link to="/settings" className="dropdown-item">
        <i className="bi bi-gear-wide-connected"></i> Setting
      </Link>
      <Link to="/" className="dropdown-item logout">
        <i className="bi bi-file-person-fill"></i> Logout
      </Link>
    </div>
  );
};

export default InnerNav;
