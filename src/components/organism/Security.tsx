import React from 'react';

const Security = () => {
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="card sub-menu">
          <div className="card-body active">
            <ul className="d-flex show">
              <li className="nav-item">
                <a href="./settings.html" className="nav-link">
                  <i className="mdi mdi-account-settings-variant" />
                  <span>Edit Profile</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="./settings-preferences.html" className="nav-link">
                  <i className="mdi mdi-settings" />
                  <span>Preferences</span>
                </a>
              </li>
              <li className="nav-item active">
                <a href="./settings-security.html" className="nav-link active">
                  <i className="mdi mdi-lock" />
                  <span>Security</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="./settings-account.html" className="nav-link">
                  <i className="mdi mdi-bank" />
                  <span>Linked Account</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-xl-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Security</h4>
          </div>
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-xl-4">
                <div className="id_card">
                  <img src="./images/id.png" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="id_info">
                  <h4>Saiful Islam </h4>
                  <p className="mb-1 mt-3">ID: 0024 5687 2254 3698 </p>
                  <p className="mb-1">Status: <span className="font-weight-bold">Verified</span></p>
                  <a href="verify-step-2.html" className="btn btn-success mt-3">New ID</a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="phone_verify">
                  <h4 className="card-title mb-3">Email Address</h4>
                  <form action="otp-2.html">
                    <div className="form-row align-items-center">
                      <div className="form-group col-xl-5">
                        <div className="input-group">
                          <input type="text" className="form-control" placeholder="hello@example.com " />
                          <div className="input-group-append">
                            <button className=" btn input-group-text bg-primary text-white">Add</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="phone_verified">
                  <h5> <span><i className="fa fa-envelope" /></span> hello@example.com</h5>
                  <div className="verify">
                    <div className="verified">
                      <span><i className="la la-check" /></span>
                      <a href="#">Verified</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="phone_verify">
                  <h4 className="card-title mb-3">Add Phone Number</h4>
                  <form action="otp-2.html">
                    <div className="form-row align-items-center">
                      <div className="form-group col-xl-5">
                        <div className="input-group">
                          <input type="text" className="form-control" placeholder="+1 2335 2458 " />
                          <div className="input-group-append">
                            <button className=" btn input-group-text bg-primary text-white">Add</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="phone_verified">
                  <h5> <span><i className="fa fa-phone" /></span> +1 23584 2659</h5>
                  <div className="verify">
                    <div className="verified">
                      <span><i className="la la-check" /></span>
                      <a href="#">Verified</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Security;
