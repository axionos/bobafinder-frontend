import React from 'react';

class App extends React.Component{

  state = {
    stores: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/')
      .then( res => res.json() )
      .then( stores => {
        this.setState({
          stores:stores.stores
        })
      })
  }

  render(){
    console.log(this.state)
    return (
      <div className="App">
        i think this works
      </div>
    );
  }

}
export default App;
