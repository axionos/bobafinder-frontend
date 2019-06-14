import React from 'react';
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'

class App extends React.Component{

  state = {
    stores: [],
  }

  componentDidMount(){
    // fetch('http://localhost:3000/')
    //   .then( res => res.json() )
    //   .then(data => {
    //     this.setState({
    //       stores: data.stores
    //     }, () => (console.log(this.state)))
    //   })
  }

  // <div className="App">
  // <LoginPage />
  // </div>
  render(){
    console.log(this.state)
    return (
      <div className="App">

      </div>
    )
  }

}
export default App;
