 import React, {Component} from 'react';

 export default class YouTubeDebugger extends Component {

    constructor() {
        super()
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

    // changes settings.bitrate state property to 12
    bitrateClick = (event) => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    // changes settings.video.resolution state property to '720p'
    resolutionClick = (event) => {
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
        return(
            <div>
                <button className='bitrate' onClick={this.bitrateClick}>bitrate</button>
                <button className='resolution' onClick={this.resolutionClick}>resolution</button>
            </div>
        )
    }
 }