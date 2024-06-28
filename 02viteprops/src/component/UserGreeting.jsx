import React, {Component} from 'react'

class UserGreeting extends Component{
    constructor(){
        super()

        this.state = {
            isLogged: true
        }
    }

    render(){
        let message
        if(this.state.isLogged){
            message = "Akash"
        }else{
            message = "Guest"
        }

        // if(this.state.isLogged){
        //     return <h1>Welcome, Akash</h1>
        // }else{
        //     return <h1>Welcome, Guest</h1>
        // }

        return(
            // <h1>Welcome, {message}</h1> //element variable

            // this.state.isLogged ? <h1>Welcome, Akash</h1> : <h1>Welcome, Guest</h1> //ternary operator

            this.state.isLogged && <h1>Welcome, Akash</h1> //shortcircuit operator
        )




    }

}

export default UserGreeting
