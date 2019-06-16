import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'

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
    );
  }

}
export default NavBar;
