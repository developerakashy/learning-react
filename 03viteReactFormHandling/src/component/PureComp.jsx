import React, { PureComponent } from 'react'

class PureComp extends PureComponent{

    render(){
        console.log("Pure Component")
        return (

            <h1>PureComponent - {this.props.name}</h1>

        )
    }

}

export default PureComp
