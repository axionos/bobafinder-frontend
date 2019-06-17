import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'



class NavBar extends React.Component{

  log = () => {
    if (localStorage.getItem('token')){
      return <Nav.Link onClick={this.handleLogOut}>Log Out</Nav.Link>
    } else {
      return <Nav.Link href="/login">Log In</Nav.Link>
    }
  }

  handleLogOut = (e) => {
    localStorage.clear()
    window.location.replace(`http://localhost:3001/`)
    // this.props.history.push("/login")
  }

  render(){
    // console.log(this.props)
    return (
        // NAVBAR
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="/" className="logo">
              Boba Finder
            </Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/signup">SignUp</Nav.Link>

              {this.log()}

              <Nav.Link
                onClick={this.props.drawerToggleClickHandler}>Profile</Nav.Link>
            </Nav>
          </Container>
        </Navbar>


    );
  }

}
export default NavBar;
