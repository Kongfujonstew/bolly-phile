import React from 'react';
import {render} from 'react-dom';

export class Guest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // memberLogin: false
    }
  }

  toggleMemberLogin () {
    this.setState({
      memberLogin: !this.state.memberLogin
    })
  }

  // searchYouTube (e) {
  //   var that = this;
  //   e.preventDefault();
  //   console.log('SYT called, this.state.term: ', this.state.term)
  //   var q = this.state.term +' karaoke';
  //   this.ajaxVideos(q);
  // }

  // ajaxVideos (query) {
  //   var that = this;
  //   $.get('https://www.googleapis.com/youtube/v3/search', {
  //     url: 'https://www.googleapis.com/youtube/v3/search',
  //     key: 'AIzaSyDZQ48zhJFH1DPJBFJ-NQo5QKSWe4twumA',
  //     q: query,
  //     maxResults: 4,
  //     part: 'snippet',
  //     type: 'video',
  //     videoEmbeddable: true
  //   })
  //   .done(function(results) {
  //     that.setSearchResults(results);
  //     console.log(results);
  //   });
  // }

  // handleVideoEnd () {
  //   ('HVE called')
  //   this.nextVideo();
  // }

  // nextVideo () {
  //   if (this.state.videoQueue.length === 1) {
  //     var newQueue = [];
  //     console.log('newQueue.length: ', newQueue.length)
  //     socket.emit('socketUpdateQueue', newQueue);
  //   }  if (this.state.videoQueue.length > 1) {
  //     var newQueue = Array.prototype.slice.call(this.state.videoQueue).slice(1);
  //     console.log('newQueue.length: ', newQueue.length)
  //     socket.emit('socketUpdateQueue', newQueue);
  //   }
  // }






  render () {
    if (this.state.memberLogin) {
      return <MemberLogin 
        toggleMemberLogin={this.toggleMemberLogin.bind(this)}
      />
    } else {
      return (
        <div className="fullHeight">
          <h1>OHYadEfHGuest</h1>
        </div>
      )
    }
  }
}
