import React from 'react';
import StoreList from '../components/StoreList'
import SearchBar from '../components/SearchBar'

class HomePage extends React.Component{
  state={
    stores: [],
    filter: ''
  }

  // FETCH STORES DATA FROM API
  // rejects user if they did not log in ( redirects to login screen)
  componentDidMount(){
    if (!localStorage.getItem("token")){
      this.props.history.push("/login")
    }

    fetch("http://localhost:3000/stores", {
      headers:{
        "Authorization": localStorage.getItem("token")
      }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        stores: data.stores
      })
    })

  } // End Component did mount


  filterStore = (e) => {
    this.setState({
      filter: e.target.alt
    })
  }


  render(){
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
          }
          favoriteHandler={this.props.favoriteClickHandler}
          visitedHandler={this.props.visitedClickHandler}

        />

      </div>
    );
  }

}
export default HomePage;
