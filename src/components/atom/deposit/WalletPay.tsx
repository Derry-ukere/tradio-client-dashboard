import React, {useState} from 'react';

const WalletPay = () => {
  const [copy, setcopy] = useState('Copy');

  const handleClick = () =>{
    navigator.clipboard.writeText('1ESYo1BVA9uxAAvjwqea37dfdobk1ZsjJh');
    setcopy('Copied');
  };


  return (
    <div className="tab-pane fade active show" id="tab1">
      <div className="qrcode">
        <img src="./qr.svg" alt="" width={150} />
      </div>
      <form >
        <div className="input-group">
          <input type="text"   className="form-control" defaultValue="1ESYo1BVA9uxAAvjwqea37dfdobk1ZsjJh" />
          <div className="input-group-append">
            <span className="input-group-text bg-primary text-white" onClick = {handleClick}>{copy}</span>
          </div>
        </div>
      </form>
      <ul>
        <li>
          <i className="bi bi-dash-circle-dotted" />
              Cold bitcoin network transfers will be credited to your Tradio account after
              3 network confirmations.
        </li>
        <li>
          <i className="bi bi-dash-circle-dotted" />
              Bitcoin deposits to this address are unlimited. Note that you may not
              be able to withdraw all of your funds at once if you deposit more
              than your daily withdrawal limit.
        </li>
      </ul>
    </div>
  );
};

export default WalletPay;
