import React, { Component } from 'react'

class ClassMouse extends Component{
    constructor(){
        super()

        this.state = {
            x:0,
            y:0
        }
    }

    componentDidMount(){
        window.addEventListener('mousemove', this.logMousePosition)
    }

    componentWillUnmount(){
        console.log("will unmount")
        window.removeEventListener('mousemove', this.logMousePosition)
    }

    logMousePosition = (e) => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }

    render(){
        return(
            <div>
                <h1>X: {this.state.x}, Y: {this.state.y}</h1>
            </div>
        )
    }
}

export default ClassMouse
