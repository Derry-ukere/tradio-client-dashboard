import React from 'react';


const History = () => {
  return (
    <div className="col-xl-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Transactions History</h4>
        </div>
        <div className="card-body">
          <div className="transaction-table">
            <div className="table-responsive">
              <table className="table table-striped mb-0 table-responsive-sm">
                <thead>
                  <tr>
                    <th>Transaction ID</th>
                    <th>Time</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Balance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#565845522</td>
                    <td>January 10, 2020</td>
                    <td>Realized P&amp;L</td>
                    <td>0.254782 BTC</td>
                    <td>Completed</td>
                    <td>0.125476 BTC</td>
                  </tr>
                  <tr>
                    <td>#565845522</td>
                    <td>January 10, 2020</td>
                    <td>Realized P&amp;L</td>
                    <td>0.254782 BTC</td>
                    <td>Completed</td>
                    <td>0.125476 BTC</td>
                  </tr>
                  <tr>
                    <td>#565845522</td>
                    <td>January 10, 2020</td>
                    <td>Realized P&amp;L</td>
                    <td>0.254782 BTC</td>
                    <td>Completed</td>
                    <td>0.125476 BTC</td>
                  </tr>
                  <tr>
                    <td>#565845522</td>
                    <td>January 10, 2020</td>
                    <td>Realized P&amp;L</td>
                    <td>0.254782 BTC</td>
                    <td>Completed</td>
                    <td>0.125476 BTC</td>
                  </tr>
                  <tr>
                    <td>#565845522</td>
                    <td>January 10, 2020</td>
                    <td>Realized P&amp;L</td>
                    <td>0.254782 BTC</td>
                    <td>Completed</td>
                    <td>0.125476 BTC</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
