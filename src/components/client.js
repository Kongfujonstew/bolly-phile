import React from 'react';
import {render} from 'react-dom';
// import {Member} from './member';
// import {Guest} from './guest';

export class Client extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }


  render () {
    if (!this.state.loggedIn) {
      return this._renderGuest();
    } else {
      return this._renderMember();
    }
  }

  _renderGuest () {
    return (
      <div className="fullHeight bollyBackground">
        <h1>OHYadEfHGuest</h1>
      </div>
    )
  }

  _renderMember () {
    return (
      <div>
        <h1>OHYadEfH</h1>
      </div>
    )
  }




}