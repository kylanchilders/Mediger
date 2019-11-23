import React from "react";
import styles from './sideBarMenu.css';
// import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import { Nav, NavItem, Navbar, NavDropdown, DropdownItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';



const ProfileDiv = () => {
    return (
        <div className="mainDiv" >
            <div className="sideBarMenuContainer">
                <Navbar fluid="true" inverse="true" >
                    <Navbar.Collapse>
                        <Navbar.Text className="nt">
                            <NavLink className="nl" to="/">
                                Home
                        </NavLink>
                            <NavLink className="nl" to="/">
                                PatientList
                        </NavLink>
                            <NavLink className="nl" to="/">
                                CreateRoom
                        </NavLink>
                            <NavLink className="nl" to="/">
                                Company Info
                        </NavLink>
                            <NavLink className="nl" to="/">
                                Front Desk
                        </NavLink>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>

    )
};

//exportes our Nav component
export default ProfileDiv;

