import React from 'react';

const ProfileSettings = () => {
  return (
    <div className="col-xl-12">
      <div className="row">
        <div className="col-xl-6 col-md-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">User Profile</h4>
            </div>
            <div className="card-body">
              <form action="#">
                <div className="form-row">
                  <div className="form-group col-xl-12">
                    <label className="mr-sm-2">Your Name</label>
                    <input type="text" className="form-control" placeholder="Name" />
                  </div>
                  <div className="form-group col-xl-12">
                    <div className="media align-items-center mb-3">
                      <img className="mr-3 rounded-circle mr-0 mr-sm-3" src="https://demo.themefisher.com/tradio/images/profile/2.png" width={50} height={50} alt="" />
                      <div className="media-body">
                        <h5 className="mb-0">John Doe</h5>
                        <p className="mb-0">Max file size is 20mb
                        </p>
                      </div>
                    </div>
                    <div className="file-upload-wrapper" data-text="Change Photo">
                      <input name="file-upload-field" type="file" className="file-upload-field" />
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-success waves-effect px-4">Save</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-md-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">User Profile</h4>
            </div>
            <div className="card-body">
              <form action="#">
                <div className="form-row">
                  <div className="form-group col-xl-12">
                    <label className="mr-sm-2">New Email</label>
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                  <div className="form-group col-xl-12">
                    <label className="mr-sm-2">New Password</label>
                    <input type="password" className="form-control" placeholder="**********" />
                    <p className="mt-2 mb-0">Enable two factor authencation on the security
                    page
                    </p>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-success waves-effect px-4">Save</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-xl-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Personal Information</h4>
            </div>
            <div className="card-body">
              <form method="post" name="myform" className="personal_validate" noValidate={true}>
                <div className="form-row">
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">Your Name</label>
                    <input type="text" className="form-control" placeholder="Saiful Islam" name="fullname" />
                  </div>
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">Email</label>
                    <input type="email" className="form-control" placeholder="Hello@example.com" name="email" />
                  </div>
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">Date of birth</label>
                    <input type="text" className="form-control hasDatepicker" placeholder="10-10-2020" id="datepicker" autoComplete="off" name="dob" />
                  </div>
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">Present Address</label>
                    <input type="text" className="form-control" placeholder="56, Old Street, Brooklyn" name="presentaddress" />
                  </div>
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">Permanent Address</label>
                    <input type="text" className="form-control" placeholder="123, Central Square, Brooklyn" name="permanentaddress" />
                  </div>
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">City</label>
                    <input type="text" className="form-control" placeholder="New York" name="city" />
                  </div>
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">Postal Code</label>
                    <input type="text" className="form-control" placeholder="25481" name="postal" />
                  </div>
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">Country </label>
                    <input type="text" className="form-control" placeholder="Enter Country" name="postal" />
                  </div>
                  <div className="form-group col-12">
                    <button className="btn btn-success px-4">Save</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
