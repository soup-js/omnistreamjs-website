import React, { Component } from 'react';

export default class Menu extends Component {

  render() {
    return (
        <nav className='hamburger-navbar'>
        <div className="hamburger-item">
          <a href="#">HOME</a>
        </div>
        <div className="hamburger-item">
          <a href="#about-me-placeholder">ABOUT</a>
        </div>
        <div className="hamburger-item">
          <a href="mailto:omnistreamjs@gmail.com">CONTACT</a>
        </div>
        </nav>
    )
  };
}



