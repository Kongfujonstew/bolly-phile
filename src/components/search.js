import React from 'react';
import {render} from 'react-dom';

const axios = require('axios');

const API_KEY = require('../../evariables.js').API_KEY;

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      bollies: []
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      bollies: nextProps.bollies
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

  handleBollyClick () {
    this.props.handleSelectBolly(this.state.bollies[0])
  }

  searchYoutube () {
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
    .then(function (response) {
      console.log(response);
      that.props.addBollySelections(response.data.items);
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
          {this.state.bollies.map((bolly, index) =>
            <div className="thumbStyling hover" key={index}
              onClick={this.handleBollyClick.bind(this)}
            >
              <img src={bolly.snippet.thumbnails.default.url}/>

            </div>
          )}
        </div>

      </div>
    );
  }
}
