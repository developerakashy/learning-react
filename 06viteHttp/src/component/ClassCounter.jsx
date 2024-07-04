import React from 'react';

class ClassCounter extends React.Component{
    constructor(){
        super()

        this.state = {
            count:0
        }
    }

    incrementCount = () => {

        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    render(){
        const {count} = this.state

        return(
            <div>
                <button onClick={this.incrementCount}>Count: {count}</button>
            </div>
        )
    }
}

export default ClassCounter
