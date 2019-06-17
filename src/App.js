
import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import HomePage from './containers/HomePage'
import css from './index.css';
import LoginPage from './components/LoginPage'
import SignupPage from './SignupPage'


class App extends React.Component{

  state = {
    stores: []
  }

  componentDidMount(){

  }

  render(){
    return (
        <Switch >
          if (this.state.loggedIn){
            console.log('set option')
          }
          <Route path="/signup" component={SignupPage}/>
          <Route path="/login" render={ (props) => <LoginPage
            loggedIn={this.state.loggedIn}
            router={props}
            /> }/>
          <Route path="/main" component={HomePage}/>
          <Route component={HomePage}/>
          //default if wrong routes will redirect to homepage 
        </Switch>
    )
  }

}
export default App;
