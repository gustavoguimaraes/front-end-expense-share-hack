import React from 'react';
import { Link } from 'react-router';

// components
import ListFriends from './_listFriends';

class Step2 extends React.Component {
  render() {
    return (
      <div className='step-2'>
        <div className='mainEvent'>
          <p>Closest stations provided by DB API</p>
          <p>Hint: Click on them to read more</p>
          <h3>You have decided to travel to: <b className='travelInfoLink'>Berlin</b></h3>

          <iframe className='travelInfo' src='http://www.css3.se/2016/10/01/info-about-berlin-css-meetups/'>
          </iframe>

          <div>
            <h2>Select amount</h2>
            <label>Total budget 150 € :</label>

            <label>Settle date</label>
            2016-10-13
            <ListFriends name='Test3' /> 14
            <ListFriends name='Test4' /> 18
            <Link to={ '/step-3' }><div className='btn btn-success btn-lg'>Settle!</div></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Step2;
