import React, {Component} from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component{

    constructor(){
        super()

        this.state = {
            name: "Akash"
        }

        console.log("LifeCycleA Constructor method")
    }

    shouldComponentUpdate(){
        console.log("LifeCycleA shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifeCycleA getSnapShotBeforeUpdate")
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("LifeCycleA ComponentDidUpdate")
    }




    static getDerivedStateFromProps(props, state){

        console.log("LifeCycleA static getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("LifeCycleA ComponentDidMount")
    }

    changeState = () => {
        this.setState({
            name: 'Ayush'
        })
    }

    render(){
        console.log("LifeCycleA render method")
        return(
            <>
                <h1>LifeCycleA {this.state.name}</h1>
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB/>
            </>
        )
    }
}

export default LifeCycleA
