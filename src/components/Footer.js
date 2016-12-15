import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <div className='footer'>
        <nav className='footer-nav'>
          <div className="item-link-footer">
            <p className='profile'><span className='profile'>Brought to you by Team Soup: </span>
              <a className='profile' href="https://www.linkedin.com/in/dkwilson115"> Dave Wilson</a><span> / </span>
              <a className='profile' href="https://www.linkedin.com/in/anthony-sarno-92161761">Anthony Sarno</a><span> / </span>
              <a className='profile' href="https://www.linkedin.com/in/julia-aspinall">Julia Aspinall</a>
            </p>
          </div>
      
        </nav>
      </div>
    ) 
  }
}
