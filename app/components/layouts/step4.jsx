import React from 'react';

import Navbar from '../navbar/_navbar';

const Step4 = () => {
  return (
    <div>
      <Navbar />

      <div className="row">
       <div className="col-md-2">
       </div>
       <div className="col-md-8">
       <div className="infoBoxes">
       </div>
      <h1>SUCCESS! :)</h1>
      <div className="alert alert-success">
        <h3>Your debts are now settled and automatically transfered to your accounts!</h3>
        <h3>Happy traveling in the future </h3>
        <br />
        <h4><span className="glyphicon glyphicon-envelope"></span>Check your email for a status report of this xPense trip report</h4>
      </div>
    </div>
    </div>
    </div>

  );
};

export default Step4;
