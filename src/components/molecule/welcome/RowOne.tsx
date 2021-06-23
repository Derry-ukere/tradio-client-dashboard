import React from 'react';

const RowOne = () => {
  return (
    <div className="row">
      <div className="col-xl-6 col-xxl-12 col-lg-12 col-xxl-6">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">BTC - USD Perpetual Swap</h4>
            <span>24h Change <strong className="text-success"> +5.30%</strong></span>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-xl col-lg col-md col-sm-auto col-6">
                <p className="mb-0">24h Volume</p>
                <h6>814,107.51 USD</h6>
              </div>
              <div className="col-xl col-lg col-md col-sm-auto col-6">
                <p className="mb-0">Index Price</p>
                <h6>10,326.19 USD</h6>
              </div>
              <div className="col-xl col-lg col-md col-sm-auto col-6">
                <p className="mb-0">Mark Price</p>
                <h6>10,343.94 USD</h6>
              </div>
              <div className="col-xl col-lg col-md col-sm-auto col-6">
                <p className="mb-0">Last Price</p>
                <h6>10,383.51 USD</h6>
              </div>
              <div className="col-xl col-lg col-md col-sm-auto col-6">
                <p className="mb-0">Funding Rate</p>
                <h6>0.1392%</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-xxl-12 col-lg-12 col-xxl-6">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Your Wallet</h4>
            <span>Update <span>10</span> minutes ago</span>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-xl col-lg col-md col-sm-auto col-6">
                <p className="mb-0">Equity</p>
                <h6>34.00 USD</h6>
              </div>
              <div className="col-xl col-lg col-md col-sm-auto col-6">
                <p className="mb-0">Available Margin</p>
                <h6>47.00 USD</h6>
              </div>
              <div className="col-xl col-lg col-md col-sm-auto col-6">
                <p className="mb-0">Unrealized P&amp;L</p>
                <h6>92.00 USD</h6>
              </div>
              <div className="col-xl col-lg col-md col-sm-auto col-6">
                <p className="mb-0">Position Margin</p>
                <h6>58.00 USD</h6>
              </div>
              <div className="col-xl col-lg col-md col-sm-auto col-6">
                <p className="mb-0">Active Orders</p>
                <h6>15.00 USD</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default RowOne;
