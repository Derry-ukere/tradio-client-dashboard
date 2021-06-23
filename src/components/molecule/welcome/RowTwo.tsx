import React from 'react';

const RowTwo = () => {
  return (
    <div className="row">
      <div className="col-xl-3 col-lg-6 col-md-12 col-xxl-6">
        <div className="card">
          <div className="card-header">
            <ul className="nav nav-pills" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="pill" href="#limit" role="tab" aria-selected="true">Limit</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#market" role="tab" aria-selected="false">Market</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#stop-limit" role="tab" aria-selected="false">Stop Limit</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#stop-market" role="tab" aria-selected="false">Stop Market</a>
              </li>
            </ul>
          </div>
          <div className="card-body market-limit ps">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="limit" role="tabpanel">
                <form method="post" name="myform" className="currency_limit">
                  <div className="form-group">
                    {/* <label class="mr-sm-2">Currency</label> */}
                    <div className="input-group mb-3">
                      <select name="currency" className="form-control mw-150" style={{ display: 'none' }}>
                        <option data-display="Bitcoin" value="bitcoin">Bitcoin
                        </option>
                        <option value="litecoin">Litecoin</option>
                      </select><div className="nice-select form-control mw-150" tabIndex={0}><span className="current">Bitcoin</span><ul className="list"><li data-value="bitcoin" data-display="Bitcoin" className="option selected">Bitcoin
                      </li><li data-value="litecoin" className="option">Litecoin</li></ul></div>
                      <input type="text" name="usd_amount" className="form-control text-right" placeholder="Enter Size" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">USD</span>
                      </div>
                      <input type="text" name="currency_amount" className="form-control text-right" />
                    </div>
                  </div>
                  <ul className="list-group limit-nested ps ps--active-y">
                    <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Time In Force
                      <select name="currency" className="border-0 h-0" style={{ display: 'none' }}>
                        <option data-display="Good 'Til Cancelled" >Good 'Til
                          Cancelled</option>
                        <option >Fill Or Kill</option>
                        <option >Immediate Or Cancel</option>
                      </select><div className="nice-select border-0 h-0" tabIndex={0}><span className="current">Good 'Til Cancelled</span><ul className="list"><li data-value data-display="Good 'Til Cancelled" className="option selected">Good 'Til
                        Cancelled</li><li data-value className="option">Fill Or Kill</li><li data-value className="option">Immediate Or Cancel</li></ul></div>
                    </li>
                    <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Post Only
                      <label className="toggle mb-0">
                        <input className="toggle-checkbox" type="checkbox" defaultChecked />
                        <span className="toggle-switch" />
                      </label>
                    </li>
                    <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Size in BTC
                      <strong className="strong"> 0.00254 BTC</strong>
                    </li>
                    <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Order Value
                      <strong className="strong">65850 USD</strong>
                    </li>
                    <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Available Margin
                      <strong className="strong">15458 USD</strong>
                    </li>
                    <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Buy Cost @ 1.0x
                      <strong className="strong">0.00 USD</strong>
                    </li>
                    <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Sell Cost @ 1.0x
                      <strong className="strong">0.00 USD</strong>
                    </li>
                    <div className="ps__rail-x" style={{ left: '0px', bottom: '-8px' }}><div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps__rail-y" style={{ top: '8px', height: '210px', right: '0px' }}><div className="ps__thumb-y" tabIndex={0} style={{ top: '8px', height: '202px' }} /></div></ul>
                </form>
              </div>
              <div className="tab-pane fade" id="market" role="tabpanel">
                <form method="post" name="myform" className="currency_limit">
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">USD</span>
                      </div>
                      <input type="text" name="currency_amount" className="form-control text-right" />
                    </div>
                  </div>
                  <ul className="list-group market-nested ps">
                    <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Size in BTC
                      <span className="strong"> 0.00254 BTC</span>
                    </li>
                    <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Order Value
                      <span className="strong">65850 USD</span>
                    </li>
                    <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Available Margin
                      <span className="strong">15458 USD</span>
                    </li>
                    <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Buy Cost @ 1.0x
                      <span className="strong">0.00 USD</span>
                    </li>
                    <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Sell Cost @ 1.0x
                      <span className="strong">0.00 USD</span>
                    </li>
                    <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}><div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps__rail-y" style={{ top: '0px', right: '0px' }}><div className="ps__thumb-y" tabIndex={0} style={{ top: '0px', height: '0px' }} /></div></ul>
                  <div className="btn-group btn-block mt-3">
                    <button type="submit" name="submit" className="btn btn-success waves-effect">Buy
                      Now</button>
                    <button type="submit" name="submit" className="btn btn-danger waves-effect">Sell
                      Now</button>
                  </div>
                </form>
              </div>
              <div className="tab-pane fade" id="stop-limit" role="tabpanel">
                <form method="post" name="myform" className="currency_limit">
                  <div className="form-group">
                    {/* <label class="mr-sm-2">Currency</label> */}
                    <div className="input-group mb-3">
                      <select name="currency" className="form-control mw-150" style={{ display: 'none' }}>
                        <option data-display="Bitcoin" value="bitcoin">Bitcoin
                        </option>
                        <option value="litecoin">Litecoin</option>
                      </select><div className="nice-select form-control mw-150" tabIndex={0}><span className="current">Bitcoin</span><ul className="list"><li data-value="bitcoin" data-display="Bitcoin" className="option selected">Bitcoin
                      </li><li data-value="litecoin" className="option">Litecoin</li></ul></div>
                      <input type="text" name="usd_amount" className="form-control text-right" placeholder="Enter Size" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">USD</span>
                      </div>
                      <input type="text" name="currency_amount" className="form-control text-right" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">USD</span>
                      </div>
                      <input type="text" name="currency_amount" className="form-control text-right" />
                    </div>
                  </div>
                  <ul className="list-group stop-limit-nested ps">
                    <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Stop Trigger
                      <select name="currency" className="border-0 h-0" style={{ display: 'none' }}>
                        <option data-display="Mark Price" >Mark Price</option>
                        <option >Last Price</option>
                      </select><div className="nice-select border-0 h-0" tabIndex={0}><span className="current">Mark Price</span><ul className="list"><li data-value data-display="Mark Price" className="option selected">Mark Price</li><li data-value className="option">Last Price</li></ul></div>
                    </li>
                    <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Time In Force
                      <select name="currency" className="border-0 h-0" style={{ display: 'none' }}>
                        <option data-display="Good 'Til Cancelled" >Good 'Til
                          Cancelled</option>
                        <option >Fill Or Kill</option>
                        <option >Immediate Or Cancel</option>
                      </select><div className="nice-select border-0 h-0" tabIndex={0}><span className="current">Good 'Til Cancelled</span><ul className="list"><li data-value data-display="Good 'Til Cancelled" className="option selected">Good 'Til
                        Cancelled</li><li data-value className="option">Fill Or Kill</li><li data-value className="option">Immediate Or Cancel</li></ul></div>
                    </li>
                    <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Post Only
                      <label className="toggle mb-0">
                        <input className="toggle-checkbox" type="checkbox" defaultChecked />
                        <span className="toggle-switch" />
                      </label>
                    </li>
                    <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Size in BTC
                      <span className="strong"> 0.00254 BTC</span>
                    </li>
                    <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Order Value
                      <span className="strong">65850 USD</span>
                    </li>
                    <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Available Margin
                      <span className="strong">15458 USD</span>
                    </li>
                    <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Buy Cost @ 1.0x
                      <span className="strong">0.00 USD</span>
                    </li>
                    <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Sell Cost @ 1.0x
                      <span className="strong">0.00 USD</span>
                    </li>
                    <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}><div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps__rail-y" style={{ top: '0px', right: '0px' }}><div className="ps__thumb-y" tabIndex={0} style={{ top: '0px', height: '0px' }} /></div></ul>
                  <div className="btn-group btn-block mt-3">
                    <button type="submit" name="submit" className="btn btn-success waves-effect">Buy
                      Now</button>
                    <button type="submit" name="submit" className="btn btn-danger waves-effect">Sell
                      Now</button>
                  </div>
                </form>
              </div>
              <div className="tab-pane fade" id="stop-market" role="tabpanel">
                <form method="post" name="myform" className="currency_limit">
                  <div className="form-group">
                    {/* <label class="mr-sm-2">Currency</label> */}
                    <div className="input-group mb-3">
                      <select name="currency" className="form-control mw-150" style={{ display: 'none' }}>
                        <option data-display="Bitcoin" value="bitcoin">Bitcoin
                        </option>
                        <option value="litecoin">Litecoin</option>
                      </select><div className="nice-select form-control mw-150" tabIndex={0}><span className="current">Bitcoin</span><ul className="list"><li data-value="bitcoin" data-display="Bitcoin" className="option selected">Bitcoin
                      </li><li data-value="litecoin" className="option">Litecoin</li></ul></div>
                      <input type="text" name="usd_amount" className="form-control text-right" placeholder="Enter Size" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">USD</span>
                      </div>
                      <input type="text" name="currency_amount" className="form-control text-right" />
                    </div>
                  </div>
                  <ul className="list-group stop-market-nested">
                    <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Stop Trigger
                      <select name="currency" className="border-0 h-0" style={{ display: 'none' }}>
                        <option data-display="Mark Price">Mark Price</option>
                        <option >Last Price</option>
                      </select><div className="nice-select border-0 h-0" tabIndex={0}><span className="current">Mark Price</span><ul className="list"><li data-value data-display="Mark Price" className="option selected">Mark Price</li><li data-value className="option">Last Price</li></ul></div>
                    </li>
                    <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Post Only
                      <label className="toggle mb-0">
                        <input className="toggle-checkbox" type="checkbox" defaultChecked />
                        <span className="toggle-switch" />
                      </label>
                    </li>
                    <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Size in BTC
                      <span className="strong"> 0.00254 BTC</span>
                    </li>
                    <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Order Value
                      <span className="strong">65850 USD</span>
                    </li>
                    <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Available Margin
                      <span className="strong">15458 USD</span>
                    </li>
                    <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Buy Cost @ 1.0x
                      <span className="strong">0.00 USD</span>
                    </li>
                    <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Sell Cost @ 1.0x
                      <span className="strong">0.00 USD</span>
                    </li>
                  </ul>
                  <div className="btn-group btn-block mt-3">
                    <button type="submit" name="submit" className="btn btn-success waves-effect">Buy
                      Now</button>
                    <button type="submit" name="submit" className="btn btn-danger waves-effect">Sell
                      Now</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}><div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps__rail-y" style={{ top: '0px', right: '0px' }}><div className="ps__thumb-y" tabIndex={0} style={{ top: '0px', height: '0px' }} /></div></div>
        </div>
      </div>
      <div className="col-xl-5 col-lg-6 col-md-12 col-xxl-6">
        {/* TradingView Widget BEGIN */}
        <div className="tradingview-widget-container card">
          <div id="tradingview_e8053"><div id="tradingview_f2133-wrapper" style={{ position: 'relative', boxSizing: 'content-box', width: '100%', height: '460px', margin: '0 auto !important', padding: '0 !important', fontFamily: 'Arial,sans-serif' }}><div style={{ width: '100%', height: '460px', background: 'transparent', padding: '0 !important' }}><iframe id="tradingview_f2133" src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_f2133&symbol=BITSTAMP%3ABTCUSD&interval=D&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=Dark&style=1&timezone=Etc%2FUTC&withdateranges=1&showpopupbutton=1&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&showpopupbutton=1&locale=en&utm_source=demo.themefisher.com&utm_medium=widget&utm_campaign=chart&utm_term=BITSTAMP%3ABTCUSD" style={{ width: '100%', height: '100%', margin: '0 !important', padding: '0 !important' }} frameBorder={0} allowTransparency={true} scrolling="no" allowFullScreen /></div></div></div>
        </div>
        {/* TradingView Widget END */}
      </div>
      <div className="col-xl-2 col-lg-4 col-md-6 col-xxl-4">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Order Book</h4>
          </div>
          <div className="card-body order-book ps ps--active-y">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Price (USD)</th>
                  <th scope="col">Price (BTC)</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-danger">10393.50</td>
                  <td>0.010</td>
                  <td>14.109</td>
                </tr>
                <tr>
                  <td className="text-danger">10393.50</td>
                  <td>0.010</td>
                  <td>14.109</td>
                </tr>
                <tr>
                  <td className="text-danger">10393.50</td>
                  <td>0.010</td>
                  <td>14.109</td>
                </tr>
                <tr>
                  <td className="text-danger">10393.50</td>
                  <td>0.010</td>
                  <td>14.109</td>
                </tr>
                <tr>
                  <td className="text-danger">10393.50</td>
                  <td>0.010</td>
                  <td>14.109</td>
                </tr>
              </tbody>
            </table>
            <div className="order-book-divider">
              <h6 className="text-danger"> <i className="la la-arrow-down" /> 6587.35</h6>
              <span>6520.220 / 4835.00</span>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Price (USD)</th>
                  <th scope="col">Price (BTC)</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-success">10393.50</td>
                  <td>0.010</td>
                  <td>14.109</td>
                </tr>
                <tr>
                  <td className="text-success">10393.50</td>
                  <td>0.010</td>
                  <td>14.109</td>
                </tr>
                <tr>
                  <td className="text-success">10393.50</td>
                  <td>0.010</td>
                  <td>14.109</td>
                </tr>
                <tr>
                  <td className="text-success">10393.50</td>
                  <td>0.010</td>
                  <td>14.109</td>
                </tr>
                <tr>
                  <td className="text-success">10393.50</td>
                  <td>0.010</td>
                  <td>14.109</td>
                </tr>
              </tbody>
            </table>
            <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}><div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps__rail-y" style={{ top: '0px', height: '400px', right: '0px' }}><div className="ps__thumb-y" tabIndex={0} style={{ top: '0px', height: '285px' }} /></div></div>
        </div>
      </div>
      <div className="col-xl-2 col-lg-4 col-md-6 col-xxl-4">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Trade History</h4>
              </div>
              <div className="card-body trade-history ps ps--active-y">
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">Price</th>
                        <th scope="col">Size</th>
                        <th scope="col">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-danger">10393.50</td>
                        <td>0.010</td>
                        <td>14.109</td>
                      </tr>
                      <tr>
                        <td className="text-danger">10393.50</td>
                        <td>0.010</td>
                        <td>14.109</td>
                      </tr>
                      <tr>
                        <td className="text-danger">10393.50</td>
                        <td>0.010</td>
                        <td>14.109</td>
                      </tr>
                      <tr>
                        <td className="text-danger">10393.50</td>
                        <td>0.010</td>
                        <td>14.109</td>
                      </tr>
                      <tr>
                        <td className="text-danger">10393.50</td>
                        <td>0.010</td>
                        <td>14.109</td>
                      </tr>
                      <tr>
                        <td className="text-danger">10393.50</td>
                        <td>0.010</td>
                        <td>14.109</td>
                      </tr>
                      <tr>
                        <td className="text-danger">10393.50</td>
                        <td>0.010</td>
                        <td>14.109</td>
                      </tr>
                      <tr>
                        <td className="text-danger">10393.50</td>
                        <td>0.010</td>
                        <td>14.109</td>
                      </tr>
                      <tr>
                        <td className="text-danger">10393.50</td>
                        <td>0.010</td>
                        <td>14.109</td>
                      </tr>
                      <tr>
                        <td className="text-danger">10393.50</td>
                        <td>0.010</td>
                        <td>14.109</td>
                      </tr>
                      <tr>
                        <td className="text-danger">10393.50</td>
                        <td>0.010</td>
                        <td>14.109</td>
                      </tr>
                      <tr>
                        <td className="text-danger">10393.50</td>
                        <td>0.010</td>
                        <td>14.109</td>
                      </tr>
                      <tr>
                        <td className="text-danger">10393.50</td>
                        <td>0.010</td>
                        <td>14.109</td>
                      </tr>
                      <tr>
                        <td className="text-danger">10393.50</td>
                        <td>0.010</td>
                        <td>14.109</td>
                      </tr>
                      <tr>
                        <td className="text-danger">10393.50</td>
                        <td>0.010</td>
                        <td>14.109</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}><div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps__rail-y" style={{ top: '0px', height: '400px', right: '0px' }}><div className="ps__thumb-y" tabIndex={0} style={{ top: '0px', height: '250px' }} /></div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-2 col-lg-4 col-xxl-4">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Your Portfolio </h4>
          </div>
          <div className="card-body balance-widget ps ps--active-y">
            <div className="total-balance">
              <h3>$ 63411.00</h3>
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

    </div>

  );
};

export default RowTwo;
