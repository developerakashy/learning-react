import React, {Component} from 'react'

class Message extends Component{
    constructor(){
        super()

        this.state = {
            message: "Welcome, Guest"
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message: "Goodbye, Guest"
    //     })
    // }


    clickHandler = () => {
        this.setState({
            message: "Goodbye"
        })

        console.log(this)
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default Message
