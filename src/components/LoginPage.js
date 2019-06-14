import React from 'react'
import { Link } from 'react-router-dom'

class LoginPage extends React.Component{

  state = {
    username: '',
    password: ''
  }

  componentDidMount(){
    if (!!localStorage.getItem("token")){
      // need to verify if token is correct
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/login',{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then( res => res.json() )
    .then( data => {
      localStorage.setItem('token', data.token)
    })
  }

  render(){
    return(
      <p>
        <form onSubmit={this.handleLogin}>
          Username
          <input type='text' name="username" onChange={this.handleChange}/>
          Password
          <input type='password' name="password" onChange={this.handleChange} />
          <input type='submit' value="Log In" />
        </form>
        <Link to='/signup'>Sign Up </Link>
        {
          // waiting on browser router  temp solution
        }
      </p>
    )
  }
}

export default LoginPage
