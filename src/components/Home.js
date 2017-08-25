import React from 'react';
import {render} from 'react-dom';
// import axios from 'axios';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as createActions from '../redux/actions/index';
import { changeLoggedInStatus, changeName /*, createOrLoginMember*/} from '../redux/actions/index';

import url from '../../evariables';

class Container extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props.showMemberLogin);
  }


  render () {
    let guestMessage = <text>Welcome to  <text className="bollyFont">Bolly-phile </text>
      . . . Now you <text className="bollyFont">know</text> youre in Bollywood.
      </text>;

    let memberMessage = <text><text className="bollyFont"> Bolly-phile </text>members login. &nbsp; Click <text
      className="red hover"
      onClick={this.props.showCreateNewLogin} 
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
              {this.props.showMemberLogin ? memberMessage : guestMessage}
            </div>

            <form>
              <div className="formPadding">Username<div><input 
                onChange={() => console.log('form change')}
              /></div></div>

              <div className="formPadding">Pass<div><input 
                onChange={() => console.log('form change')}
              /></div></div>

              <div>
                {this.props.showMemberLogin ?
                  <div className="signupButtonStyling centerText maroonBackground hover"
                    onClick={this.props.changeMemberName}

                  >Members Login : {this.props.memberName}</div>:
                  <div className="flexContainer"><div className="signupButtonStyling centerText tealBackground hover"
                  >Become a Bolly-phile</div>
                  <div className="signupButtonStyling centerText maroonBackground hover"
                    onClick={this.props.showMemberLoginFunc}
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
  console.log('state on map:', state);
  return {
    loggedIn: state.loggedIn,
    memberName: state.memberName,
    showMemberLogin: state.showMemberLogin
  };
}

let mapDispatchToProps = (dispatch) => {
  return {
    login: () => {dispatch(createActions.login())},
    logout: () => {dispatch(createActions.logout())},
    showMemberLoginFunc: () => {dispatch(createActions.showMemberLogin())},
    showCreateNewLogin: () => {dispatch(createActions.showCreateNewLogin())},
    changeMemberName: () => {dispatch(createActions.changeMemberName('super!'))}
    // changeName: () => {dispatch(changeName(name))}
    // createOrLoginMember: () => {dispatch(createOrLoginMember())}
  }
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(Container);
