import React from 'react';
import Profile from '../../atom/profile/ProfileComp';
import Wallet from '../../atom/profile/Wallet';
import Bills from '../../atom/profile/Bills';
import History from '../../atom/profile/History';

const OverviewComponent = () => {
  return (
    <>
      <Profile />
      <Wallet />
      <Bills /> 
      <History />
    </>
  );
};

export default OverviewComponent;
