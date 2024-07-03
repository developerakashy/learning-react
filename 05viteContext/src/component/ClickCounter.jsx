import React, {Component} from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component{

    render(){
        const {count, incrementHandler} = this.props

        return(
            <button onClick={incrementHandler}>{this.props.name} Click Count: {count}</button>
        )
    }

}

export default withCounter(ClickCounter, 10)
