/* eslint-disable @typescript-eslint/no-unused-vars */
import React,{useState,useEffect,useRef} from 'react';
import {BeatLoader} from 'react-spinners';
// eslint-disable-next-line no-unused-vars
import { useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {loginAction} from '../../actions/login';
import {RootState} from '../../store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [check, setCheck] = useState(false);

  const dispatch = useDispatch();
  const clientRegister = useSelector( (state : RootState) => state.login);
  const {loading,error,payload} = clientRegister;
  const history = useHistory();
  const isMounted = useRef(null);
  const data  = localStorage.getItem('userInfo');
  let userInfoFromStorage: any;
  if(data){
    // eslint-disable-next-line no-unused-vars
    userInfoFromStorage = JSON.parse(data);
  }
  

 
  useEffect(()=>{
    if (isMounted) {
      if(payload && payload.data.overview.emailVerified){
        history.push('/dashboard');
      }else{
        toast.error('comfirm email address before login', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
    }
  },[dispatch,payload?.data.overview.emailVerified,error]);
  

  const handleSubmit = (e : {preventDefault : ()=> void})=>{
    e.preventDefault();
    dispatch(loginAction.main(email,password)); 
    // setCheck((prev) => !prev);    
  };
  
  const onPaswwordChange = (e : {target : { value : any}}) =>{
    setpassword(e.target.value);
  };

  const onEmailChange = (e : {target : { value : any}}) =>{
    setemail(e.target.value);
  };
  return (
    <div id="main-wrapper" className="show" >
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
      <div className="authincation section-padding" ref = {isMounted}>
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
                      <input type="email" className="form-control" placeholder="hello@example.com" required value = {email} onChange = {onEmailChange}/>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" placeholder="Password" required value = {password} onChange = {onPaswwordChange}/>
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
                      {loading ? <BeatLoader color = 'white' /> :<button type="submit" className="btn btn-success btn-block">Sign In</button>}
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

