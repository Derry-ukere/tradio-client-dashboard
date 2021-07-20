/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable quotes */
import React,{useState,useEffect}  from 'react';
import {usePaystackPayment  } from 'react-paystack';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store';
import {UpdateEmailAndPassword} from '../../../actions/updateBalanceAction';
import {res} from '../../../interfaces/login';




const DebitCard = () => {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const clientRegister = useSelector( (state : RootState) => state.UpdatePayment);
  const {loading,error,updatepayload} = clientRegister;
  const data  = localStorage.getItem('userInfo');
  let userInfoFromStorage: any;
  if(data){
    // eslint-disable-next-line no-unused-vars
    userInfoFromStorage = JSON.parse(data);
  }

  const id =  userInfoFromStorage.data._id;
  const config = {
    reference: (new Date()).getTime().toString(),
    email: "mudiagaukere@gmail.com.com",
    amount: amount,
    publicKey: 'pk_live_d430284c765414ce072328e84db6249327a70e1c',

  };
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    toast.error('something went wrong', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  
  const onSuccess = (reference : any) => {
    console.log(reference);
    toast.success('payment was succesfull', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(UpdateEmailAndPassword.update(id,amount));
  };
  
  const initializePayment = usePaystackPayment(config);

  
  const handleChange =(e : {target : {value : any}})=> {
    setAmount(e.target.value);

  };

  const handleClick = () =>{
    console.log('amount is --', amount);
    initializePayment(onSuccess, onClose);
  };

  // useEffect(() =>{
  //   console.log('data', userInfoFromStorage.data._id);
  // },[]);

  return (
    <div className="tab-pane fade active show" id="tab1">
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
      <div className="qrcode">
        <img src="./qr.svg" alt="" width={150} />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text bg-primary"><i className="bi bi-currency-exchange" /></label>
        </div>
        <input type="text" className="form-control text-right" onChange ={handleChange} placeholder="5000 USD" />
      </div>
      <div className="input-group-append" onClick = {handleClick}>
        <span className="input-group-text bg-primary text-white "  style = {{margin : "30px"}}>Debit Card Button</span>
      </div>
      <ul>
        <li>
          <i className="bi bi-dash-circle-dotted" />
              You must a Bit-Pay app on your mobile phone or web interface to automatically carry out transfer.
        </li>
        <li>
          <i className="bi bi-dash-circle-dotted" />
              Bit-pay bitcoin network transfers will be credited to your Tradio account automatically
        </li>
      </ul>
    </div>
  );
};

export default DebitCard;

