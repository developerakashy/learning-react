import React, {Component} from 'react'
import ChildCompoent from './ChildComponent'

class ParentComponent extends Component{
    constructor(){
        super()

        this.state = {
            ParentName: "Parent"
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(){
        alert(`Hello, ${this.state.ParentName}`)
    }

    render(){
        return(
            <div>
                <h1>{this.state.ParentName}</h1>
                <ChildCompoent greetHandler={this.greetParent}/>

            </div>
        )
    }

}

export default ParentComponent
