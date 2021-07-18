/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React,{useState,useEffect} from 'react';
import {BeatLoader} from 'react-spinners';
import { useHistory, useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {resetPassword} from '../../actions/resetPassword';
import {RootState} from '../../store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface token {
    id : string
}

const Complete = () => {
  const [passwordone, setPasswordone] = useState('');
  const [passwordtwo, setPasswordtwo] = useState('');




  const dispatch = useDispatch();
  const reserPassword = useSelector( (state : RootState) => state.ResetPassword);
  const {loading,error,paswrdResetpayload} = reserPassword;
  const history = useHistory();
  const token : token = useParams();
  const {id} = token;

  useEffect(()=>{
    if(paswrdResetpayload?.overview){
      history.push('/');
    }
    if(error) {
      toast.error('something went wrong, try again', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  },[dispatch,paswrdResetpayload?.overview]);
  

  const handleSubmit = (e : {preventDefault : ()=> void})=>{
    e.preventDefault();
    if(passwordone === passwordtwo ){
      dispatch(resetPassword.reset(id,passwordone));
    }else{
      toast.error('password must Match!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  


  return (
    <div className="col-xl-12">
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="mini-logo text-center my-5">
              <a href="https://amazing-borg-54732d.netlify.app"><img src="/logo.png" alt="" /></a>
            </div>
            <div className="card-header">
              <h4 className="card-title">Reset Password</h4>
            </div>
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
            <div className="card-body">
              <form method="post" name="myform" className="personal_validate" noValidate={true} onSubmit = {handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">Your Password</label>
                    <input type="password" className="form-control" placeholder="enter password" value = {passwordone} onChange = {(e) => setPasswordone(e.target.value)} />
                  </div>
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">Re-enter Password</label>
                    <input type="password" className="form-control" placeholder="re - enter password" value = {passwordtwo} onChange = {(e) => setPasswordtwo(e.target.value)} />
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

export default Complete;

