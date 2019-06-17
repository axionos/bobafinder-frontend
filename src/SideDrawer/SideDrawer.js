import React from 'react';
import './SideDrawer.css'

class SideDrawer extends React.Component {
  render(){

    let drawerClasses = 'side-drawer'
    if(this.props.show) {
      drawerClasses = 'side-drawer open'
    }
    return(
      <div className={drawerClasses}>
        <div className="favorite-list">
          favorite stores
        </div>
        <div className="visited-list">
          visited stores
        </div>
      </div>

    )
  }
}

export default SideDrawer;
