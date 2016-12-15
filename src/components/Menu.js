var Menu = require('react-burger-menu');
import React, { Component } from 'react';

export default class men extends Component {
  render() {
    return (
      <Menu>
        <a id="home" className="menu-item" href="#">Home</a>
        <a id="about" className="menu-item" href="#about-me-placeholder">About</a>
        <a id="contact" className="menu-item" href="mailto:omnistreamjs@gmail.com">Contact</a>
      </Menu>
    );
  }
};