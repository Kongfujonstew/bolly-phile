import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeLoggedInStatus, changeName /*, createOrLoginMember*/} from '../redux/actions/index';

import url from '../../evariables';

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMemberLogin: false,
      showWarning: false,
      memberName: '', //change to memberNameInput
      memberId: '', //change to??
      memberPassword: '' //change to memberPassInput
    }
  }

//delete after all refs to memberName = this.props.memberName
  componentWillReceiveProps(nextProps) { 
    this.setState({
      memberName: this.props.memberName,
    })
  }

//keep for now
  toggleShowMemberLogin () {
    console.log('toggling M Login')
    this.setState({
      showMemberLogin: !this.state.showMemberLogin
    })
  }

//change this to memberNameInput
  handleMemberNameInput (e) {
    this.setState({
      memberName: e.target.value
    })
  }

//change to memberPassInput
  handleMemberPassInput (e) {
    this.setState({
      memberPassword: e.target.value
    })
  }

//this will go to this.props.createOrLoginMember - e ok? 
//two instances below


  render () {
    let guestMessage = <text>Welcome to  <text className="bollyFont">Bolly-phile </text>
      . . . Now you <text className="bollyFont">know</text> youre in Bollywood.
      </text>;

    let memberMessage = <text><text className="bollyFont"> Bolly-phile </text>members login. &nbsp; Click <text
      className="red hover"
      onClick={this.toggleShowMemberLogin.bind(this)} //leave for now
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

                  >Members Login</div>:
                  <div className="flexContainer"><div className="signupButtonStyling centerText tealBackground hover"

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

let mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    memberName: state.memberName
  };
}

let mapDispatchToProps = (dispatch) => {
  return {
    login: () => {dispatch(changeLoggedInStatus('LOGIN'))},
    logout: () => {dispatch(changeLoggedInStatus('LOGOUT'))},
    changeName: () => {dispatch(changeName(name))}
    // createOrLoginMember: () => {dispatch(createOrLoginMember())}
  }
}

const Home = connect(mapStateToProps, mapDispatchToProps)(Container);

export default Home;
