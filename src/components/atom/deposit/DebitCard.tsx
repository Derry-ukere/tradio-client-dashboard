/* eslint-disable quotes */
import React,{useState}  from 'react';
import {usePaystackPayment  } from 'react-paystack';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Success from '../../molecule/settings/Success';


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
};


const DebitCard = () => {
  const [amount, setAmount] = useState(0);

  const config = {
    reference: (new Date()).getTime().toString(),
    email: "mudiagaukere@gmail.com.com",
    amount: amount,
    publicKey: 'pk_live_d430284c765414ce072328e84db6249327a70e1c',

  };

  const initializePayment = usePaystackPayment(config);

  
  const handleChange =(e : {target : {value : any}})=> {
    setAmount(e.target.value);

  };

  const handleClick = () =>{
    console.log('amount is --', amount);
    initializePayment(onSuccess, onClose);
  };

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

