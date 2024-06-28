import React, { Component } from "react";

class Count extends Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    inc(){
        // this.setpreState({

        //     count: this.prevState.count + 1

        // },()=>{
        //     console.log("Async: ", this.state.count)
        // })

        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        console.log("Sync: ",this.state.count)
    }

    incByFive(){
        this.inc()
        this.inc()
        this.inc()
        this.inc()
        this.inc()
    }

    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => this.incByFive()}>Increment</button>
            </div>
        )
    }
}

export default Count
