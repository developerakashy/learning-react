import React, {Component} from 'react'

class RegComp extends Component{
    render(){
        console.log("Regular Component")
        return(
            <h1>RegComp - {this.props.name}</h1>
        )
    }
}

export default RegComp
