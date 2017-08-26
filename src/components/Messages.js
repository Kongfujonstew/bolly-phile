import React from 'react';
import {render} from 'react-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/index';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render () {
    return (
      <div className="bollySize whiteBackground floatBorder shadow">
        <div className="titleTextStyling purple">Bolly Messages</div>



      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    showSearch: () => {actionCreators.showSearch()}, //placeholder
  };
};

export const Messages = connect(mapStateToProps, mapDispatchToProps)(Container);
