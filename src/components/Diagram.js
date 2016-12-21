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
              <p>
                All starts with the omnistream, the "single source of truth"" for application state. The omnistream contains all of the actions sent within the application.
              From there, these actions are sent to <span id='important'>filtered action streams</span>, which correspond to user-defined actions. When combined with reducers, the action streams
              become <span id='important'>state streams</span>, which contain updated copies of the relevant application state. <span id='important'>Reactive components</span>, our extension of the native
              react component class, receive these copies of state as props. When an action or observable stream is dispatched from the UI, it flows from the
              omnistream into the network of streams that trigger re-renders accordingly.

              </p>
              <hr className='bottom-line' />
            </div>
          </div>
          <div className='image'><img className='simple-image' src='./images/simple-diagram.png' /></div>
        </div>

        <div className='row row2'>
          <div className='text'>
            <div className='innerText'>
              <hr />
              <h2>Time Travel Debugging</h2>
              <p>With our time travel debugging tool, you can easily revert to previous versions of your application state to quickly identify bugs in your code.
                Just add omnistream's <span id='important'>Timeline</span> component within your React application to enable this feature.  When you drag and drop the <span id='important'>slider</span> within the component,
                the application is reverted to its initial state and fast forwarded to your selected action. Details about the selected action type are visible above the timline.
              </p>
              <hr className='bottom-line' />


            </div>
          </div>
          <div className='image'><img className='simple-image' src='./images/gif.gif' /></div>
        </div>

        <div className='row row1'>
          <div className='text'>
            <div className='innerText'>
              <hr />
              <h2>Getting Started witn omnistream is easy!</h2>
              <p>
                Simply instantiate an omnistream. Wrap your root component in a stream provider component and pass the omnistream down
                as props. All components in your app should now have access to the native omnistream features and components will be able to dispatch individual
                actions and observable streams.
              </p>
              <hr className='bottom-line' />
            </div>
          </div>
          <div className='image'><img className='simple-image' src='./images/code.png' /></div>
        </div>

      </div>
    )
  }
}


