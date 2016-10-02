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


    <div className="row">
     <div className="col-md-2">

     <div className='friendsList'>
       <p>Friends list</p>
       <DashboardListFriends name='Test1' />
       <DashboardListFriends name='Test2' />
       <DashboardListFriends name='Test3' />
       <DashboardListFriends name='Test4' />
     </div>
     </div>
     <div className="col-md-8 ">
     <div className='mainEvent'>
     <div className="infoBoxes">
     <span className="glyphicon glyphicon-check">
</span><span>  Share cost with friends</span>
     <span className="glyphicon glyphicon-check">
</span><span>Transparent overview of expenses</span>


     <span className="glyphicon glyphicon-check">
</span><span>Settle debts and surplus funds automatically with Postbank API</span>
</div>
     <div className="row">
     <div className="col-md-6 col-md-offset-3">
              <h1>Create an event to share expenses with your friends</h1>



                <h2>Select amount</h2>
                <label>Sum € :</label>
                <input className="form-control" type='text' />
                </div>
                <div className="row">
                <div className="col-md-6 col-md-offset-3">
                <h2>Where are you going</h2>
                <label>Location</label>
                <input className="form-control" type='text' />
                <label>Start date</label>
                <input className="form-control" type='date' />
                <label>Settle date</label>
                <input  className="form-control"  type='date' />
                <br />
                <button className='btn btn-success btn-lg'>Create!</button>
                </div>

              </div>
              </div>

            </div>

     </div>
     <div className="col-md-2"></div>
   </div>



      </div>

    </div>
  );
};

export default Dashboard;
