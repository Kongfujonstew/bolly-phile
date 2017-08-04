import React from 'react';
import {render} from 'react-dom';
import url from '../../evariables.js';

export class Guest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      showWarning: false,
      memberName: '',
      memberEmail: '',
      memberPassword: ''
    }
  }

  handleMemberNameInput (e) {
    this.setState({
      memberName: e.target.value
    })
  }  

  handleMemberEmailInput (e) {
    this.setState({
      memberEmail: e.target.value
    })
  }  

  handleMemberPassInput (e) {
    this.setState({
      memberPassword: e.target.value
    })
  }

  createOrLoginMember (e) {
    e.preventDefault();
    let memberName = this.state.memberName;
    let memberEmail = this.state.memberEmail;
    let memberPassword = this.state.memberPassword;

    console.log(memberPassword, memberName, memberEmail);

    let query = `
      mutation createOrLoginMember
        where membername {

        }
        email
        password

    `;
    // axios.post({
    //   url: url.graphql,
    //   query: query
    // }).then(member => {
    //   if (member.isLoggedIn) {
    //     this.setState({
    //       loggedIn: true
    //     })
    //   }
    // })

  }


  render () {
    if (this.state.memberLogin) {
      return this._renderMemberLogin();
    } else {
      return (
        <div className="fullHeight bollyBackground">
          <div>
            <h1>Bollywood at its best</h1>
            {this.state.showWarning ? <text>Warning</text>: <text>No Warning</text>}

            <form
              onSubmit={this.createOrLoginMember.bind(this)}
            >
              <div>Username:<input 
                type="text" name="memberName"
                onChange={this.handleMemberNameInput.bind(this)}
              /></div>
              <div>Email:<input 
                type="email" name="memberEmail"
                onChange={this.handleMemberEmailInput.bind(this)}
              /></div>
              <div>Pass:<input 
                type="password" name="memberPassword"
                onChange={this.handleMemberPassInput.bind(this)}
              /></div>
              <div><input type="submit" value="Register"/></div>
            </form>

          </div>
        </div>
      )
    }
  }

  _renderMemberLogin () {
    return <MemberLogin 
      toggleMemberLogin={this.toggleMemberLogin.bind(this)}
    />
  }
}
