import React from 'react'
import './form.css'

class SignupPage extends React.Component{

  state = {
    username: '',
    password: ''

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignUp = (e) => {
    e.preventDefault()

    // creating a new user
    fetch('http://localhost:3000/signup',{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then( res => res.json() )
    .then( data => {
      // if successful, token will be recieved
      localStorage.setItem('token', data.token)
      window.location.replace(`http://localhost:3001/`)
      // this.props.history.push('/')
      //after sign up pushed to main page
    })

  }

  render(){
    return(
      <div className="wrapper">
        <h3>Sign up form</h3>
        <form onSubmit={this.handleSignUp}>
          Username
          <input type='text' name="username" onChange={this.handleChange}/>
          Password
          <input type='password' name="password" onChange={this.handleChange} />
          <input type='submit' value="Sign Up" />
        </form>
      </div>
    )
  }
}

export default SignupPage
