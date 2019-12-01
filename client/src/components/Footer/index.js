import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import "./style.css";
const FooterDiv = () => {
  return ( 
      <div className="footerDiv">
       <div style={{height:70}}></div>
       <div> <p> &copy; {new Date().getFullYear()} Copyright</p></div>
     
    </div>
    
    
  );
}

export default FooterDiv;