
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './containers/HomePage'
import LoginPage from './components/LoginPage'
import SignupPage from './SignupPage'
import ProfilePage from './ProfilePage'

import NavBar from './components/NavBar'
import SideDrawer from './SideDrawer/SideDrawer'
import Backdrop from './SideDrawer/Backdrop'



class App extends React.Component{
  state = {
    stores: [],
    drawerOpen: false
  }

  componentDidMount(){
    fetch('http://localhost:3000/profile', {
      headers: {"Authorization": localStorage.getItem("token")}
    })
    
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
    // RENDER THE BACKDROP CONDITIONALLY
    let backdrop;
    if(this.state.drawerOpen){
      backdrop = <Backdrop
        backdropClickHandler={this.backdropClickHandler}/>;
    }

    return (
      <div className="conts-wrapper">
        <NavBar drawerToggleClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.drawerOpen}/>
        {backdrop}

        <Switch >
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/signup" component={SignupPage}/>
          <Route exact path="/login" render={ (props) =>
           <LoginPage
            loggedIn={this.state.loggedIn}
            router={props}
            /> }
          />
          <Route exact path="/profile" component={ProfilePage}/>

        </Switch>
      </div>


    )
  }

}
export default App;
