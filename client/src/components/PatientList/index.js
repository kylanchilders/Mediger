import React, { Component } from "react";
import "./style.css";
import Table from 'react-bootstrap/Table'
import { Nav, NavItem, Navbar, NavDropdown, DropdownItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class PatientDiv extends Component {
    constructor() {
        super();
        this.state = {
            First_Name: '',
            Last_Name: '',
            Date_Of_Birth: '',
            Address: '',
            City: '',
            State: '',
            Zip_Code: '',
            Email: '',
            orgID: '',
            RoomID: ''
        };

    }
    componentDidMount() {
        fetch("http://localhost:3010/api/patient/", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },


        }).then((response) => {
            console.log(response);
            response.json().then((data) => {
                console.log(data);
            });
        });
    }

    render() {
        return (
            <div className="patientDiv" >

                <div className="sideBarMenuContainer">
                    <Navbar fluid="true" inverse="true" >
                        <Navbar.Collapse>
                            <Navbar.Text className="nt">
                                <NavLink className="nl" to="/Home">
                                    Home
                        </NavLink>
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
                <Table className="patientTable" striped bordered hover>
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
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
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
}
//exportes our Nav component
export default PatientDiv;

