import React, {Component} from 'react'

class LifeCycleB extends Component{

    constructor(){
        super()

        this.state = {

        }

        console.log("LifeCycleB Constructor method")
    }

    shouldComponentUpdate(){
        console.log("LifeCycleB shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifeCycleB getSnapShotBeforeUpdate")
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("LifeCycleB ComponentDidUpdate")
    }

    static getDerivedStateFromProps(props, state){
        console.log("LifeCycleB static getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("LifeCycleB ComponentDidMount")
    }

    render(){
        console.log("LifeCycleB render method")
        return(
            <h1>LifeCycleB</h1>
        )
    }
}

export default LifeCycleB
