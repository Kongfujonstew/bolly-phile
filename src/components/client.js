import React from 'react';
import {render} from 'react-dom';

import {Member} from './member';
import {Guest} from './guest';


export class Client extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      memberName: ''
    }
  }

  toggleMemberLogin () {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  setMemberName (name) {
    this.setState({
      memberName: name
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
        setMemberName={this.setMemberName.bind(this)}
      />
    )
  }

  _renderMember () {
    return (
      <Member 
        toggleMemberLogin={this.toggleMemberLogin.bind(this)}
        memberName={this.state.memberName}
      />
    )
  }
}
