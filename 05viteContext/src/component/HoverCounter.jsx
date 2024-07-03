import React, {Component} from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component{

    render(){
        const {count, incrementHandler} = this.props

        return(
            <h1 onMouseOver={incrementHandler}>Hover Count: {count}</h1>
        )
    }

}

export default withCounter(HoverCounter, 5)
