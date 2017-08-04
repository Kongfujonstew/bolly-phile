import React from 'react';
import {render} from 'react-dom';

import {Member} from './member';
import {Guest} from './guest';


export class Client extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  toggleMemberLogin () {
    this.setState({
      loggedIn: true
    })
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
      <Guest 
        toggleMemberLogin={this.toggleMemberLogin.bind(this)}
      />
    )
  }

  _renderMember () {
    return (
      <Member 
        toggleMemberLogin={this.toggleMemberLogin.bind(this)}
      />
    )
  }
}
