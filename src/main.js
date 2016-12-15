import "babel-polyfill"
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Navbar from './components/Navbar'
import Diagram from './components/Diagram'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'

ReactDOM.render(
  <div className='everything'>
    <Navbar />
    <App />
    <AboutUs />
    <Diagram />
    <Footer />
  </div>,
  document.getElementById('root')
);