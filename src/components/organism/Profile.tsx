import React from 'react';

const Profile = () => {
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="card sub-menu">
          <div className="card-body active">
            <ul className="d-flex show">
              <li className="nav-item active">
                <a href="./account-overview.html" className="nav-link active">
                  <i className="mdi mdi-bullseye" />
                  <span>Overview</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="./account-deposit.html" className="nav-link">
                  <i className="mdi mdi-heart" />
                  <span>Deposit</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="./account-withdraw.html" className="nav-link">
                  <i className="mdi mdi-pentagon" />
                  <span>Withdraw</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="./account-api.html" className="nav-link">
                  <i className="mdi mdi-database" />
                  <span>API</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="./account-affiliate.html" className="nav-link">
                  <i className="mdi mdi-diamond" />
                  <span>Affiliate</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6">
        <div className="card profile_card">
          <div className="card-body">
            <div className="media">
              <img className="mr-3 rounded-circle mr-0 mr-sm-3" src="images/profile/2.png" width={60} height={60} alt="" />
              <div className="media-body">
                <span>Hello</span>
                <h4 className="mb-2">Saiful Islam</h4>
                <p className="mb-1"> <span><i className="fa fa-phone mr-2 text-primary" /></span> +1
                  235 5547</p>
                <p className="mb-1"> <span><i className="fa fa-envelope mr-2 text-primary" /></span>
                  hello@example.com
                </p>
              </div>
            </div>
            <ul className="card-profile__info">
              <li>
                <h5 className="mr-4">Address</h5>
                <span className="text-muted">House 14, Road 9, Gulshan, Dhaka</span>
              </li>
              <li className="mb-1">
                <h5 className="mr-4">Total Log</h5>
                <span>103 Time (Today 5 Times)</span>
              </li>
              <li>
                <h5 className="text-danger mr-4">Last Log</h5>
                <span className="text-danger">3 February, 2020, 10:00 PM</span>
              </li>
            </ul>
            <div className="social-icons">
              <a className="facebook text-center" href="javascript:void(0)"><span><i className="fa fa-facebook" /></span></a>
              <a className="twitter text-center" href="javascript:void(0)"><span><i className="fa fa-twitter" /></span></a>
              <a className="youtube text-center" href="javascript:void(0)"><span><i className="fa fa-youtube" /></span></a>
              <a className="googlePlus text-center" href="javascript:void(0)"><span><i className="fa fa-google" /></span></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6">
        <div className="card acc_balance">
          <div className="card-header">
            <h4 className="card-title">Wallet</h4>
          </div>
          <div className="card-body">
            <span>Available BTC</span>
            <h3>0.0230145 BTC</h3>
            <div className="d-flex justify-content-between my-3">
              <div>
                <p className="mb-1">Total Equity</p>
                <h4>78950.35 USD</h4>
              </div>
              <div>
                <p className="mb-1">Available Margin</p>
                <h4>56845.25 USD</h4>
              </div>
            </div>
            <div className="d-flex justify-content-between my-3">
              <div>
                <p className="mb-1">Buy this month</p>
                <h4>3.0215485 BTC</h4>
              </div>
              <div>
                <p className="mb-1">Sell this month</p>
                <h4>3.0215485 BTC</h4>
              </div>
            </div>
            <div className="btn-group mb-3">
              <button className="btn btn-success">Buy</button>
              <button className="btn btn-danger">Sell</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-12">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
            <div className="card text-center pt-2">
              <div className="card-body">
                <p className="mb-1">Maintainance</p>
                <h4>0.03654 BTC</h4>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
            <div className="card text-center pt-2">
              <div className="card-body">
                <p className="mb-1">Unrealized P&amp;L</p>
                <h4>0.03654 BTC</h4>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
            <div className="card text-center pt-2">
              <div className="card-body">
                <p className="mb-1">Open Positions</p>
                <h4>0.03654 BTC</h4>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
            <div className="card text-center pt-2">
              <div className="card-body">
                <p className="mb-1">Active Orders</p>
                <h4>0.03654 BTC</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Transactions History</h4>
          </div>
          <div className="card-body">
            <div className="transaction-table">
              <div className="table-responsive">
                <table className="table table-striped mb-0 table-responsive-sm">
                  <thead>
                    <tr>
                      <th>Transaction ID</th>
                      <th>Time</th>
                      <th>Type</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#565845522</td>
                      <td>January 10, 2020</td>
                      <td>Realized P&amp;L</td>
                      <td>0.254782 BTC</td>
                      <td>Completed</td>
                      <td>0.125476 BTC</td>
                    </tr>
                    <tr>
                      <td>#565845522</td>
                      <td>January 10, 2020</td>
                      <td>Realized P&amp;L</td>
                      <td>0.254782 BTC</td>
                      <td>Completed</td>
                      <td>0.125476 BTC</td>
                    </tr>
                    <tr>
                      <td>#565845522</td>
                      <td>January 10, 2020</td>
                      <td>Realized P&amp;L</td>
                      <td>0.254782 BTC</td>
                      <td>Completed</td>
                      <td>0.125476 BTC</td>
                    </tr>
                    <tr>
                      <td>#565845522</td>
                      <td>January 10, 2020</td>
                      <td>Realized P&amp;L</td>
                      <td>0.254782 BTC</td>
                      <td>Completed</td>
                      <td>0.125476 BTC</td>
                    </tr>
                    <tr>
                      <td>#565845522</td>
                      <td>January 10, 2020</td>
                      <td>Realized P&amp;L</td>
                      <td>0.254782 BTC</td>
                      <td>Completed</td>
                      <td>0.125476 BTC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
