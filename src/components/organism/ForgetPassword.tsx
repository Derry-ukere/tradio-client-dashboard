import React,{useState,useEffect} from 'react';
import {BeatLoader} from 'react-spinners';
import { useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {sendresetPassword} from '../../actions/sendMail';
import {RootState} from '../../store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgetPassword = () => {
  const [email, setemail] = useState('');

  const dispatch = useDispatch();
  const clientRegister = useSelector( (state : RootState) => state.SendResetMail);
  const {loading,error,sendPayload} = clientRegister;
  const history = useHistory();

  useEffect(()=>{
    if(sendPayload?.message){
      history.push('/');
    }
    if (error){
      toast.error('something went wrong, Comfirm login details', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  },[dispatch,sendPayload,error]);

  const handleSubmit = (e: {preventDefault : ()=> void}) => {
    e.preventDefault();
    dispatch(sendresetPassword.send(email));
  };



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
                <a href="https://amazing-borg-54732d.netlify.app"><img src="./logo.png" alt="" /></a>
              </div>
              <div className="auth-form card">
                <div className="card-header justify-content-center">
                  <h4 className="card-title">Reset password</h4>
                </div>
                <div className="card-body">
                  <form onSubmit = {handleSubmit}>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control" placeholder="hello@example.com" value = {email}  onChange = {(e) => setemail (e.target.value)}/>
                    </div>
                    <div className="text-center">
                      {loading ? <BeatLoader/> : <button type="submit" className="btn btn-success btn-block">Reset</button>}
                    </div>
                  </form>
                  <div className="new-account mt-3">
                    <p className="mb-1">Don't Received? </p>
                    <a className="text-primary" onClick = {handleSubmit}>Resend </a>
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

export default ForgetPassword;
