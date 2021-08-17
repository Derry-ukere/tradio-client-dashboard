import React from 'react';
// import { res} from '../../../interfaces/login';
// import {percentage} from '../../../helpers/helpers';
import {getData} from '../../../lib/utils';

  




const Bills = () => {
  // const data  = localStorage.getItem('userInfo');
  // let userInfoFromStorage: any;
  // if(data){
  //   // eslint-disable-next-line no-unused-vars
  //   userInfoFromStorage = JSON.parse(data);
  // }
  const userInfoFromStorage = getData();
  const wallet =  userInfoFromStorage.wallet;

  const {availableBtc} = wallet;

  
  const balance = availableBtc;
  // const total = availableBtc + availableMargin + 0.0230145;
 
  // const margin = total + balance;
  // const thisMont = lastDeposit + margin;
  const maintenance = balance / 99;
  const reakMaintanance = Math.round(maintenance);
  // const Unrealized = maintenance/2;
  // const Unrealizedtwo = maintenance-0.2;
  const Unrealizedthree = maintenance/1.2 * 0.002;
  const rounddedUnrealizedthree = Math.round(Unrealizedthree);

  // useEffect(()=>{
  //   console.log('marginefrom bills', margin);
  // },[]);
  
  return (
    <div className="col-xl-12">
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
          <div className="card text-center pt-2">
            <div className="card-body">
              <p className="mb-1">Maintainance</p>
              <h4>{reakMaintanance}.012 USD</h4>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
          <div className="card text-center pt-2">
            <div className="card-body">
              <p className="mb-1">Unrealized P&amp;L</p>
              <h4>{reakMaintanance} USD</h4>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
          <div className="card text-center pt-2">
            <div className="card-body">
              <p className="mb-1">Open Positions</p>
              <h4>{reakMaintanance}.00 USD</h4>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
          <div className="card text-center pt-2">
            <div className="card-body">
              <p className="mb-1">Active Orders</p>
              <h4>{rounddedUnrealizedthree}.00 USD</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bills;
