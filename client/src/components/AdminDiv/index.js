import React from "react";
import styles from './sideBarMenu.css';
// import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import { Nav, NavItem, Navbar, NavDropdown, DropdownItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const ProfileDiv = () => {
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
                <div className="col-lg-5">
                    <div className="row r1">

                    </div>
                    <div className="row r2">
                        <div className="col-lg-12 col21">
                            <div className="row">
                                <h1 style={{ color: "darkBlue", position:"relative",left:"20%" }}><strong>Welcome to Mediger</strong></h1>
                            </div>
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-6">
                                <h6 className="glad" style={{ fontFamily: "TimesNewRoman", color:"Red",position:"relative",left:"35%" }}><strong>WE'RE GLAD YOU ARE HERE</strong></h6>
                                </div>  
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
};

//exportes our Nav component
export default ProfileDiv;

