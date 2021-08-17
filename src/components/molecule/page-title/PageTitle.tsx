import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
// import { useSelector} from 'react-redux';
// import {RootState} from '../../../store';
import {getData} from '../../../lib/utils';


const PageTitle = () => {
  // const clientRegister = useSelector( (state : RootState) => state.login);
  // const {payload} = clientRegister;

  // const userInfoFromStorage = localStorage.getItem('userInfo');
  // let userStorage : any;
  // if(userInfoFromStorage) {
  //   userStorage = JSON.parse(userInfoFromStorage);
  // }
  const info = getData();
  const name = info.data.fullname;

  useEffect(()=>{
    console.log('name is ', info);
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
