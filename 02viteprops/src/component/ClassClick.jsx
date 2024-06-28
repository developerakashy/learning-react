import React, {Component} from 'react'

class ClassClick extends Component{
    constructor(){
        super()

        this.state = {
            Message: "Welcome"
        }
    }

    clickHandler(){
        this.setState({
            Message: "Goodbye"
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.Message}</h1>
                <button onClick={() => this.clickHandler()}>Click</button>
            </div>
        )
    }
}


export default ClassClick
