import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import "./style.css";
const FooterDiv = () => {
  return (
    <div>
        <Navbar bg="light" expand="lg">
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mx-auto">
      <p> &copy; {new Date().getFullYear()} Copyright</p>
      </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
  );
}

export default FooterDiv;