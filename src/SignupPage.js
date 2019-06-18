import React from 'react'
import {Form, Button} from 'react-bootstrap'
import './form.css'

class SignupPage extends React.Component{

  state = {
    username: '',
    password: ''

  }
  // <h3>Sign up form</h3>
  // <form onSubmit={this.handleSignUp}>
  //   Username
  //   <input type='text' name="username" onChange={this.handleChange}/>
  //   Password
  //   <input type='password' name="password" onChange={this.handleChange} />
  //   <input type='submit' value="Sign Up" />
  // </form>
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
        <div className="signup-container">
          <div className="signup-wrapper container">
            <h3>Join <span className="join">Boba Finder! 😋</span></h3>
            <Form onSubmit={this.handleSignUp}>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter Username" onChange={this.handleChange}/>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={this.handleChange}/>
              </Form.Group>
              <div className="signup-btn">
                <Button className="signup" variant="primary" type="submit" value="Sign Up">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default SignupPage
