import React from 'react';
<<<<<<< HEAD
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
=======
import HomePage from './containers/HomePage'
import Nav from './components/Nav'
import css from './index.css';
// import LoginPage from './containers/LoginPage'
// import SignUpPage from './containers/SignUpPage'
// import ProfilePage from './containers/ProfilePage'
>>>>>>> homepage

class App extends React.Component{

  state = {
    stores: [],
  }

  // FETCH USER DATA FROM DATABASE
  componentDidMount(){
<<<<<<< HEAD
    // fetch('http://localhost:3000/')
    //   .then( res => res.json() )
    //   .then(data => {
    //     this.setState({
    //       stores: data.stores
    //     }, () => (console.log(this.state)))
    //   })
  }
=======
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
>>>>>>> homepage

  // <div className="App">
  // <LoginPage />
  // </div>
  render(){
    console.log(this.state)
    return (
      <div className="App">
<<<<<<< HEAD
=======
        <Nav />
        <HomePage />
>>>>>>> homepage

      </div>
    )
  }

}
export default App;
