import React from 'react';
import StoreList from '../components/StoreList'
import SearchBar from '../components/SearchBar'


class HomePage extends React.Component{
  state={
    stores: []
  }

  // FETCH STORES DATA FROM API
  componentDidMount(){
    fetch("http://localhost:3000/stores")
    .then(response => response.json())
    .then(data => {
      this.setState({
        stores: data.stores
      })
    })
  } // END FETCHING

  render(){
    console.log('Home Page State', this.state.stores)
    return (
      <div className="homePage">
        <SearchBar />
        <StoreList stores={this.state.stores}/>
      </div>
    );
  }

}
export default HomePage;
