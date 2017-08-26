import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/index'
import { Search } from './search';
import { SearchLiveBollies } from './SearchLiveBollies';
import { Bolly } from './Bolly';
import { Messages } from './Messages';


class Container extends React.Component {
  addSearchResults (bollyArray) {
    console.log('add SR called')
    this.setState({
      searchResults: bollyArray
    })
  }

  handleSelectSearchResult (video) {
    console.log('HSSR called')
    this.setState({
      currentVideo: video
    })
  }

  render () {
    return (
      <div className="fullHeight memberMargin bBackground">
        <div className="flexContainer logoPosition tealBackground">
          <img src="../images/b.png" className="bPicStyling"/>
          <div className="nameText bollyFont largeFont">{this.props.memberName}</div>
        </div>

        <div className="addBollySize whiteBackground floatBorder shadow">
          <span
            className="titleTextStyling purple hover"
            onClick={this.props.showSearch}
          >Search Bollies</span>
          <span
            className="titleTextStyling purple hover"
            onClick={this.props.showLiveBollies}
          >Watch a LBolly, searchEntry = {this.props.searchEntry}</span>

          {this.props.showSearch ? <Search />: <SearchLiveBollies />}

        </div>

        <div className="flexContainer">
          <Messages/>
          <Bolly />
        </div>

      </div>
    )
  }
}


let mapStateToProps = (state) => {
  return {
    memberName: state.memberName,
    showSearch: state.showSearch,
    searchEntry: state.searchEntry,//only for testing
    searchResults: state.searchResults,
    bollyIsLive: state.bollyIsLive,
    bollyOwner: false
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    showSearch: () => {actionCreators.showSearch()},
    showLiveBollySearch: () => {actionCreators.showLiveBollySearch()}
  };
};

export const Member = connect(mapStateToProps, mapDispatchToProps)(Container);
