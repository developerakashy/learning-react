import React, { Component } from "react";

class ClassCounterOne extends Component{
    constructor(){
        super()

        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount(){
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps,prevState){

        if(this.state.count !== prevState.count){
            document.title = `Clicked ${this.state.count} times`
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    inputChangeHandler = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    render(){
        return(
            <div>
                <h1>Class Count: {this.state.count}</h1>
                <input type="text" value={this.state.name} onChange={this.inputChangeHandler}/>
                <button onClick={this.incrementCount}>Increment</button>
            </div>
        )
    }
}

export default ClassCounterOne
