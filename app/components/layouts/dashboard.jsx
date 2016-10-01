import React from 'react';

// components
import Navbar from '../navbar/_navbar';
import Accounts from '../accounts/_accounts';


const Dashboard = () => {
  return (
    <div>
    <div>
      <Navbar />
    </div>
    <div>
    <Accounts />
    </div>
    </div>
  );
};

export default Dashboard;
