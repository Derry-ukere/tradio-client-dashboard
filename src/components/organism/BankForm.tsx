import React from 'react';

const BankForm = () => {
  return (
    <div className="col-xl-5 col-md-6">
      <div className="auth-form card">
        <div className="card-header">
          <h4 className="card-title">Link a bank account</h4>
        </div>
        <div className="card-body">
          <form action="settings" className="identity-upload">
            <div className="form-row">
              <div className="form-group col-xl-12">
                <label className="mr-sm-2">Routing number </label>
                <input type="text" className="form-control" placeholder= 'Enter Routing Number' />
              </div>
              <div className="form-group col-xl-12">
                <label className="mr-sm-2">Account number </label>
                <input type="text" className="form-control" placeholder='Enter Account Number' />
              </div>
              <div className="form-group col-xl-12">
                <label className="mr-sm-2">Fulll name </label>
                <input type="text" className="form-control" placeholder="Enter Name" />
              </div>
              <div className="form-group col-xl-12">
                <img src="/check.png" alt="" className="img-fluid" /> 
              </div>
              <div className="text-center col-12">
                <a href="/settings" className="btn btn-primary mx-2">Back</a>
                <button type="submit" className="btn btn-success mx-2">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BankForm;
