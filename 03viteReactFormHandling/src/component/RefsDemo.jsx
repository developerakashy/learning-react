import React, {Component} from 'react'

class RefsDemo extends Component{
    constructor(){
        super()
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCbRef = (element) => {
            this.cbRef = element
        }
    }

    componentDidMount(){
        console.log(this.inputRef)
        this.inputRef.current.focus()
        if(this.cbRef){
            this.cbRef.focus()

        }
    }

    inputVal = () => {
        alert(`InputValue: ${this.inputRef.current.value}`)
        this.inputRef.current.value = ''
    }


    render(){
        return(
            <div>
                <input type="text"  ref={this.inputRef} />
                <input type="text" ref={this.setCbRef}/>
                <button onClick={this.inputVal}>Fetch Input Val</button>
            </div>
        )
    }
}

export default RefsDemo
