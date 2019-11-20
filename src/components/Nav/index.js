//Use deconstructor to import both full react package and specifically component feature from it
import React from "react";
//Use deconstructor to import Link feature from react-router-dom package
// import { Link } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';
import './style.css';
import { relative } from "path";
const appName = {
  color: 'darkBlue',

};
const logoSize ={
  height:'40px',
  width:'40px',
}
const borderToLink={
  color:'darkBlue',
  border:'1px outset white',
  marginRight:'20px'
}
const Header = () => {
    return(
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home" style={appName}><h1>Mediger</h1></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav>
    <img src={require('../../images/logo4.jpeg') } style={logoSize} /> 
    </Nav>
    <Nav className="ml-auto">
      <Nav.Link href="#Signup" className="justify-content-end" style={borderToLink}>SignUp</Nav.Link>
      <Nav.Link href="#Signin" className="justify-content-end" style={borderToLink}>SignIn</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
};

//exportes our Nav component
export default Header;
