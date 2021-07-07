import React,{useState} from 'react';
import {Link}  from 'react-router-dom';



const Login = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');





  const handleSubmit = (e : {preventDefault : ()=> void})=>{
    e.preventDefault();
    console.log(email, password);
  };
  
  const onPaswwordChange = (e : {target : { value : any}}) =>{
    setpassword(e.target.value);
  };

  const onEmailChange = (e : {target : { value : any}}) =>{
    setemail(e.target.value);
  };


  return (
    <div id="main-wrapper" className="show">
      <div className="authincation section-padding">
        <div className="container h-100">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-xl-5 col-md-6">
              <div className="mini-logo text-center my-5">
                <a href="https://amazing-borg-54732d.netlify.app"><img src="./logo.png" alt="" /></a>
              </div>
              <div className="auth-form card">
                <div className="card-header justify-content-center">
                  <h4 className="card-title">Sign in</h4>
                </div>
                <div className="card-body">
                  <form  className="signin_validate" action="otp-1.html" onSubmit = {handleSubmit}>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control" placeholder="hello@example.com"  value = {email} onChange = {onEmailChange}/>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" placeholder="Password"  value = {password} onChange = {onPaswwordChange}/>
                    </div>
                    <div className="form-row d-flex justify-content-between mt-4 mb-2">
                      <div className="form-group mb-0">
                        <label className="toggle">
                          <input className="toggle-checkbox" type="checkbox" />
                          <span className="toggle-switch" />
                          <span className="toggle-label">Remember me</span>
                        </label>
                      </div>
                      <div className="form-group mb-0">
                        <Link to="/forgot-password">Forgot Password?</Link>
                      </div>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-success btn-block">Sign in</button>
                    </div>
                  </form>
                  <div className="new-account mt-3">
                    <p>Don't have an account? <Link className="text-primary" to="/sign-up">Sign
                      up</Link></p>
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

export default Login;

