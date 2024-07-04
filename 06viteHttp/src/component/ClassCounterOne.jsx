import React, { Component } from "react";

class ClassCounterOne extends Component{
    constructor(){
        super()

        this.state = {
            count: 0
        }
    }

    componentDidMount(){
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(){
        document.title = `Clicked ${this.state.count} times`
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.incrementCount}>Increment</button>
            </div>
        )
    }
}

export default ClassCounterOne
