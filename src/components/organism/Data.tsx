import React from 'react';

const Data = () => {
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="card sub-menu">
          <div className="card-body active">
            <ul className="d-flex show">
              <li className="nav-item active">
                <a href="./data-tbi.html" className="nav-link active">
                  <i className="mdi mdi-database-plus" />
                  <span>TBI</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="./data-founding-rate.html" className="nav-link">
                  <i className="mdi mdi-book" />
                  <span>Founding Rate</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="./data-insurance-found.html" className="nav-link">
                  <i className="mdi mdi-book-multiple" />
                  <span>Insurance Found</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link  dropdown-toggle" data-toggle="dropdown">
                  <i className="mdi mdi-file-export" />
                  <span>Export CSV</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="./data-last-price.html">Last Price</a>
                  <a className="dropdown-item" href="./data-index-price.html">Index Price</a>
                  <a className="dropdown-item" href="./data-mark-price.html">Mark Price</a>
                  {/* <a class="dropdown-item" href="#">Founding Rate</a> */}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-xl-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">TBI Details</h4>
          </div>
          <div className="card-body" style={{ position: 'relative' }}>
            <div className="text-right mb-3 d-block">
              <div className="duration-option">
                <a id="all" className="active">ALL</a>
                <a id="one_month" >1M</a>
                <a id="six_months">6M</a>
                <a id="one_year" >1Y</a>
                <a id="ytd" >YTD</a>
              </div>
            </div>
            <div id="timeline-chart" style={{ minHeight: '315px' }}><div id="apexcharts3s6fd8u4" className="apexcharts-canvas apexcharts3s6fd8u4 light zoomable" style={{ width: '480px', height: '300px' }}>
              <div className="resize-triggers"><div className="expand-trigger"><div style={{ width: '521px', height: '398px' }} /></div><div className="contract-trigger" /></div></div>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Bitcoin Index History</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Time</th>
                        <th>Index Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2020/03/09 10:53:20</td>
                        <td>$7873.07</td>
                      </tr>
                      <tr>
                        <td>2020/03/09 10:53:20</td>
                        <td>$7873.07</td>
                      </tr>
                      <tr>
                        <td>2020/03/09 10:53:20</td>
                        <td>$7873.07</td>
                      </tr>
                      <tr>
                        <td>2020/03/09 10:53:20</td>
                        <td>$7873.07</td>
                      </tr>
                      <tr>
                        <td>2020/03/09 10:53:20</td>
                        <td>$7873.07</td>
                      </tr>
                      <tr>
                        <td>2020/03/09 10:53:20</td>
                        <td>$7873.07</td>
                      </tr>
                      <tr>
                        <td>2020/03/09 10:53:20</td>
                        <td>$7873.07</td>
                      </tr>
                      <tr>
                        <td>2020/03/09 10:53:20</td>
                        <td>$7873.07</td>
                      </tr>
                      <tr>
                        <td>2020/03/09 10:53:20</td>
                        <td>$7873.07</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Data;
