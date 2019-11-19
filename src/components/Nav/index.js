//Use deconstructor to import both full react package and specifically component feature from it
import React from "react";
//Use deconstructor to import Link feature from react-router-dom package
// import { Link } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';
import './style.css';

const Header = () => {
    return(
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Mediger</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      </Nav>
    <Nav className="ml-auto">
      <Nav.Link href="#Signup" className="justify-content-end">Signup</Nav.Link>
      <Nav.Link href="#Signin" className="justify-content-end">Signin</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
};

//exportes our Nav component
export default Header;
