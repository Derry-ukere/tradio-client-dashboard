import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getData} from '../../../lib/utils';





const ColFive = () => {
  const UserInfo = getData();
  const [btc, setBtc] = useState(0.0);
  const [profit, setProfit] = useState(0.0);
  const [warn, setWarn] = useState(false);


 

  
  const getdata =  async () =>{
    await axios.get(`https://tradio-client-services.herokuapp.com/api/client/lookupWithId?id=${UserInfo.data._id}`)
      .then((data) => {
        setBtc(data.data.overview.balance);
        setProfit(data.data.wallet.profit);
        setWarn(data.data.warn);
      });
  };

  useEffect(()=>{
    getdata();
  },[]);


  useEffect(()=>{ 
    if(warn ){
      toast.warn('Your Account has been suspended, further trading activities is paused until further notice, contact admin for more details', {
        position: 'top-right',
        autoClose: 20000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
    }
  },[warn]);

  return (
    <div className="col-xl-2 col-lg-4 col-xxl-4">
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Your Portfolio </h4>
        </div>
        <div className="card-body balance-widget ps ps--active-y">
          <div className="total-balance">
            <h3>$ {btc + profit}</h3>
            <h6>Total Balance</h6>
          </div>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Size</th>
                  <th>USD</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>BTC</td>
                  <td>0.000242</td>
                  <td>0.125 USD</td>
                </tr>
                <tr>
                  <td>LTC</td>
                  <td>0.000242 </td>
                  <td>0.125 USD</td>
                </tr>
                <tr>
                  <td>XRP</td>
                  <td>0.000242 </td>
                  <td>0.125 USD</td>
                </tr>
                <tr>
                  <td>ETH</td>
                  <td>0.000242 </td>
                  <td>0.125 USD</td>
                </tr>
                <tr>
                  <td>XTZ</td>
                  <td>0.000242 </td>
                  <td>0.125 USD</td>
                </tr>
                <tr>
                  <td>EOS</td>
                  <td>0.000242 </td>
                  <td>0.125 USD</td>
                </tr>
                <tr>
                  <td>Dash</td>
                  <td>0.000242 </td>
                  <td>0.125 USD</td>
                </tr>
                <tr>
                  <td>USDT</td>
                  <td>0.000242 </td>
                  <td>0.125 USD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="ps__rail-x" style={{ left: '0px', bottom: '-26px' }}><div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps__rail-y" style={{ top: '26px', height: '400px', right: '0px' }}><div className="ps__thumb-y" tabIndex={0} style={{ top: '25px', height: '375px' }} /></div></div>
      </div>
    </div>
  );
};

export default ColFive;
