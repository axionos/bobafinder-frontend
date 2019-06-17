import React from 'react';
// import './SideDrawer.css'

class Favorites extends React.Component {
  render(){
    console.log('favorites props', this.props)
    return(
      <div>
        <div className="favorites">
          <p className="store-name">
            {this.props.favorite.name}
          </p>
          <p className="store-address">
            {this.props.favorite.address}
          </p>
        </div>

      </div>
    )
  }
}

export default Favorites;
