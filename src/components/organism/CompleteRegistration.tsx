/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React,{useState,useEffect} from 'react';
import {BeatLoader} from 'react-spinners';
import { useHistory, useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {registerAction} from '../../actions/completeRegistration';
import {RootState} from '../../store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface token {
    id : string
}

const Complete = () => {
  const [name, setname] = useState('');
  const [dob, setdate] = useState('');
  const [preAdress, setpreAdress] = useState('');
  const [permAdress, setpermAdress] = useState('');
  const [city, setCity] = useState('');
  const [country, setcountry] = useState(''); 
  const [tel, setTel] = useState(''); 


  const dispatch = useDispatch();
  const clientRegister = useSelector( (state : RootState) => state.completeReg);
  const {loading,error,payload} = clientRegister;
  const history = useHistory();
  const token : token = useParams();
  const {id} = token;

  useEffect(()=>{
    if(payload){
      toast.success('Registration complete', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      history.push('/');
    }
  },[dispatch,payload]);

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
    dispatch(registerAction.register(id,name,preAdress, dob, permAdress,teleph,city, country));
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
                    <input type="text" className="form-control" placeholder="enter Full name" value = {name} onChange = {(e) => setname(e.target.value)} />
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
                    {loading ? <BeatLoader color = 'white' /> : <button className="btn btn-success px-4">Save</button>}
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

