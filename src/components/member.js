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
    console.log('member mount')
    this.setState({
      memberName: this.props.memberName,
    })
    //graphQL query here to get ongoing bollies
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextState);
  // }

  showSearch () {
    console.log('showsearch fired');
    this.setState({
      showSearch: true
    })
  }

  justC () {
    console.log('jc')
  }

  showLiveBollies () {
    console.log('slb clicked')
    this.setState({
      showSearch: false
    })
  }

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
          >Watch a LBolly {this.state.searchResults.length}</span>

          {this.state.showSearch ? 
            <Search 
              searchResults={this.state.searchResults}
              addSearchResults={this.addSearchResults.bind(this)}
              handleSelectSearchResult={this.handleSelectSearchResult.bind(this)}
            />:
            <LiveBollies 
              liveBollies={this.state.liveBollies}
              addSearchResults={this.addSearchResults.bind(this)}
              handleSelectSearchResult={this.handleSelectSearchResult.bind(this)}
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
