import React, {Component} from 'react'

class User extends Component{

    render(){
        return(
            <h2>{this.props.name(false)}</h2>
        )
    }
}

export default User
