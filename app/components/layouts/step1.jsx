import React from 'react';
import { Link } from 'react-router';

// components
import Navbar from '../navbar/_navbar';
import ListFriends from './_listFriends';

const Step1 = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div className='friendsList'>
          <p>Friends list</p>
          <ListFriends name='Friend 1' />
          <ListFriends name='Friend 2' />
          <ListFriends name='Friend 3' />
          <ListFriends name='Friend 4' />
        </div>
        <div className='mainEvent'>
          <p>Create event!</p>
          <div>
            <h2>Select amount</h2>
            <label>Sum € :</label>

            <input type='text' />
            <h2>Where are you going</h2>
            <label>Location</label>
            <input type='text' />
            <label>Start date</label>
            <input type='date' />

            <label>Settle date</label>
            <input type='date' />
            <Link to={ '/step-2' } ><div className='btn btn-success btn-lg'>Create!</div> </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
