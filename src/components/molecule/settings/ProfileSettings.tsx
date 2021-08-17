import React,{useState,useEffect} from 'react';
import {BeatLoader} from 'react-spinners';
import {useDispatch, useSelector} from 'react-redux';
import {UpdateEmailAndPassword} from '../../../actions/updateEmailAndPassword';
import {RootState} from '../../../store';
import Avatar from 'react-avatar';
import {getData} from '../../../lib/utils';
// import {useHistory} from 'react-router-dom';
import {registerAction} from '../../../actions/completeRegistration';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ProfileSettings = () => {
  const dispatch = useDispatch();
  // const history = useHistory();
  // const userDetails = getData();
  // const id = userDetails.data._id;

  const [updatename, setname] = useState('');
  const [dob, setdate] = useState('');
  const [preAdress, setpreAdress] = useState('');
  const [permAdress, setpermAdress] = useState('');
  const [city, setCity] = useState('');
  const [country, setcountry] = useState(''); 
  const [tel, setTel] = useState(''); 

  const clientRegister = useSelector( (state : RootState) => state.login);
  const updatePasswordandEmail = useSelector( (state : RootState) => state.UpdateEmailAndPassword);
  const clientUpdate = useSelector( (state : RootState) => state.updateUserDetails);
  const {loading : updateLoading, error,payload : payloadupdate} = clientUpdate;

  const {payload} = clientRegister;
  const{loading,updatePasswordpayload} = updatePasswordandEmail;


  const clientsInformation = getData();
  const name : any =  clientsInformation.data.overview.name;

  useEffect(()=>{
   
    if(updatePasswordpayload){
      console.log(updatePasswordpayload);
      console.log(loading);

    }
   
  },[dispatch,payload,updatePasswordpayload,loading]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const id : any = clientsInformation?._id;



  const updateEmailAndPassword = (e : {preventDefault : () => void}) =>{
    e.preventDefault();
    console.log(email,password,id);
    if(id){
      dispatch(UpdateEmailAndPassword.updateEmailAndTel(id,email,password));
    }
    
  };

  useEffect(()=>{
    if(payloadupdate){
      toast.success(' Details Successfully Updated', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      window.location.reload();
    }
  },[dispatch,payloadupdate]);

  useEffect(()=>{
    if( updatePasswordpayload){
      toast.success(' Details Successfully Updated', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      window.location.reload();
    }
  },[dispatch,updatePasswordpayload]);

  useEffect(()=>{
    if(error){
      toast.error('something went wrong, try again later', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    
  },[dispatch,error]);
  

  const handleSubmit = (e : {preventDefault : ()=> void})=>{
    e.preventDefault();
    const teleph = Number(tel);
    dispatch(registerAction.completeRegistration(id,name,preAdress, dob, permAdress,teleph,city, country));
  };






  return (
    <div className="col-xl-12">
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
      <div className="row">
        <div className="col-xl-6 col-md-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">User Profile</h4>
            </div>
            <div className="card-body">
              <form action="#">
                <div className="form-row">
                 
                  <div className="form-group col-xl-12">
                    <div className="media align-items-center mb-3">
                      <Avatar name={name}  className="mr-3 rounded-circle mr-0 mr-sm-3" />
                      <div className="media-body">
                        <h5 className="mb-0">{name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-md-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">User Profile</h4>
            </div>
            <div className="card-body">
              <form onSubmit = {updateEmailAndPassword}>
                <div className="form-row">
                  <div className="form-group col-xl-12">
                    <label className="mr-sm-2">New Email</label>
                    <input type="email" className="form-control" required value = {email} placeholder="Email"  onChange = {(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="form-group col-xl-12">
                    <label className="mr-sm-2">New Telephone </label>
                    <input type="tel" className="form-control" required value = {password}  placeholder="Enter Telephone" onChange = {(e) => setPassword(e.target.value)} />
                    <p className="mt-2 mb-0">Enable two factor authencation on the security
                    page
                    </p>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-success waves-effect px-4">{loading ? <BeatLoader /> : updatePasswordpayload ? 'Detail Updated' : 'Update'}</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-xl-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Personal Information</h4>
            </div>
            <div className="card-body">
              <form method="post" name="myform" className="personal_validate" noValidate={true} onSubmit = {handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">Your Name</label>
                    <input type="text" className="form-control" placeholder="enter Full name" value = {updatename} onChange = {(e) => setname(e.target.value)} />
                  </div>
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">Your Phone Number</label>
                    <input type="number" className="form-control" placeholder="Enter Phone number" value = {tel} onChange = {(e) => setTel(e.target.value)} /> 
                  </div>
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">Date of birth</label>
                    <input type="date" className="form-control hasDatepicker"  id="datepicker" autoComplete="off" onChange= {(e) => setdate(e.target.value)} />
                  </div>
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">Present Address</label>
                    <input type="text" className="form-control" placeholder="Enter Addreess" value = {preAdress} onChange = {(e) => setpreAdress(e.target.value)}/>
                  </div>
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">Permanent Address</label>
                    <input type="text" className="form-control" placeholder="Enter Address" value = {permAdress} onChange = {(e) => setpermAdress(e.target.value)}/>
                  </div>
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">City</label>
                    <input type="text" className="form-control" placeholder="Enter City" value = {city} onChange = {(e) => setCity(e.target.value)} />
                  </div>
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">Country </label>
                    <input type="text" className="form-control" placeholder="Enter Country"  value = {country} onChange = {(e) => setcountry(e.target.value)}/>
                  </div>
                  <div className="form-group col-12">
                    {updateLoading ? <BeatLoader color = 'white' /> : <button className="btn btn-success px-4">Save</button>}
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

export default ProfileSettings;
