//Use deconstructor to import both full react package and specifically component feature from it
import React from "react";
//Use deconstructor to import Link feature from react-router-dom package
// import { Link } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';
//import { NavLink as RouterNavLink } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-spa";

import './style.css';
const appName = {
  color: 'darkBlue',

};
const logoSize ={
  height:'40px',
  width:'40px',
}
const borderToLink={
  backgroundColor:'darkBlue',
  color:'white',
  border:'1px outset white',
  marginRight:'20px',
  width:'100px',
  height:'40px'
}
const Header = () => {
   
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin
    });
    return(
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="/" style={appName}><h1>Mediger</h1></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav>
    <img src={require('../../images/logo4.jpeg') } style={logoSize} alt="Logo"/> 
    </Nav>
    <Nav className="ml-auto">
      <Nav.Link onClick={() => loginWithRedirect({})} className="justify-content-end text-center" style={borderToLink}>SignIn</Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
};

//exportes our Nav component
export default Header;
