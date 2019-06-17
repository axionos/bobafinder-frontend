import React from 'react'
import { Link , Redirect } from 'react-router-dom'

class LoginPage extends React.Component{

  state = {
    username: '',
    password: ''
  }

  componentDidMount(){
    if (!!localStorage.getItem("token")){
      this.props.router.history.push('/main')
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
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
      // needs to look to see if token is present and is not undefined
      // if (!!localStorage.token && localStorage.token !== 'undefined'){
      //   this.props.router.history.push('/main')
      // }
      if (localStorage.getItem("token")==="undefined"){
        localStorage.clear()
      } else if (!!localStorage.getItem("token")){
        this.props.router.history.push('/main')
      }
    })
  }

  render(){
    return(
      <p>
        <form onSubmit={this.handleSubmit}>
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
