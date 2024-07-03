import React, {Component} from "react";


const  withCounter = (OriginalComponent, incrementNumber) => {
    class NewComponent extends Component{
        constructor(){
            super()

            this.state = {
                count: 0
            }
        }

        incrementHandler = () => {
            this.setState((prevState) => ({
                count: prevState.count + incrementNumber
            }))
        }

        render(){


            return(
                <OriginalComponent
                count={this.state.count}
                incrementHandler={this.incrementHandler}

                {...this.props}
                />
            )
        }
    }

    return (
        NewComponent
    )
}


export default withCounter
