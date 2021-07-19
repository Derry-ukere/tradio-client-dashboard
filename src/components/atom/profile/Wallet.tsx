import React from 'react';
import { res} from '../../../interfaces/login';

const Wallet = () => {

  const userInfoFromStorage  = localStorage.getItem('userInfo');

  const userStorage : res = JSON.parse(userInfoFromStorage || '{}' );
  // if(userInfoFromStorage) {
  //   userStorage 
  // }
  
  const wallet = userStorage.data.wallet;
  const {availableBtc,availableMargin,lastDeposit} = wallet;

  
  const balance = availableBtc + 0.0230145;
  const total = availableBtc + availableMargin;
  const margin = total + balance;
  const thisMont = lastDeposit + margin;




  return (
    <div className="col-xl-6 col-lg-6 col-md-6">
      <div className="card acc_balance">
        <div className="card-header">
          <h4 className="card-title">Wallet</h4>
        </div>
        <div className="card-body">
          <span>Available BTC</span>
          <h3>{balance} BTC</h3>
          <div className="d-flex justify-content-between my-3">
            <div>
              <p className="mb-1">Total Equity</p>
              <h4>{total} USD</h4>
            </div>
            <div>
              <p className="mb-1">Available Margin</p>
              <h4>{margin} USD</h4>
            </div>
          </div>
          <div className="d-flex justify-content-between my-3">
            <div>
              <p className="mb-1">Buy this month</p>
              <h4>{thisMont} BTC</h4>
            </div>
            <div>
              <p className="mb-1">Sell this month</p>
              <h4>{thisMont - 0.00043}15485 BTC</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
