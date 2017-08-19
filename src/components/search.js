import React from 'react';
import {render} from 'react-dom';

import axios from 'axios';

const API_KEY = require('../../evariables.js').API_KEY;

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchResults: []
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('search');
    this.setState({
      searchResults: nextProps.searchResults
    });
  }

  handleReturn (e) {
    let that = this;
    if (e.key === 'Enter') {
      e.preventDefault();
    }
    // this.searchYoutube();
  }

  handleSearchTermChange (e) {
    console.log('handleSearchTermChange called')
    e.preventDefault();
    this.setState({
      searchTerms: e.target.value,
      selectedBolly: {}
    });
    console.log(this.state.searchTerm);
  }

  handleResultClick (index) {
    console.log('hRC called')
    this.props.handleSelectSearchResult(this.state.searchResults[index])
  }

  searchYoutube () {
    console.log('searching youtube')
    let query = this.state.searchTerms + 'hindu movie';
    let that = this;

    axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: API_KEY,
        q: query,
        maxResults: 5,
        part: 'snippet',
        type: 'video',
        videoEmbeddable: true
      }
    })
    .then((response) => {
      console.log(response);
      that.props.addSearchResults(response.data.items);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  render () {
    return (
      <div className="searchBoxMargins"
      >
        <textArea
          className="textBoxStyling"
          onChange={this.handleSearchTermChange.bind(this)}
          onKeyPress={this.handleReturn}
        ></textArea>
        <text
          className="searchText purple hover"
          onClick={this.searchYoutube.bind(this)}
        >Search</text>

        <div className="flexContainer">
          {this.state.searchResults.map((bolly, index) =>
            <div className="thumbStyling hover" key={index}
              onClick={this.handleResultClick.bind(this, index)}
            >
              <img src={bolly.snippet.thumbnails.default.url}/>

            </div>
          )}
        </div>

      </div>
    );
  }
}
