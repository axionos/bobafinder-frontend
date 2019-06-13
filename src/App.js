import React from 'react';
import LoginPage from './LoginPage'

class App extends React.Component{

  state = {
    stores: [],
    page: "login"
  }

  componentDidMount(){
    fetch('http://localhost:3000/')
      .then( res => res.json() )
      .then( stores => {
        this.setState({
          stores:stores.stores
        })
      })
  }

  redirect = (page) => {
    this.setState({
      page: page
    })
  }

  render(){
    console.log(this.state)
    return (
      <div className="App">
        <LoginPage redirect={this.redirect}/>
      </div>
    );
  }

}
export default App;
