import React from 'react';
import {render} from 'react-dom';
import YouTube from 'react-youtube';

export class MyBolly extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myBolly: {}
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      myBolly: nextProps.myBolly
    })
  }

  handleReturn (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log('do validate');
    }
  }

  render () {
    const opts = {
      playerVars: {
        autoplay: 1
      }
    };

    return (
      <div className="bollySize whiteBackground floatBorder shadow">
        <div className="titleTextStyling purple">My Bolly</div>

        {this.state.myBolly.id ?
          <div >
            <YouTube
              className="videoSize"
              videoId={this.state.myBolly.id.videoId} 
              opts = {opts}
            />
          </div>:

          <div className="titleTextStyling purple">Please select a bolly>></div>

        }

      <div className="messageTextBoxStyling">
        <textArea
          className="textBoxStyling"
          onKeyPress={this.handleReturn}

        ></textArea>
        <text
          className="searchText purple hover"

        >Send Message</text>
      </div>



      </div>
    )
  }
}
            // onEnd={}
