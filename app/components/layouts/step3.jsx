import React from 'react';
import { Link } from 'react-router';

// components
import ListFriends from './_listFriends';
import Navbar from '../navbar/_navbar';

class Step3 extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div className="row">
         <div className="col-md-2">
         </div>
         <div className="col-md-8">
         <div className="infoBoxes">
         </div>
      <div className='step-3'>
        <div className='settlement'>
          <h3>You have traveled to: <b className='travelInfoLink'>Berlin</b></h3>
          <div>
            <h2>Select amount</h2>
            <h4>Total budget was: <b> 150 € </b></h4>
            <h4>Of that <b>130 €</b> was spent</h4>

            <h4>Settle date</h4>
          <h5>  2016-10-13 </h5>
            <div className="col-md-8">
            Results:
            <ListFriends name='Evelyn' /> 10+
            <ListFriends name='T-rex' /> 10+
            <br />
              <Link to={ '/step-4' }><button className='btn btn-success btn-lg'>Review and accept</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      </div>
      </div>
      </div>
    );
  }
}

export default Step3;
