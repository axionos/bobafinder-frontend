import React from 'react';
// import './SideDrawer.css'

class Visited extends React.Component {
  render(){
    console.log('Visited props', this.props)
    return(
      <div>
        <div className="visited">
          <p className="store-name">
            {this.props.visited.name}
          </p>
          <p className="store-address">
            {this.props.visited.address}
          </p>
        </div>

      </div>
    )
  }
}

export default Visited;
