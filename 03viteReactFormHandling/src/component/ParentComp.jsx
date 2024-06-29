import React, {Component} from "react";
import RegComp from './RegComp'
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

class ParentComp extends Component{

    constructor(){
        super()

        this.state = {
            name: 'Akash'
        }
    }

    changeSate = () => {
        this.setState({
            name: 'Akash'
        })
    }

    render(){
        console.log("***************Parent Component******************")
        return(
            <div>
                <PureComp name={this.state.name}/>
                <RegComp name={this.state.name}/>
                <MemoComp name={this.state.name}/>
                <button onClick={this.changeSate}>Change State</button>
            </div>
        )
    }
}

export default ParentComp
