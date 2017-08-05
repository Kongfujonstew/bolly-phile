import React from 'react';
import {render} from 'react-dom';

export class LiveBollies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
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
          {this.props.bollies.map((thumb, index) =>
            <div className="thumb" key={index}>
              <img src={thumb.snippet.thumbnails.default.url}/>

            </div>
          )}
        </div>

      </div>
    )
  }
}
