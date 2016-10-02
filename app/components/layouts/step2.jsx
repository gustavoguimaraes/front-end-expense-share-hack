import React from 'react';
import { Link } from 'react-router';

// components
import Navbar from '../navbar/_navbar';
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
      <div>
        <div>
          <Navbar />
        </div>
      <div className="row">
       <div className="col-md-2">
       </div>
       <div className="col-md-8">
       <div className="infoBoxes">
       </div>

      <div className='step-2'>
        <div className='mainEvent'>
        <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <p>Closest stations provided by DB API</p>
          <p>Hint: Click on them to read more</p>
          { this.renderIframe() }

          <h3>You have decided to travel to: <strong className='travelInfoLink'>Berlin</strong></h3>
          <div>
            { this.renderStations() }
          </div>
          <div>
            <h2>Select amount</h2>
            <h4>Total budget is: <b> 150 € </b></h4>

            <h2>Settle date: 2016-10-13</h2>
            <ListFriends name='Evelyn' /> <h4> commited 75 € </h4>
            <ListFriends name='T-rex' /> <h4> commited 75 € </h4>
            <br />
            <Link to={ '/step-3' }><div className='form-group btn btn-success btn-lg'>Settle!</div></Link>
          </div>
          </div>
          </div>
        </div>
      </div>
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
      return <h3 key={ el.id } onClick={ this._handleIframe }><span className="glyphicon glyphicon-map-marker"></span>{ el.name }</h3>;
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
