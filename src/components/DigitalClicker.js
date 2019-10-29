// Code DigitalClicker Component Here
import React, {Component} from 'react'

export default class DigitalClicker extends Component {
    constructor(props){
        super(props)
        this.state = {
            timesClicked: 0
        }
    }

    render(){
        return <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    }

    handleClick = () => {
        this.setState( prevState => {
             return{ timesClicked: prevState.timesClicked + 1 }
        })
    }
}
