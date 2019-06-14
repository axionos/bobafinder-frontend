import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route} from 'react-router-dom'
import LoginPage from './components/LoginPage'
import SignupPage from './SignupPage'

ReactDOM.render(
  <BrowserRouter>
    <Route path="/signup" component={SignupPage}/>
    <Route path="/login" component={LoginPage}/>
    <Route path="/main" component={App}/>
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
