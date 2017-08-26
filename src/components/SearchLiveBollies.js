import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';

export class LiveBollies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liveBollies: []
      // searchTerm: ''
    }
  }

  componentWillMount () {
    this.setState({
      liveBollies: this.props.liveBollies
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      liveBollies: nextProps.liveBollies
    });
  }

  getAllBollies () {
    let query = `
      query AllBollies {
        allBollies {
          id,
          title,
          youtubeurl,
          streamtime,
          jsondata
        }
      }
    }`

    axios.post(url.graphql, {
      query: query
    }).then((response) => {
      console.log(response);
    })


  }

  handleSearchTermChange (e) {
    this.setState({
      searchTerm: e.target.value
    })
  }

  searchBolliesByUser () {
    //
  }


  render () {
    return (
      <div className="searchBoxMargins">

        <textArea
          className="searchBoxStyling"
          onChange={this.handleSearchTermChange.bind(this)}
        ></textArea>
        <span
          className="searchText purple hover"
          onClick={this.searchBolliesByUser.bind(this)}
        >Search bollies by user</span>

        <div className="flexContainer">
          {this.state.liveBollies.map((thumb, index) =>
            <div className="thumb" key={index}>
              <img src={thumb.snippet.thumbnails.default.url}/>

            </div>
          )}
        </div>

      </div>
    )
  }
}
