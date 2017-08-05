import React from 'react';
import {render} from 'react-dom';
import {Member} from './member';
import url from '../../evariables';

export class Guest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: true,
      showMemberLogin: false,
      showWarning: false,
      memberName: 'Steve',
      memberPassword: ''
    }
  }

  toggleLoggedIn () {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  toggleShowMemberLogin () {
    console.log('toggling M Login')
    this.setState({
      showMemberLogin: !this.state.showMemberLogin
    })
  }

  handleMemberNameInput (e) {
    this.setState({
      memberName: e.target.value
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
    if (this.state.loggedIn) {
      return <Member
        toggleLoggedIn={this.toggleLoggedIn.bind(this)}
        memberName={this.state.memberName}
      />
    } else {
      return this._renderWelcomePage();
    }
  }

  _renderWelcomePage () {
    let guestMessage = <text>Welcome to  <text className="bollyFont">Bolly-phile </text>
      . . . Now you <text className="bollyFont">know</text> youre in Bollywood.
      </text>;

    let memberMessage = <text><text className="bollyFont"> Bolly-phile </text>members login. &nbsp; Click <text
      className="red hover"
      onClick={this.toggleShowMemberLogin.bind(this)}
    >here</text> to sign up.</text>;

    return (
      <div className="fullHeight bollyBackground">
        <div className="flexContainer logoPosition tealBackground">
          <img src="../images/b.png" className="bPicStyling"/>
          <div className="logoText bollyFont largeFont">olly-phile</div>
        </div>


        <div className="absoluteCenter setWidth oneFifthHeight">
          <div className="loginStyling loginPadding">
            <div className="centerText">
              {this.state.showMemberLogin ? memberMessage : guestMessage}
            </div>

            <form>
              <div className="formPadding">Username<div><input 
                onChange={this.handleMemberNameInput.bind(this)}
              /></div></div>

              <div className="formPadding">Pass<div><input 
                onChange={this.handleMemberPassInput.bind(this)}
              /></div></div>

              <div className="flexContainer">
                {this.state.showMemberLogin ? null :
                  <div className="signupButtonStyling centerText tealBackground hover"
                    onClick={this.createOrLoginMember.bind(this)}
                  >Become a Bolly-phile</div>
                }
                <div className="signupButtonStyling centerText maroonBackground hover"
                  onClick={this.toggleShowMemberLogin.bind(this)}
                >Members Login</div>
              </div>
            </form>

          </div>
        </div>
      </div>
    )
  }
}
