import React from 'react';
import StoreList from '../components/StoreList'
import SearchBar from '../components/SearchBar'
import Nav from '../components/Nav'

class HomePage extends React.Component{
  state={
    stores: [],
    loggedIn: true
  }

  // FETCH STORES DATA FROM API
  // rejects user if they did not log in ( redirects to login screen)
  componentDidMount(){

    if (!localStorage.getItem("token")){
      this.props.history.push("/login")
    }

    fetch("http://localhost:3000/stores")
    .then(response => response.json())
    .then(data => {
      this.setState({
        stores: data.stores
      })
    })
  } // End Component did mount

  handleLogOut = () => {
    // will clear the token and redirect the user back to the login page
    console.log('being clicked')
    localStorage.clear()
    this.props.history.push("/login")

  }

  render(){
    // console.log('Home Page State', this.state.stores)
    return (
      <div className="homePage">
        <Nav routes={this.props} handleLogOut={this.handleLogOut}/>
        <SearchBar />
        <StoreList stores={this.state.stores}/>
      </div>
    );
  }

}
export default HomePage;
