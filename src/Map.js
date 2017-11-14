import React, { Component } from 'react';
import './Map.css';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {

  componentWillMount () {
    this.setState({
      lat: this.props.currLatitude || 59.95,
      lng: this.props.currLongitude || 30.33
    })
  }

  componentWillReceiveProps (nextProps) {

    this.setState({
        lat: nextProps.currLatitude || 59.95,
        lng: nextProps.currLongitude || 30.33
    });

  }

  // TODO: update map center after initial mount
  render() {

    const center = {
      lat: this.state.lat,
      lng: this.state.lng
    };

    return (
      <div className="mapContainer">
        <GoogleMapReact
          defaultCenter={center}
          defaultZoom={this.props.zoom || 11}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
