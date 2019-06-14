import React from 'react';
import StoreList from '../components/StoreList'
import SearchBar from '../components/SearchBar'


class HomePage extends React.Component{
  state={
    stores: [],
    filter: ''
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

  filterStore = (e) => {
    this.setState({
      filter: e.target.alt
    })
  }

  render(){
    console.log('Home Page State', this.state)
    return (
      <div className="homePage">
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
