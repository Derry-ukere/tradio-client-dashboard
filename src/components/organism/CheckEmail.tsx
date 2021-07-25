import React from 'react';

const CheckEmail = () => {
  return (
    <div className="container h-100">
      <div className="row justify-content-center h-100 align-items-center">
        <div className="col-xl-5 col-md-6">
          <div className="auth-form card">
            <div className="card-body">
              <form className="identity-upload">
                <div className="identity-content">
                  <span className="icon"><i className="bi bi-check-lg" /></span>
                  <h4>Congratulation. Your registration was successfull</h4>
                  <p>Check your email address to complete your registration.
                    Message typically arrives in less than 3 mins, kindly check your inbox or spam.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckEmail;
