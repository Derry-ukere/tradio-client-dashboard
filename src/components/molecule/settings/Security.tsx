import React from 'react';
import { Link } from 'react-router-dom';
import {getData} from '../../../lib/utils';


const Security = () => {

  const userStorage = getData();
  const name = userStorage.data.overview.name;
  const id = userStorage.data._id;
  const email = userStorage.data.email;




  return (
    <div className="col-xl-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Security</h4>
        </div>
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-xl-4">
              <div className="id_card">
                <img src="./img/id.png" alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="id_info">
                <h4>{name} </h4>
                <p className="mb-1 mt-3">ID: {id} </p>
                <p className="mb-1">Status: <span className="font-weight-bold">Verified</span></p>
                <Link to="/add-id" className="btn btn-success mt-3">New ID</Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="phone_verify">
               
              </div> 
            </div>
            <div className="col-xl-12">
              <div className="phone_verified">
                <h5> <span><i className="bi bi-envelope-fill" /></span>{email}</h5>
                <div className="verify">
                  <div className="verified">
                    <span><i className="bi bi-check-lg" /></span>
                    <a href="#">Verified</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="phone_verify">
               
              </div>
            </div>
            <div className="col-xl-12">
              <div className="phone_verified">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
