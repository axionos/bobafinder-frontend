import React from 'react'

class LoginPage extends React.Component{

  state = {
    username: '',
    password: ''
  }

  componentDidMount(){
    if (!!localStorage.getItem("token")){
      this.props.redirect("homepage")
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
    .then ( res => res.json() )
    .then( data => {
      localStorage.setItem('token', data.token)
    })
  }

  render(){
    console.log(this.state)
    return(
      <form onSubmit={this.handleLogin}>
        <input type='text' name="username" onChange={this.handleChange}/>
        <input type='password' name="password" onChange={this.handleChange} />
        <input type='submit' value="Log In" />
      </form>
    )
  }
}

export default LoginPage
