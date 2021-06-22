import React, { Component } from 'react'

export default class Click extends Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount(){
        this.TimerId = setInterval(
            () => this.tick(),
            1000
        )
    }
    render() {
        return (
            <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

