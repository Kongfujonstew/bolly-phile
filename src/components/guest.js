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
          <div className="flexContainer logoPosition tealBackground">
            <img src="../images/b.png" className="bPicStyling"/>
            <div className="logoText bollyFont largeFont">olly-phile</div>
          </div>








          <div className="absoluteCenter oneThirdWidth oneFifthHeight">
            <div className="loginStyling loginPadding whiteBackground">
              <div className="centerText"><text>Welcome to  <text className="bollyFont">Bollyphile</text>. Now you're in Bollywood.</text></div>
              {this.state.showWarning ? <text>Warning</text>: <text> </text>}

              <form
                onSubmit={this.createOrLoginMember.bind(this)}
              >
                <div className="formPadding">Username:<div><input 
                  type="text" name="memberName"
                  onChange={this.handleMemberNameInput.bind(this)}
                /></div></div>
                <div className="formPadding">Email:<div><input 
                  type="email" name="memberEmail"
                  onChange={this.handleMemberEmailInput.bind(this)}
                /></div></div>
                <div className="formPadding">Pass:<div><input 
                  type="password" name="memberPassword"
                  onChange={this.handleMemberPassInput.bind(this)}
                /></div></div>
                <div className="signupButtonStyling centerText tealBackground hover"
                  onClick={this.createOrLoginMember.bind(this)}
                >Become a Bolly-phile member</div>

              </form>
            </div>
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
