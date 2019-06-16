import React from 'react';
import StoreList from '../components/StoreList'
import SearchBar from '../components/SearchBar'
import Nav from '../components/Nav'

class HomePage extends React.Component{
  state={
    stores: [],
    loggedIn: true ,
    filter: ''

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

  filterStore = (e) => {
    this.setState({
      filter: e.target.alt
    })
  }


  render(){


    return (
      <div className="homePage">
        <Nav routes={this.props} handleLogOut={this.handleLogOut}/>
        <SearchBar
          stores={this.state.stores}
          filterStore={this.filterStore}/>
        <StoreList
          stores={
            this.state.filter.length === 0 ?
            this.state.stores :
            this.state.stores.filter(store => {
              return store.name === this.state.filter
            })
          }/>

      </div>
    );
  }

}
export default HomePage;
