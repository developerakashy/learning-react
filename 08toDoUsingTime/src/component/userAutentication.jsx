import React, { Component } from "react";
import LoginPage from "./LoginPage";

class UserAuthentication extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      username: "",
      password: "",
      loginPage: false,
    };


  }

  componentDidMount(){

    let localStorageUsers = JSON.parse(localStorage.getItem('users'))

    if(localStorageUsers){

        this.setState({
            users: localStorageUsers,
        })
    }
  }

  componentDidUpdate(prevProps,prevState){
    console.log(this.state.loginPage)
    localStorage.setItem('users', JSON.stringify(this.state.users))
  }

  inputUsernameHandler = (e) => {
    if(e.target.onblur){
        console.log('blured')
    }

    this.setState({
        [e.target.name]: e.target.value
    })
  }

  formHandler = (e) => {
    e.preventDefault()
  }

  addUser = () => {
    this.userExist = this.state.users.filter(user => user.username.toLowerCase() === this.state.username.toLowerCase())
    if(this.userExist.length){
        console.log("User Exist", this.userExist)
    }
    else if(this.state.password.length < 8){
        console.log("password invalid")
    }
    else{
        this.setState(prevState => ({
            users: [...prevState.users, {username: this.state.username, password: this.state.password}]

        }))

        console.log(this.state.users)
    }

  }

  checkUsername = (e) => {
    this.userExist = this.state.users.filter(user => user.username.toLowerCase() === this.state.username.toLowerCase())

    if(this.userExist.length){
        console.log("User Exist", this.userExist)
        alert(`user exist try to login`)
    }else{
        console.log('username unavailable')
    }


}

  render() {
    const {users, username, password, loginPage} = this.state
    return (
    loginPage ? <LoginPage/> :
      <div className="login-body">
        <form className="login-form" onSubmit={this.formHandler}>
          <h2>Register</h2>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={username}
            onBlur={this.checkUsername}
            onChange={this.inputUsernameHandler}
            required
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="enter password"
            name="password"
            value={password}
            onChange={this.inputUsernameHandler}
            required
          />

          <button type='submit' onClick={this.addUser}>Register</button>
          <button type="button" onClick={() => this.setState({loginPage: !this.state.loginPage})}>Login Page</button>
          {/* {users.map((user,index) => <h1 key={index}>{user.username} - {user.password}</h1>)} */}

        </form>
      </div>
    );
  }
}

export default UserAuthentication
