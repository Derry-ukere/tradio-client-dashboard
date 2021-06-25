import React from 'react';

const Header = () => {
  return (
    <div className="col-xl-12">
      <div className="card sub-menu">
        <div className="card-body active">
          <ul className="d-flex show">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="bi bi-person-badge" />
                <span>Edit Profile</span>
              </a>
            </li>
            <li className="nav-item active">
              <a href="#" className="nav-link active">
                <i className="bi bi-shield-lock" />
                <span>Security</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="bi bi-bank" />
                <span>Linked Account</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
