import React from 'react';
import {render} from 'react-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/index';


class Container extends React.Component {
  render () {
    return (
      <div className="bollySize whiteBackground floatBorder shadow">
        <div className="titleTextStyling purple">My Bolly</div>



      </div>
    )
  }
}


let mapStateToProps = (state) => {
  return {
    currentBolly: state.currentBolly
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    showSearch: () => {actionCreators.showSearch()}, //placeholder
  }
}

export const Bolly = connect(mapStateToProps, mapDispatchToProps)(Container);

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     myBolly: {},
  //     currentVideo: null,
  //     currentVideoId: '',
  //     player: {}
  //   }
  // }

  // componentDidMount() {
  //   this.setState({
  //     player: new YT.Player("player", {
  //         // height: '390',
  //         width: '518',
  //         videoId: null,
  //         playerVars: { 'autoplay': 1, 'controls': 0, 'rel': 0 }
  //       })
  //   });
  // }

  // // componentWillReceiveProps(nextProps) {
  // //   console.log('newProps received');
  // //   if (nextProps.currentVideo.id.videoId !== this.state.currentVideoId) {
  // //     console.log('called! nexp currentVideo', nextProps.currentVideo);
  // //     this.setState({
  // //       currentVideo: nextProps.currentVideo,
  // //       currentVideoId: nextProps.currentVideo.id.videoId
  // //     });
  // //     this.state.player.cueVideoById({
  // //       videoId: nextProps.currentVideo.id.videoId
  // //     });
  // //     // this.state.player.playVideo();
  // //   }
  // // }

  // onPlayerReady() {
  //   this.state.playVideo();
  // }

  // getPlayerTime () {
  //   // console.log(this.state.player.getCurrentTime());
  // }

  // test () {
  //   this.state.player.playVideo();
  // }

  // stopVideo() {
  //   this.state.player.stopVideo();
  // }

  // onPlayerStateChange(event) {
  //   // var that = this;
  //   // if (event.data == YT.PlayerState.PLAYING) {
  //   //   setTimeout(that.stopVideo, 6000);
  //   //   that.state.player.done = true;
  //   // }
  // }

  // handleReturn (e) {
  //   if (e.key === 'Enter') {
  //     e.preventDefault();
  //     console.log('do validate');
  //   }
  // }
  