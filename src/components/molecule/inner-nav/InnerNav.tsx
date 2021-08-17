/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {logOutAction} from '../../../actions/logout';
import {RootState} from '../../../store';
import {getData} from '../../../lib/utils';
import axios from 'axios';


const InnerNav = () => {
  const dispatch = useDispatch();
  const client = useSelector( (state : RootState) => state.login);
  const {loading,error,payload} = client ;
  // const history = useHistory();
  const UserInfo = getData();
  const email = UserInfo.data.email;
  const username = UserInfo.data.username;
  // const balance = UserInfo.wallet.availableBtc;
  const [apiData, setApiData] = useState<any>({});
  const [profit, setprofit] = useState(0.0);
  const [balance, setBalance] = useState(0.0);

  

  const getdata =  async () =>{
    await axios.get(`https://tradio-client-services.herokuapp.com/api/client/lookupWithId?id=${UserInfo.data._id}`)
      .then((data) => {
        setApiData(data.data);
      });
  };

  useEffect(()=>{
    getdata();
  },[]);

  useEffect(()=>{
    if(apiData.wallet){
      setprofit(apiData.wallet.profit);
      setBalance(apiData.overview.balance);
    }
  },[apiData,profit]);

  const logout = () =>{
    dispatch(logOutAction.logout());
  };

  return (
    <div className="dropdown-menu dropdown-menu-right show">
      <div className="user-email">
        <div className="user">
          <span className="thumb"><i className="bi bi-person"></i></span>
          <div className="user-info">
            <h6>{username}</h6>
            <span>{email}</span>
          </div>
        </div>
      </div>
      <div className="user-balance">
        <div className="available">
          <p>Capital</p>
          <span>{balance} USD</span>
        </div>
        <div className="total">
          <p>Profit</p>
          <span>{profit} USD</span> 
        </div>
      </div>
      <Link to="/account" className="dropdown-item">
        <i className="bi bi-house-door-fill"></i> Account
      </Link>
      <Link to="/data" className="dropdown-item">
        <i className="bi bi-calendar2-date-fill"></i> History
      </Link>
      <Link to="/settings" className="dropdown-item">
        <i className="bi bi-gear-wide-connected"></i> Setting
      </Link>
      <a href="#" className="dropdown-item logout" onClick = {logout}>
        <i className="bi bi-file-person-fill"></i> Logout
      </a>
    </div>
  );
};

export default InnerNav;
