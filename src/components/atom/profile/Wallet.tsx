import React,{} from 'react';
// import { res} from '../../../interfaces/login';
// import React,{useState,useEffect} from 'react';
// import {BeatLoader} from 'react-spinners';
// import { useHistory, useParams} from 'react-router-dom';
// import {Link} from 'react-router-dom';
// import { useSelector} from 'react-redux';
// // import {registerAction} from '../../actions/completeRegistration';
// import {RootState} from '../../../store';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import {getData} from '../../../lib/utils';


const Wallet = () => {


  // const clientRegister = useSelector( (state : RootState) => state.login);
  // const {payload} = clientRegister;

  // useEffect(() =>{
  //   console.log(payload);
  // },[payload]);


  const info = getData();
  // const userInfoFromStorage  = localStorage.getItem('userInfo');

  // const userStorage : res = JSON.parse(userInfoFromStorage || '{}' );
  // if(userInfoFromStorage) {
  //   userStorage 
  // }
  const wallet :any =  info?.data.wallet;
  const {availableBtc,availableMargin} = wallet;

  
  const balance = availableBtc;
  const total = availableBtc + availableMargin;




  return (
    <div className="col-xl-6 col-lg-6 col-md-6">
      <div className="card acc_balance">
        <div className="card-header">
          <h4 className="card-title">Wallet</h4>
        </div>
        <div className="card-body">
          <span>Available </span>
          <h3>{balance} USD</h3>
          <div className="d-flex justify-content-between my-3">
            <div>
              <p className="mb-1">Total Equity</p>
              <h4>{total} USD</h4>
            </div>
            <div>
              <p className="mb-1">Available Margin</p>
              <h4>{availableBtc} USD</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
