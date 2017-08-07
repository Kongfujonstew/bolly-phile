import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import {Member} from './member';
import url from '../../evariables';

export class Guest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMemberLogin: false,
      showWarning: false,
      memberName: '',
      memberId: '',
      memberPassword: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      memberName: this.props.memberName,
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

    let input = {
      membername: this.state.memberName,
      memberpassword: this.state.memberPassword
    }

    console.log(input.membername, input.memberpassword);

    let query = `
      mutation CreateNewMember ($input: MemberInput) {
        createMember (input: $input) {
          id,
          membername

        }
      }
    `;

    // let options = {
    //   query: CreateNewMember,
    //   operationName: createMember,
    //   variables: { input: input}
    // }

    axios.post(url.graphql, {
      query: query,
      variables: {input:input}
    }).then((response) => {
      console.log(response);
      if (!response.data.data.createMember) {
        console.log('no createMember Data');
      } else {
        this.props.setMemberName(this.state.memberName);
        this.props.toggleMemberLogin();
      }
    })
    .catch(function (error) {
      console.log(error);
    })
  }


  render () {
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

              <div>
                {this.state.showMemberLogin ?
                  <div className="signupButtonStyling centerText maroonBackground hover"
                    onClick={this.createOrLoginMember.bind(this)}
                  >Members Login</div>:
                  <div className="flexContainer"><div className="signupButtonStyling centerText tealBackground hover"
                    onClick={this.createOrLoginMember.bind(this)}
                  >Become a Bolly-phile</div>
                  <div className="signupButtonStyling centerText maroonBackground hover"
                    onClick={this.toggleShowMemberLogin.bind(this)}
                  >Members Login</div></div>
                }
              </div>
            </form>

          </div>
        </div>
      </div>
    )
  }
}
