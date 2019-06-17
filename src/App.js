
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './containers/HomePage'
import LoginPage from './components/LoginPage'
import SignupPage from './SignupPage'
import ProfilePage from './ProfilePage'


class App extends React.Component{

  state = {
    stores: []
  }


  // componentDidMount(){
  //
  // }



  render(){
    return (

      <Switch >

        <Route exact path="/" component={HomePage}/>
        <Route exact path="/signup" component={SignupPage}/>
        <Route exact path="/login" render={ (props) =>
         <LoginPage
          router={props}
          /> }
        />
        <Route exact path="/profile" component={ProfilePage}/>
      </Switch>

    )
  }

}
export default App;
