import React, { Component } from 'react';

export default class Diagram extends Component {
  render() {
    return (
      <div id='rows'>
        <div className='row row1'>
          <div className='text'>
            <div className='innerText'>
              <hr />
              <h2>General Flow</h2>
              <p>All starts with actions being dispatched to the omnistream. The omnistream contains all of the actions sent within the application.
              From there, these actions are sent to filtered action streams, which correspond to user-defined actions. When combined with reducers, the action streams
              become state streams, which always contain the most up-to-date copy of the relevant application state. The state update triggers a re-render
              of all components subscribed to that state stream.</p>
              <hr className='bottom-line' />
            </div>
          </div>
          <div className='image'><img className='simple-image' src='./images/simple-diagram.png' /></div>
        </div>

        <div className='row row2'>
          <div className='text'>
            <div className='innerText'>
              <hr />
              <h2>Soup Team Six</h2>
              <p>Hashtag blue bottle migas cray iPhone. Dreamcatcher hexagon kale chips, hell of copper mug pinterest disrupt four loko listicle roof party skateboard. Tofu disrupt fashion axe typewriter, unicorn banh mi cold-pressed literally crucifix. Distillery mumblecore chartreuse occupy. Kombucha kale chips you probably haven't heard of them, dreamcatcher man bun tattooed iceland green juice umami 8-bit vegan cardigan beard wayfarers.</p>
              <hr className='bottom-line' />
            </div>
          </div>
          <div className='image'><img className='simple-image' src='./images/simple-diagram.png' /></div>
        </div>

        <div className='row row1'>
          <div className='text'>
            <div className='innerText'>
              <hr />
              <h2>Soup Team Six</h2>
              <p>Hashtag blue bottle migas cray iPhone. Dreamcatcher hexagon kale chips, hell of copper mug pinterest disrupt four loko listicle roof party skateboard. Tofu disrupt fashion axe typewriter, unicorn banh mi cold-pressed literally crucifix. Distillery mumblecore chartreuse occupy. Kombucha kale chips you probably haven't heard of them, dreamcatcher man bun tattooed iceland green juice umami 8-bit vegan cardigan beard wayfarers.</p>
              <hr className='bottom-line' />
            </div>
          </div>
          <div className='image'><img className='simple-image' src='./images/simple-diagram.png' /></div>
        </div>

      </div>
    )
  }
}


