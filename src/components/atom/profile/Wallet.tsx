import React from 'react';
import { res} from '../../../interfaces/login';

const Wallet = () => {

  const userInfoFromStorage  = localStorage.getItem('userInfo');

  const userStorage : res = JSON.parse(userInfoFromStorage || '{}' );
  // if(userInfoFromStorage) {
  //   userStorage 
  // }
  
  const wallet = userStorage.data.wallet;
  const {availableBtc,availableMargin} = wallet;

  
  const balance = availableBtc + 0.0230;
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
