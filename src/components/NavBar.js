import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'

// import Homepage from '../containers/HomePage'
// import SignupPage from '../SignupPage'
// import { NavLink, Router, Route } from 'react-router-dom';


// const Navbar = () =>
//   <div>
//     <NavLink
//     to="/"
//     exact
//     activeStyle={{
//       background: 'darkblue'
//     }}
//     >Home</NavLink>
//     <NavLink
//     to="/signup"
//     exact
//     activeStyle={{
//       background:'darkblue'
//     }}
//     >Sign Up</NavLink>
//   </div>

class NavBar extends React.Component{

  render(){
    // console.log(this.props)
    return (

        <Navbar expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Boba Finder</Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/signup">SignUp</Nav.Link>
              <Nav.Link href="/login">LogIn</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

      // =====================================
      //
      // <div>
      //   <div className="logo">LOGO</div>
      //   <ul className="nav-bar">
      //     <li>Profile</li>
      //     <li>Sign Up</li>
      //     <li>Log In</li>
      //     <button onClick={this.props.handleLogOut}>Logout</button>
      //   </ul>
      // </div>
      // =====================================
      // <Router>
      //   <div className="navbar">
      //     <Navbar />
      //     <Route exact path="/" component={Homepage} />
      //     <Route exact path="/signup" component={SignupPage} />
      //   </div>
      // </Router>
    );
  }

}
export default NavBar;
