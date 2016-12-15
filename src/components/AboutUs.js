import React, { Component } from 'react';

export default class AboutUs extends Component {
    render() {
        return (
            <div className='the-mission'>
            <div id='about-me-placeholder'></div>
            
            <h2>Inspiration</h2>
            <p>    
              When creating applications with React and Redux, while state management may be concise, we found it difficult to handle asynchronicity without
              having to use 3rd party middlewares and external libraries. It seemed unnecessary to involve all of these plugins on top of Redux when RxJS alone
              could provide the same functionality and more.
            </p>

            <h2>Mission</h2>
              <p>
                We set out to create omnistream, a library that combines the efficiencies of RxJS observables to handle complex interactions and a centralized state management store.
              </p>
            </div>
        )
    }
}









