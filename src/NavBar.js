import React, { Component } from 'react';
import './NavBar.css';


class NavBar extends Component {

    componentWillMount () {
        this.setState({
            address: this.props.address
        });
    }

    componentWillReceiveProps (nextProps) {

        this.setState({
            address: nextProps.address
        });
    }

  render() {

    return (
      <div className="navBar">
        <nav>
          <div className="logo">E A T R</div>
          <input className="locationInput" placeholder={this.state.address} />
        </nav>
      </div>
    );
  }
}

export default NavBar;
