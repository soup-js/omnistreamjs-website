import React, { Component } from 'react';

export default class AboutUs extends Component {
    render() {
        return (
            <div className='the-mission'>
                <div id='about-me-placeholder'></div>
                <p>
                  RxJS is a functional reactive programming library growing in popularity and used in large corporations such as Square, Asana, and Netflix.
                  It allows you to cancel, combine, and transform complex asynchronous actions with ease.
                </p>
                <p className='about-us'>
                    We set out to combine the eloquence of RxJS with the speed and efficiency of React and are proud to introduce omnistream, a state
                   management library that includes react component bindings and time-travel debugging tools.
              </p>
            </div>
        )
    }
}









