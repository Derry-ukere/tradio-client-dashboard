import React  from 'react';
import { res} from '../../../interfaces/login';
import Avatar from 'react-avatar';
// import {getData} from '../../../lib/utils';
// import Moment from 'react-moment';

const ProfileComp = () => {

  // const userDetails = getData();

  

  const userInfoFromStorage  = localStorage.getItem('userInfo');

  const userStorage : res = JSON.parse(userInfoFromStorage || '{}' );
 
  const name = userStorage.data.overview.name;
  const email = userStorage.data.email;
  const address = userStorage.data.overview.address;
  // const tel = userStorage.data.overview;
  
  const day = new Date().getDay();
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const time = new Date().getTime();

  // useEffect(()=>{
  //   console.log('data from function ', userDetails);
  // },[]);

  
  function randomNumber(min : number, max : number) {
    return Math.random() * (max - min) + min;
  }

  const number = randomNumber(1,9);
  const lastLog = `${time} ${day}- ${month} -${year}`;

  

  return (
    <div className="col-xl-6 col-lg-6 col-md-6">
      <div className="card profile_card">
        <div className="card-body">
          <div className="media">
            <Avatar name={name}  className="mr-3 rounded-circle mr-0 mr-sm-3" />
            <div className="media-body">
              <span>Hello</span>
              <h4 className="mb-2">{name}</h4>
              <p className="mb-1"> <span><i className="bi bi-telephone-fill mr-2 text-primary" /></span> +1
              235 5547</p>
              <p className="mb-1"> <span><i className="bi bi-envelope mr-2 text-primary" /></span>
                {email}
              </p>
            </div>
          </div>
          <ul className="card-profile__info">
            <li>
              <h5 className="mr-4">Address</h5>
              <span className="text-muted">{address}</span>
            </li>
            <li className="mb-1">
              <h5 className="mr-4">Total Gas Distribution</h5>
              <span>103 Time (Today {number} Times)</span>
            </li>
            <li>
              <h5 className="text-danger mr-4">Last Log</h5>
              <span className="text-danger"> {lastLog} </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileComp;
