  import React from 'react';
  import HomePage from './containers/HomePage'
  import Nav from './components/Nav'
  import css from './index.css';


class App extends React.Component{

  state = {
    stores: [],
  }

  render(){
    console.log(this.state)
    return (
      <div className="App">

        <Nav />
        <HomePage />

      </div>
    )
  }

}
export default App;
