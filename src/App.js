
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './containers/HomePage'
import LoginPage from './components/LoginPage'
import SignupPage from './SignupPage'

import NavBar from './components/NavBar'
import SideDrawer from './SideDrawer/SideDrawer'
import Backdrop from './SideDrawer/Backdrop'



class App extends React.Component{

  state = {
    stores: [],
    drawerOpen: false,
    favorites: [],
    visited: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/profile', {
      headers: {"Authorization": localStorage.getItem("token")}
    })

    .then(res => res.json())
    .then(data => this.setState({
      favorites: data.favorites,
      visited: data.visited
    }, () => console.log('profile data', data)))

  }

  drawerToggleClickHandler = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    })
  }

  backdropClickHandler = () => {
    this.setState({
      drawerOpen: false
    })
  }

  render(){
    console.log('App state', this.state)
    // RENDER THE BACKDROP CONDITIONALLY
    let backdrop;
    if(this.state.drawerOpen){
      backdrop = <Backdrop
        backdropClickHandler={this.backdropClickHandler}/>;
    }

    return (
      <div className="conts-wrapper">
        <NavBar
          drawerToggleClickHandler={this.drawerToggleClickHandler}/>
        {localStorage.getItem("token") ? (
        <React.Fragment>
          <SideDrawer
            show={this.state.drawerOpen}
            favorites={this.state.favorites}
            visited={this.state.visited}/>
          {backdrop}
        </React.Fragment>) : null}
        <Switch >
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/signup" component={SignupPage}/>
          <Route exact path="/login" render={ (props) =>
           <LoginPage
            router={props}
            /> }
          />
        </Switch>
      </div>


    )
  }

}
export default App;
