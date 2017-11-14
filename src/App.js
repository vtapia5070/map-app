import React, { Component } from 'react';
import './App.css';
import Map from './Map.js';
import NavBar from './NavBar.js';
import { getLocation } from './Utils.js'


class App extends Component {

  componentWillMount () {

    this.setState({
      currentLocation: {
        longitude: 0,
        latitude: 0,
        address: 'city'
      }
    });

  }

  componentDidMount () {
    getLocation.then((loc) => {
      console.log('loc:', loc);
      this.setState({
        currentLocation: loc
      });
    });

  }

  render() {
    const {
      currentLocation
    } = this.state;

    return (
      <div className="wrapper">
        <NavBar
          address={currentLocation.address}
        />
        <Map
          currLongitude={currentLocation.longitude}
          currLatitude={currentLocation.latitude}
         />
      </div>
    );
  }
}

export default App;
