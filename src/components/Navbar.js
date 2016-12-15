import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <img className='logo' src='./images/omni_logo.png'></img>
        <i id='hamburger' className='fa fa-bars'/>
        <nav className='right-navbar'>
          <div className="item-link">
            <a href="#">HOME</a>
          </div>
          <div className="item-link">
            <a href="#about-me-placeholder">ABOUT</a>
          </div>
          <div className="item-link">
            <a href="mailto:omnistreamjs@gmail.com">CONTACT</a>
          </div>
        </nav>
      </div>
    )
  };
}



