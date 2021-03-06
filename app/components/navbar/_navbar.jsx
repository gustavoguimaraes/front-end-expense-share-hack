import React from 'react';

// components:
import NavDropdown from './_nav-dropdown';
import PostBankInfo from './_postbankInfo';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showDropdown: false };

    this._handleDropdown = this._handleDropdown.bind(this);
  }

  render() {
    return (
      <div className='navbar'>
        <div className='navbar-header'><span className="firstLetter">x</span>Pense Share Hack</div>
        <div className='navbar-user-section' onMouseEnter={ this._handleDropdown } onMouseLeave={ this._handleDropdown } >
          <div className='avatar-round-micro' />
          <div>
            <div>Your account</div>
          </div>
          <div className='caret' />
          { this.renderDropdown() }
        </div>
        <PostBankInfo />
      </div>
    );
  }

// private
  _handleDropdown() {
    this.setState({ showDropdown: !this.state.showDropdown });
  }

  renderDropdown() {
    if (this.state.showDropdown) {
      return <NavDropdown />;
    }
    return false;
  }
}

export default Navbar;
