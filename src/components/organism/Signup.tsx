/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react';
import {BeatLoader} from 'react-spinners';
import { useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {registerAction} from '../../actions/register';
import {RootState} from '../../store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const dispatch = useDispatch();
  const clientRegister = useSelector( (state : RootState) => state.register);
  const {loading,error,payload} = clientRegister;
  const history = useHistory();
 

  const handleSubmit = (e : {preventDefault : ()=> void}) =>{
    e.preventDefault();
    // console.log('name is --',username);
    // console.log('email is --',email);
    // console.log('password is --',password);
    dispatch(registerAction.register(username,email,password));
  };

  useEffect(()=>{
    if(payload?.message){
      history.push('/cofirm-email');
    }
    if (error){
      console.log(error);
      toast.error('something went wrong', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  },[dispatch,payload,error]);

  return (
    <div id="main-wrapper" className="show">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="authincation section-padding">
        <div className="container h-100">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-xl-5 col-md-6">
              <div className="mini-logo text-center my-5">
                <a href="https://tradiobtc.com/"><img src='./logo.png' alt="logo here" /></a>
              </div>
              <div className="auth-form card">
                <div className="card-header justify-content-center">
                  <h4 className="card-title">Sign up your account</h4>
                </div>
                <div className="card-body">
                  <form   className="signup_validate" onSubmit = {handleSubmit}>
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" className="form-control" placeholder="Enter username" required value = {username} onChange = {(e) => setUsername( e.target.value) }/>
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control" placeholder="Enter your email" required value = {email}  onChange = {(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" placeholder="Enter your Password" required value = {password}  onChange = {(e) => setpassword(e.target.value)}/>
                    </div>
                    <div className="text-center mt-4">
                      {loading ? <BeatLoader color = 'white' /> :<button type="submit" className="btn btn-success btn-block">Sign up</button>}
                    </div>
                  </form>
                  <div className="new-account mt-3">
                    <p>Already have an account? <Link className="text-primary" to="/">Sign in</Link>
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
