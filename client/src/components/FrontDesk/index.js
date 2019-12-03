import React from "react";
import "./style.css";
import Table from 'react-bootstrap/Table'
import { Nav, NavItem, Navbar, NavDropdown, DropdownItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const FrontDeskDiv = () => {
    return (
        <div className="frontDeskDiv" >
           
            <div className="sideBarMenuContainer">
                <Navbar fluid="true" inverse="true" >
                    <Navbar.Collapse>
                        <Navbar.Text className="nt">
                            <NavLink className="nl" to="/PatientList">
                                Patient List
                        </NavLink>
                            <NavLink className="nl" to="/CreateRoom">
                                Create Room
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
            <Table className="patientTable"striped bordered hover>
                <thead>
                    <tr>
                        <th className="head">First Name</th>
                        <th className="head">Last Name</th>
                        <th className="head">DateOfBirth</th>
                        <th className="head">Address</th>
                        <th className="head">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                   
                </tbody>
            </Table>
        </div>

    )
};

//exportes our Nav component
export default FrontDeskDiv;

