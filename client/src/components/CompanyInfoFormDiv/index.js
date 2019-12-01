import React from "react";
import styles from './sideBarMenu.css';
// import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import { Nav, NavItem, Navbar, NavDropdown, DropdownItem, Col, Row, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CompanyInfoForm from '../CompanyInfoForm'



const CompanyInfoFormDiv = () => {
    return (
        <div className="mainDiv" >
            <div className="sideBarMenuContainer">
                <Navbar fluid="true" inverse="true" >
                    <Navbar.Collapse>
                        <Navbar.Text className="nt">
                            <NavLink className="nl" to="/PatientList">
                                PatientList
                        </NavLink>
                            <NavLink className="nl" to="/CreateRoom">
                                CreateRoom
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
            <CompanyInfoForm />
        </div>

    )
};

//exportes our Nav component
export default CompanyInfoFormDiv;

