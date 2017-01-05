import React, { Component } from 'react';
import Menu from './Menu'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = { renderHamburger: false }
    this.hamburger = this.hamburger.bind(this)
  }

  hamburger() {
    this.state.renderHamburger === true ? this.setState({ renderHamburger: false }) : this.setState({ renderHamburger: true })
  }

  render() {
    return (
      <div>
      <div className='navbar'>
        <img className='logo' src='./images/omni_logo.png'></img>
        <i onClick={this.hamburger} id='hamburger' className='fa fa-bars' />
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
         { this.state.renderHamburger === true ? <Menu className= 'menu'/> : undefined }
      </div>  
      
    )
  };
}



