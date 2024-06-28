import React, {Component} from 'react'

class Form extends Component{
    constructor(){
        super()

        this.state = {
            username: '',
            comment: '',
            skill: 'React'
        }
    }

    inputUsernameValueHandler = (event) => {
        this.setState({
            username: event.target.value
        })

    }

    textareaValueHandler = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    selectOptionHandler = (event) => {
        this.setState({
            skill: event.target.value
        })
    }

    formSubmitHandler = (event) => {
        alert(`Username:${this.state.username}, Comment:${this.state.comment}, Skill:${this.state.skill}`)
        event.preventDefault()

        this.setState({
            username: '',
            comment: '',
            skill: 'React'
        })
    }



    render(){
        return(
            <form onSubmit={this.formSubmitHandler}>
                <div>
                    <label>UserName</label>
                    <input type="text" value={this.state.username} onChange={this.inputUsernameValueHandler}/>
                </div>

                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comment} onChange={this.textareaValueHandler}></textarea>
                </div>

                <div>
                    <label>Select Skill:</label>
                    <select value={this.state.skill} onChange={this.selectOptionHandler}>
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                        <option value="Angular">Angular</option>
                    </select>
                </div>

                <button type='submit'>Submit</button>

            </form>
        )
    }
}

export default Form
