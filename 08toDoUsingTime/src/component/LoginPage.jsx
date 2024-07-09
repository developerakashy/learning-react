import React, { Component } from 'react'
import Task from './Task'
import UserAuthentication from './userAutentication'

class LoginPage extends Component{
    constructor(props){
        super(props)

        this.state = {
            isLoggedIn: this.props.isLoggedIn || false,
            users: [],
            username:this.props.username || '',
            password:'',
            registerPage: false,
            usernameExist: false,
            passwordError: '',
        }


        // console.log("constructor- Login");
    }

    componentDidMount(){
        // console.log("componentDidMount- Login");
        let users = JSON.parse(localStorage.getItem('users'))
        let LoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'))

        if(LoggedIn){
            this.setState({
                isLoggedIn: true,
                username: LoggedIn[0].username
            })
        }else if(users){

            this.setState({
                users: users,
                usernameExist: false
            })

        }else{
            this.setState({
                registerPage: true
            })
        }
    }

    componentWillUnmount(){
        // console.log("componentWillUnmount- Login");
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    initiateLogin = () => {
        // console.log(this.state.users)
        let userExist = this.state.users.filter(user => user.username.toLowerCase() === this.state.username.toLowerCase() && user.password === this.state.password)

        if(userExist.length){
            localStorage.setItem('isLoggedIn', JSON.stringify(userExist))
            setTimeout(() => {
                this.setState({
                    isLoggedIn: true
                })

            },100)
        }else{
            this.setState({
                passwordError: 'wrong password'
            })
        }
    }

    componentDidUpdate(prevProps, prevState){
        // console.log("componentDidUpdate- Login")

    }

    checkUsername = (e) => {
        this.usernameExist = this.state.users.filter(user => user.username.toLowerCase() === this.state.username.toLowerCase())

        if(this.usernameExist.length){
            this.setState({
                usernameExist: true,
                passwordError: ''
            })
            // alert(`user exist try to login`)
        }else{
            console.log('Get on to register Page')
            this.setState({
                usernameExist: false,
                passwordError: 'username does not exist. Try to register'
            })
        }
    }

    formHandler = (e) => {
        e.preventDefault()
    }

    render(){
        // console.log("render- Login");
        const {isLoggedIn, username, password, users, registerPage, usernameExist, passwordError} = this.state

        return(
            registerPage ? <UserAuthentication/> :
            isLoggedIn ? <Task username={username.toLowerCase()}/> :

            <div className='login-body'>
                <form className='login-form' onSubmit={this.formHandler}>
                    <h2>Login</h2>
                    <label>Username:</label>
                    <input

                        type="text"
                        name='username'
                        placeholder='username'
                        onChange={this.inputHandler}
                        value={username}
                        onBlur={this.checkUsername}
                        required
                    />
                    {usernameExist && username.length ? <p className='success'>username exist</p> : <p className='error'>{passwordError}</p>}
                    <label>Password</label>
                    <input
                        type="text"
                        name='password'
                        placeholder='enter your password'
                        onChange={this.inputHandler}
                        value={password}
                        required
                    />

                    <button type='submit' onClick={this.initiateLogin}>Login</button>
                    <button type='button' onClick={() => this.setState({registerPage: !registerPage})}>Register</button>
                </form>
            </div>
            // {this.state.users.map(user => <h1>{user.username}</h1>)}
        )
    }
}

export default LoginPage
