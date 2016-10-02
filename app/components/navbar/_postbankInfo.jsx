import Immutable from 'immutable';
import React from 'react';
import { connect } from 'react-redux';

// action
import PostbankActionCreators from '../../actions/postbank-actions';

class PostBankInfo extends React.Component {
  static propTypes = {
    postbank: React.PropTypes.instanceOf(Immutable.map)
  }

  componentDidMount() {
    this.fetchPostBankInfo();
  }

  render() {
    if (!this.props.postbank.get('data')) {
      return <div>Loading...</div>;
    }

    const pbData = this.props.postbank.get('data');
    const accountOne = pbData.get('accounts').get('0');

    return (
      <div className='post-bank'>
        <div className='account-number'>
          { pbData.get('name') }
        </div>
        <div>
          <p>Account Number: <span>{ accountOne.get('accountNumber') }</span></p>
          <p>Funds: <span>{ accountOne.get('amount') }</span></p>
        </div>
      </div>
    );
  }

  fetchPostBankInfo = this.fetchPostBankInfo.bind(this);
  fetchPostBankInfo() {
    this.props.dispatch(PostbankActionCreators.fetch());
  }
}

const mapStateToProps = (state) => {
  return {
    postbank: state.postbank
  };
};

export default connect(mapStateToProps)(PostBankInfo);
