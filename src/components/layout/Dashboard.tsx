import React, { FC } from 'react';


const Dashboard: FC = ({ children }) => {
  return (
    <div>
      <h1>Dashboard Header!</h1>
      <div>{children}</div>
      <h1>Dashboard Footer!</h1>
    </div>
  );
};

export default Dashboard;
