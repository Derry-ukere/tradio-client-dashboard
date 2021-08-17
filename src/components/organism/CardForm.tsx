import React from 'react';

const CardForm = () => {
  return (
    <div className="auth-form card">
      <div className="card-header">
        <h4 className="card-title">Link a debit card</h4>
      </div>
      <div className="card-body">
        <form action="settings" className="identity-upload">
          <div className="form-row">
            <div className="form-group col-xl-12">
              <label className="mr-sm-2">Name on card </label>
              <input type="text" className="form-control" required placeholder="Enter Name" />
            </div>
            <div className="form-group col-xl-12">
              <label className="mr-sm-2">Card number </label>
              <input type="text" className="form-control" required placeholder="Enter Card Number" />
            </div>
            <div className="form-group col-xl-4">
              <label className="mr-sm-2">Expiration </label>
              <input type="text" className="form-control" required />
            </div>
            <div className="form-group col-xl-4">
              <label className="mr-sm-2">CVC </label>
              <input type="text" className="form-control"  required placeholder='Enter CVC' />
            </div>
            <div className="form-group col-xl-4">
              <label className="mr-sm-2">Postal code </label>
              <input type="text" className="form-control" required  placeholder= 'Enter Postal Code' />
            </div>
            <div className="text-center col-12">
              <button type="submit" className="btn btn-success pl-5 pr-5">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>

  );
};

export default CardForm;
