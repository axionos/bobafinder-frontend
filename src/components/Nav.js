import React from 'react';


class Nav extends React.Component{


  render(){

    return (
      <div className="nav">
        <div className="logo">LOGO</div>
        <ul className="nav-bar">
          <li>Profile</li>
          <li>Sign Up</li>
          <li>Log In</li>
          <li>Log Out</li>
        </ul>
      </div>
    );
  }

}
export default Nav;
