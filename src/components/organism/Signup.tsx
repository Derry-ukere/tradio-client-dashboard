import React from 'react';

const Signup = () => {
  return (
    <div id="main-wrapper" className="show">
      <div className="authincation section-padding">
        <div className="container h-100">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-xl-5 col-md-6">
              <div className="mini-logo text-center my-5">
                <a href="index.html"><img src="./images/logo.png" alt="" /></a>
              </div>
              <div className="auth-form card">
                <div className="card-header justify-content-center">
                  <h4 className="card-title">Sign up your account</h4>
                </div>
                <div className="card-body">
                  <form method="post" name="myform" className="signup_validate">
                    <div className="form-group">
                      <label>Username</label>
                      <input type="text" className="form-control" placeholder="username" name="username" />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control" placeholder="hello@example.com" name="email" />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" placeholder="Password" name="password" />
                    </div>
                    <div className="text-center mt-4">
                      <button type="submit" className="btn btn-success btn-block">Sign up</button>
                    </div>
                  </form>
                  <div className="new-account mt-3">
                    <p>Already have an account? <a className="text-primary" href="signin.html">Sign in</a>
                    </p>
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

export default Signup;
