import React from 'react';
import HomePage from './containers/HomePage'
import Nav from './components/Nav'
import css from './index.css';
// import LoginPage from './containers/LoginPage'
// import SignUpPage from './containers/SignUpPage'
// import ProfilePage from './containers/ProfilePage'

class App extends React.Component{

  state = {
    stores: [],
    page: "login"
  }

  // FETCH USER DATA FROM DATABASE
  componentDidMount(){
    fetch('http://localhost:3000/')
      .then( res => res.json() )
      .then( stores => {
        this.setState({
          stores:stores.stores
        })
      })
  } // END FETCHING


  /////// REDIRECT PROP FOR LOGIN PAGE //////
  // redirect = (page) => {
  //   this.setState({
  //     page: page
  //   })
  // }////////////////////////////////////////

  render(){
    console.log(this.state)
    return (
      <div className="App">
        <Nav />
        <HomePage />

      </div>
    );
  }

}
export default App;
