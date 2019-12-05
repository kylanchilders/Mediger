import React from "react";
import styles from './sideBarMenu.css';
// import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import { Nav, NavItem, Navbar, NavDropdown, DropdownItem, Col, Row, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CompanyInfoForm from '../CompanyInfoForm'



const CompanyInfoFormDiv = () => {
    return (
        <div className="mainDiv" >
             <div className="row">
                <div className="col-lg-4">
            <div className="sideBarMenuContainer">
                <Navbar fluid="true" inverse="true" >
                    <Navbar.Collapse>
                        <Navbar.Text className="nt">
                            <NavLink className="nl" to="/PatientList">
                                Patient List
                        </NavLink>
                            <NavLink className="nl" to="/CreateRoom">
                                Rooms
                        </NavLink>
                            <NavLink className="nl" to="/CompanyInfo">
                                Company Info
                        </NavLink>
                            <NavLink className="nl" to="/FrontDesk">
                                Front Desk
                        </NavLink>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            </div>
            <div className ="col-lg-5">
            <div className="row  cfr1">

            </div>
            <div className="row" style={{color:"darkblue",fontFamily:"TimesNewRoman",fontSize:"15px"}}>
            <div className ="col-lg-12">
            <CompanyInfoForm />
            </div>
            </div>
            
            </div>
            </div>
        </div>

    )
};

//exportes our Nav component
export default CompanyInfoFormDiv;

