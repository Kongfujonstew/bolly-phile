import React from 'react';
import {render} from 'react-dom';

export class Guest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // memberLogin: false
    }
  }

  toggleMemberLogin () {
    this.setState({
      memberLogin: !this.state.memberLogin
    })
  }







  render () {
    if (this.state.memberLogin) {
      return <MemberLogin 
        toggleMemberLogin={this.toggleMemberLogin.bind(this)}
      />
    } else {
      return (
        <div className="fullHeight">
          <h1>OHYadEfHGuest</h1>
        </div>
      )
    }
  }
}
