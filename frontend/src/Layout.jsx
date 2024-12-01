import { Link, Outlet } from "react-router-dom";


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout=()=>{
    return(
      <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="insert">Insert</Nav.Link>
            <Nav.Link as={Link} to="display">Display</Nav.Link>
            <Nav.Link as={Link} to="search">Search</Nav.Link>
            <Nav.Link as={Link} to="delete">Delete/Update</Nav.Link>
            <Nav.Link as={Link} to="registration">Registration</Nav.Link>

        </Nav>
        </Container>
      </Navbar>


      <Outlet/>
  <hr size="4" color="black" />
      </>
    )
  }
  export default Layout;