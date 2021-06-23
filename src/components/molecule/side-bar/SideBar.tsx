import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="menu active">
        <ul className="show">
          <li className="active">
            <Link to="/profile" data-toggle="tooltip" data-placement="right" data-original-title="Trade" className="active">
              <span><i className="bi bi-cpu"></i></span>
            </Link>
          </li>
          <li>
            <Link to="/messages" data-toggle="tooltip" data-placement="right" data-original-title="Exchange">
              <span><i className="bi bi-chat-dots"></i></span>
            </Link>
          </li>
          <li>
            <Link to="/account" data-toggle="tooltip" data-placement="right" data-original-title="Accounts">
              <span><i className="bi bi-house-door-fill"></i></span>
            </Link>
          </li>
          <li>
            <Link to="/data" data-toggle="tooltip" data-placement="right" data-original-title="Data">
              <span><i className="bi bi-clipboard-data"></i></span>
            </Link>
          </li>
          <li>
            <Link to="/settings" data-toggle="tooltip" data-placement="right" data-original-title="Setting">
              <span><i className="bi bi-gear-wide-connected"></i></span>
            </Link>
          </li>
        </ul>
      </div>
    </div>

  );
};

export default SideBar;
