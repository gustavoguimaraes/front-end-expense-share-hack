import React from 'react';

class DashboardListFriends extends React.Component {
  static propTypes = {
    name: React.PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = { showFriend: false };

    this._handleFriends = this._handleFriends.bind(this);
  }

  render() {
    return (
      <div>
        <div className='participants'>
          { this.renderFriend() }
        </div>
        <div>
          <p>{ this.props.name }</p>
          <div className='avatar-round-micro-friend' onClick={ this._handleFriends }  />
        </div>
      </div>
    );
  }

  _handleFriends() {
    this.setState({ showFriend: !this.state.showFriend });
  }

  renderFriend() {
    if (this.state.showFriend) {
      return <li><div className='avatar-round-micro-mini' /></li>;
    }
    return false;
  }
}

export default DashboardListFriends;
