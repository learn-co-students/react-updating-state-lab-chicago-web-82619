import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleClickBitrate = () => {
    console.log(this.state.settings)
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleClickResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button className={'bitrate'} onClick={this.handleClickBitrate}>{this.state.settings.bitrate}</button>
        <button className={'resolution'} onClick={this.handleClickResolution}>{this.state.settings.video.resolution}</button>
      </div>
    )
  }
}

// this.setState({
//   addressInfo: {
//     ...this.state.addressInfo,
//     city: 'New York City'
//   }
// });


// handleClick = () => {
//   this.setState(previousState => {
//     return {
//       count: previousState.count + 1
//     }
//   })
// }