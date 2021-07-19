import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

const PageTitle = () => {
  const userInfoFromStorage = localStorage.getItem('userInfo');
  let userStorage : any;
  if(userInfoFromStorage) {
    userStorage = JSON.parse(userInfoFromStorage);
  }
  const name = userStorage.data.overview.name;

  useEffect(()=>{
    console.log('from page title',userStorage);
  },[]);
  return (
    <div className="page-title dashboard">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="page-title-content">
              <p>Welcome Back,
                <span> {name}</span>
              </p>
            </div>
          </div>
          <div className="col-6">
            <ul className="text-right breadcrumbs list-unstyle">
              <li><Link to="/settings">Settings </Link></li>
              <li className="active"><Link to="/security">Security</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
};

export default PageTitle;
