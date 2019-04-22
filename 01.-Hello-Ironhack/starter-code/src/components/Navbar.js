// Module dependencies
import React, { Component } from 'react';

/// Navbar
class Navbar extends Component {

  render() {  
    return (
      <nav className="nav-bar">
        <img src={process.env.PUBLIC_URL + "images/ironhack-logo.svg"} alt="ih-logo"/>
        <img src={process.env.PUBLIC_URL + "images/menu-top.svg"} alt="burger"/>
      </nav>
    )
  }
}

// Export
export default Navbar;
