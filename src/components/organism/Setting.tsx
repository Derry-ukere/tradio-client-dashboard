import React from 'react';
import Header from '../molecule/settings/Header';
// import ProfileSettings from '../molecule/settings/ProfileSettings';
// import Bank from '../molecule/settings/Bank';
import Security from '../molecule/settings/Security';

const Setting = () => {
  return (
    <div className="row">
      <Header />
      {/* <ProfileSettings /> */}
      {/* <Bank /> */}
      <Security /> 
    </div>   
  );
};

export default Setting;
