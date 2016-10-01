import React from 'react';

// components
import Navbar from '../navbar/_navbar';
import Accounts from '../accounts/_accounts';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showFriendOne: false
    };

    this.updateFriends = this.updateFriends.bind(this);

  }
render() {
  return (
    <div>
    <div>
      <Navbar />
    </div>
    <div>
    <Accounts />
    </div>
    <div>
    <div className="mainEvent">
    Create event!
    <div>

    <h2>
    Select amount

    </h2>
    <label>Sum € :</label>

    <input type="text" />
        <h2>Where are you going</h2>
        <label>Location</label>
        <input type="text" />
        <label>Start date</label>
        <input type="date" />

        <label>Settle date</label>
        <input type="date" />
        <button className="btn btn-success btn-lg">Create!</button>

        <div className="participants">

          {this.renderFriend()}
        </div>
    </div>
    </div>
    <div className="friendsList">
    <h3>Friends list</h3>
    <div className='avatar-round-micro-friend' ref="friend1"
    onClick={this.updateFriends}
    />
    <div className='avatar-round-micro-friend'  ref="friend2" />

    <div className='avatar-round-micro-friend'  ref="friend3" />

    <div className='avatar-round-micro-friend'  ref="friend4" />
    </div>

    </div>

    </div>
  );
  }
updateFriends() {
  this.setState({ showFriendOne: !this.state.showFriendOne });

}
renderFriend(){
  console.log(this.refs.friend1);
  if(this.state.showFriendOne){
    return <li><div className='avatar-round-micro-friend'/></li>;
  }
  return false;

}

};

export default Dashboard;
