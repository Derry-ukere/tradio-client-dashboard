import React,{useEffect} from 'react';
// import { res} from '../../../interfaces/login';
import {percentage} from '../../../helpers/helpers';


  




const Bills = () => {
  const data  = localStorage.getItem('userInfo');
  let userInfoFromStorage: any;
  if(data){
    // eslint-disable-next-line no-unused-vars
    userInfoFromStorage = JSON.parse(data);
  }

  const wallet =  userInfoFromStorage.data.wallet;

  const {availableBtc,availableMargin} = wallet;

  
  const balance = availableBtc + 0.0230145;
  const total = availableBtc + availableMargin + 0.0230145;
 
  const margin = total + balance;
  // const thisMont = lastDeposit + margin;
  const maintenance = percentage(balance, 10);
  const Unrealized = maintenance/2;
  // const Unrealizedtwo = maintenance-0.2;
  const Unrealizedthree = maintenance/1.2 * 0.002;

  useEffect(()=>{
    console.log('marginefrom bills', margin);
  },[]);





  return (
    <div className="col-xl-12">
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
          <div className="card text-center pt-2">
            <div className="card-body">
              <p className="mb-1">Maintainance</p>
              <h4>{maintenance} BTC</h4>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
          <div className="card text-center pt-2">
            <div className="card-body">
              <p className="mb-1">Unrealized P&amp;L</p>
              <h4>{Unrealized} BTC</h4>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
          <div className="card text-center pt-2">
            <div className="card-body">
              <p className="mb-1">Open Positions</p>
              <h4>{maintenance} BTC</h4>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
          <div className="card text-center pt-2">
            <div className="card-body">
              <p className="mb-1">Active Orders</p>
              <h4>{Unrealizedthree} BTC</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bills;
