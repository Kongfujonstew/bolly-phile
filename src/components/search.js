import React from 'react';
import {render} from 'react-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/index';


class Container extends React.Component {
  handleReturn (e) {
    let that = this;//necessary?
    if (e.key === 'Enter') {
      e.preventDefault();
    }
    this.props.searchYoutube;
  }

  handleResultClick (index) {
    console.log('hRC called')
    this.props.handleSelectSearchResult(this.state.searchResults[index])
  }

  render () {
    return (
      <div className="searchBoxMargins"
      >
        <textArea
          className="textBoxStyling"
          placeholder={this.props.searchEntry}
          onChange={this.props.setSearchEntry}
          onKeyPress={this.handleReturn.bind(this)}
        ></textArea>
        <text
          className="searchText purple hover"
          onClick={this.props.searchYoutube}
        >Search</text>

        <div className="flexContainer">
          {this.props.searchResults.map((bolly, index) =>
            <div className="thumbStyling hover" key={index}
              onClick={this.props.selectSearchResult(bolly)}
            >
              <img src={bolly.imageURL} alt={"bolly image!"}/>

            </div>
          )}
        </div>

      </div>
    );
  };
};

let mapStateToProps = (state) => {
  return {
    searchEntry: state.searchEntry,
    searchResults: state.searchResults
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setSearchEntry: () => {dispatch(actionCreators.setSearchEntry(e))},
    searchYoutube: () => {dispatch(actionCreators.searchYoutube(this.props.searchEntry))},
    selectSearchResult: (bolly) => {dispatch(actionCreators.selectSearchResult(bolly))}
  };
};

export const Search = connect(mapStateToProps, mapDispatchToProps)(Container);
