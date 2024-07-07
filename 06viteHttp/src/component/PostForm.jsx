import React, { Component } from "react";
import axios from 'axios'

class PostForm extends Component {
  constructor() {
    super();

    this.state = {
      userName: "",
      title: "",
      body: "",
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state)

    axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })

  };

  render() {
    console.log("render")
    const { userName, title, body } = this.state;

    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={this.changeHandler}
            placeholder="username"
          />
        </div>
        <div>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.changeHandler}
            placeholder="title"
          />
        </div>
        <div>
          <input
            type="text"
            name="body"
            value={body}
            onChange={this.changeHandler}
            placeholder="body"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}


export default PostForm
