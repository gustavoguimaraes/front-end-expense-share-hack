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

        <div className="row">
         <div className="col-md-2">
         <div className='friendsList'>
           <p>Friends list</p>
           <ListFriends name='Friend 1' />
           <ListFriends name='Friend 2' />
           <ListFriends name='Friend 3' />
           <ListFriends name='Friend 4' />
         </div>
</div>
   <div className="col-md-8 ">

        <div className='mainEvent'>
        <div className="infoBoxes">
        <span className="glyphicon glyphicon-check">
   </span><span>  Share cost with friends</span><br />
        <span className="glyphicon glyphicon-check">
   </span><span>Transparent overview of expenses</span><br />


        <span className="glyphicon glyphicon-check">
   </span><span>Settle debts and surplus funds automatically with Postbank API</span>
   </div><br />
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
              <Link to={ '/step-2' } ><div className='btn btn-success btn-lg'>Create!</div> </Link>

              </div>

            </div>

          </div>
        </div>
        </div>
        </div>
      </div>
    </div>

  );
};

export default Step1;
