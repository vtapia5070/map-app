import React, { Component } from 'react';
import './App.css';
import Map from './Map.js';
import NavBar from './NavBar.js';
import { getLocation } from './Utils.js'


class App extends Component {

  componentWillMount () {

    this.setState({
      currentLocation: {}
    });

  }

  componentDidMount () {

    const currentLocation = getLocation();

    this.setState({
      currentLocation
    });


  }

  render() {

    return (
      <div className="wrapper">
        <NavBar
          address={this.state.currentLocation.address || 'city'}
        />
        <Map />
      </div>
    );
  }
}

export default App;
