import React from 'react';
import Favorites from './Favorites'
import Visited from './Visited'
import './SideDrawer.css'

class SideDrawer extends React.Component {

  // RENDER FAVORITE STORES
  renderFavorites = () => {
    return this.props.favorites.map(favorite => {
      return <Favorites key={favorite.id} favorite={favorite}/>
    })
  }

  // RENDER VISITED STORES
  renderVisited = () => {
    return this.props.visited.map(visited => {
      return <Visited key={visited.id} visited={visited}/>
    })
  }

  render(){
    console.log('SideDrawer Props', this.props)
    let drawerClasses = 'side-drawer'
    if(this.props.show) {
      drawerClasses = 'side-drawer open'
    }

    return(
      <div className={drawerClasses}>
        <div className="favorite-list">
          <h3 className="title">Favorite Stores</h3>
          {this.renderFavorites()}
        </div>
        <div className="visited-list">
          <h3 className="title">Visited Stores</h3>
          {this.renderVisited()}
        </div>
      </div>

    )
  }
}

export default SideDrawer;
