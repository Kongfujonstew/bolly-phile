import React from 'react';
import {render} from 'react-dom';
// import YouTube from 'react-youtube';

export class MyBolly extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myBolly: {},
      currentVideo: null,
      currentVideoId: '',
      player: {}
    }
  }

  componentDidMount() {
    this.setState({
      player: new YT.Player("player", {
          // height: '390',
          width: '518',
          videoId: null,
          playerVars: { 'autoplay': 1, 'controls': 0, 'rel': 0 }
        })
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentVideo.id.videoId !== this.state.currentVideoId) {
      console.log('called! nexp currentVideo', nextProps.currentVideo);
      this.setState({
        currentVideo: nextProps.currentVideo,
        currentVideoId: nextProps.currentVideo.id.videoId
      });
      this.state.player.cueVideoById({
        videoId: nextProps.currentVideo.id.videoId
      });
      // this.state.player.playVideo();
    }
  }

  onPlayerReady() {
    this.state.playVideo();
  }

  getPlayerTime () {
    // console.log(this.state.player.getCurrentTime());
  }

  test () {
    this.state.player.playVideo();
  }

  stopVideo() {
    this.state.player.stopVideo();
  }

  onPlayerStateChange(event) {
    // var that = this;
    // if (event.data == YT.PlayerState.PLAYING) {
    //   setTimeout(that.stopVideo, 6000);
    //   that.state.player.done = true;
    // }
  }

  handleReturn (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log('do validate');
    }
  }

  render () {
    return (
      <div className="bollySize whiteBackground floatBorder shadow">
        <div className="titleTextStyling purple">My Bolly</div>
        {this.state.currentVideo ?
          <div><div id="player"></div>
          <div
             onClick={this.test.bind(this)}
          >Tester</div></div> :
          <div id="player">Please select a bolly</div>
        }
      </div>

    )
  }
}


          // <div
          //   onClick={this.test.bind(this)}
          // >Tester</div> :
