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
      showSearch: true,
      bollySelections: [],
      ongoingBollies: [],
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

  showOngoingBollies () {
    this.setState({
      showSearch: false
    })
  }

  addBollySelections (bollyArray) {
    this.setState({
      bollySelections: bollyArray
    })
  }

  handleSelectBolly (bolly) {
    this.setState({
      myBolly: bolly
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
            onClick={this.showOngoingBollies.bind(this)}
          >Browse Ongoing Bollies {this.state.bollySelections.length}</span>

          {this.state.showSearch? 
            <Search 
              addBollySelections={this.addBollySelections.bind(this)}
              handleSelectBolly={this.handleSelectBolly.bind(this)}
              bollies={this.state.bollySelections}
            />:
            <OngoingBollies 
              bollies={this.state.ongoingBollies}
            />
          }


        </div>

        <div className="flexContainer">
          <BollyMessages/>
          <MyBolly 
            myBolly={this.state.myBolly}
          />
        </div>

      </div>
    )
  }
}
