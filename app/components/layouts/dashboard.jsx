import React from 'react';

// components
import Navbar from '../navbar/_navbar';
// import Accounts from '../accounts/_accounts';
import DashboardListFriends from './_dashboardListFriends';

const Dashboard = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div className='friendsList'>
          <p>Friends list</p>
          <DashboardListFriends name='Test1' />
          <DashboardListFriends name='Test2' />
          <DashboardListFriends name='Test3' />
          <DashboardListFriends name='Test4' />
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
            <button className='btn btn-success btn-lg'>Create!</button>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Dashboard;
