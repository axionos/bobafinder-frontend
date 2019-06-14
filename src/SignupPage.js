import React from 'react'

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
    })

  }

  render(){
    return(
      <form onSubmit={this.handleSignUp}>
      Sign up form
        <input type='text' name="username" onChange={this.handleChange}/>
        <input type='password' name="password" onChange={this.handleChange} />
        <input type='submit' value="Sign Up" />
      </form>
    )
  }
}

export default SignupPage
