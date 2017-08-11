import React from 'react';
import {render} from 'react-dom';
import {Search} from './search';
import {LiveBollies} from './livebollies';
import {MyBolly} from './mybolly';
import {BollyMessages} from './bollymessages';


export class Member extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memberName: '',
      showSearch: true, //otherwise show live bollies
      searchResults: [],
      liveBollies: [],
      inBolly: false,
      currentVideo: {},
      myBolly: {},
    }
  }

  componentWillMount() {
    this.setState({
      memberName: this.props.memberName,
    })
    //graphQL query here to get ongoing bollies
  }

  showSearch () {
    this.setState({
      showSearch: true
    })
  }

  showLiveBollies () {
    this.setState({
      showSearch: false
    })
  }

  addSearchResults (bollyArray) {
    this.setState({
      searchResults: bollyArray
    })
  }

  handleSelectSearchResult (video) {
    console.log(video);
    this.setState({
      currentVideo: video
    })
  }

  render () {
    return (
      <div className="fullHeight memberMargin bBackground">
        <div className="flexContainer logoPosition tealBackground">
          <img src="../images/b.png" className="bPicStyling"/>
          <div className="nameText bollyFont largeFont">{this.state.memberName}</div>
        </div>

        <div className="addBollySize whiteBackground floatBorder shadow">
          <span
            className="titleTextStyling purple hover"
            onClick={this.showSearch.bind(this)}
          >Search Bollies</span>
          <span
            className="titleTextStyling purple hover"
            onClick={this.showLiveBollies.bind(this)}
          >Browse Ongoing Bollies {this.state.searchResults.length}</span>

          {this.state.showSearch? 
            <Search 
              addSearchResults={this.addSearchResults.bind(this)}
              handleSelectSearchResult={this.handleSelectSearchResult.bind(this)}
              searchResults={this.state.searchResults}
            />:
            <LiveBollies 
              liveBollies={this.state.liveBollies}
            />
          }


        </div>

        <div className="flexContainer">
          <BollyMessages/>
          <MyBolly 
            currentVideo={this.state.currentVideo}
          />
        </div>

      </div>
    )
  }
}
