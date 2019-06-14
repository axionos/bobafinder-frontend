import React from 'react';


class Nav extends React.Component{


  render(){
    console.log(this.props)
    return (
      <div className="nav">
        <div className="logo">LOGO</div>
        <ul className="nav-bar">
          <li>Profile</li>
          <li>Sign Up</li>
          <li>Log In</li>
          <button onClick={this.props.handleLogOut}>Logout</button>
        </ul>
      </div>
    );
  }

}
export default Nav;
