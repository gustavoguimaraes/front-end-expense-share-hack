import React from 'react';
import { Link } from 'react-router';

// components
import ListFriends from './_listFriends';

class Step2 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showIframe: false
    };
  }

  render() {
    return (
      <div className='step-2'>
        <div className='mainEvent'>
          <p>Closest stations provided by DB API</p>
          <p>Hint: Click on them to read more</p>
          { this.renderIframe() }
          <h3>You have decided to travel to: <strong className='travelInfoLink'>Berlin</strong></h3>
          <div>
            { this.renderStations() }
          </div>
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

// private
  _handleIframe = this._handleIframe.bind(this);
  _handleIframe() {
    this.setState({ showIframe: !this.state.showIframe });
  }

  renderIframe() {
    if (this.state.showIframe) {
      return <iframe className='travelInfo' src='http://www.css3.se/2016/10/01/info-about-berlin-css-meetups/'></iframe>;
    }
    return false;
  }

  renderStations() {
    const arr = this.berlinTrainStationData().StopLocation;

    return arr.map((el) => {
      return <h3 key={ el.id } onMouseOver={ this._handleIframe }>{ el.name }</h3>;
    });
  }

  berlinTrainStationData() {
    return {
      StopLocation: [
        {
          name: 'Berlin Hbf',
          lon: '13.369548',
          lat: '52.525589',
          id: '008011160'
        },
        {
          name: 'Berlin Südkreuz',
          lon: '13.365314',
          lat: '52.475042',
          id: '008011113'
        },
        {
          name: 'Berlin-Spandau',
          lon: '13.197530',
          lat: '52.534470',
          id: '008010404'
        },
        {
          name: 'Berlin Gesundbrunnen',
          lon: '13.388515',
          lat: '52.548961',
          id: '008011102'
        },
        {
          name: 'Berlin Ostbahnhof',
          lon: '13.434567',
          lat: '52.510972',
          id: '008010255'
        }
      ]
    };
  }
}

export default Step2;
