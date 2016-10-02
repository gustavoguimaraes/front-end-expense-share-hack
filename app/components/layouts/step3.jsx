import React from 'react';

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
      <div className='step-3'>
        <div className='settlement'>
          <p>Hint: Click on them to read more</p>
          <h3>You have traveled to: <b className='travelInfoLink'>Berlin</b></h3>
          <div>
            <h2>Select amount</h2>
            <span>Total budget 150 € :</span>
            <span>Total budget 130 € was spent</span>

            <label>Settle date</label>
            2016-10-13

            Results:
            <ListFriends name='Test3' /> 10+
            <ListFriends name='Test4' /> 10+
            <button className='btn btn-success btn-lg'>Review and accept</button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Step3;
