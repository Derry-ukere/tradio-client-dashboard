import React from 'react';
import ColFive from '../../atom/welcome/ColFive';
import ColFour from '../../atom/welcome/ColFour';
import ColOne from '../../atom/welcome/ColOne';
import ColThree from '../../atom/welcome/ColThree';
import ColTwo from '../../atom/welcome/ColTwo'; 

const RowTwo = () => {
  return (
    <div className="row">
      <ColOne />
      <ColTwo />
      <ColThree />
      <ColFour/>
      <ColFive />
    </div>

  );
};

export default RowTwo;
