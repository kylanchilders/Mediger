import React, { Component } from "react";
import "./style.css";
import Table from 'react-bootstrap/Table'
import { Nav, NavItem, Navbar, NavDropdown, DropdownItem } from 'react-bootstrap';

import { NavLink, Link } from 'react-router-dom';
import DeleteBtn from "../DeleteBtn";
import { List, ListItem } from "../List";

class PatientDiv extends Component {
    constructor(props) {
        super(props);

    }
    state = {
        patients: [],
        id: '',
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



    componentDidMount() {
        fetch("http://localhost:3010/api/patient/", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },


        }).then((res) => {
            res.json().then((data) => {
                this.setState({ patients: data, First_Name: "", Last_Name: "", Date_Of_Birth: "", Address: "", City: "", State: "", Zip_Code: "", Email: "", orgID: "", RoomID: "" })
            });
        });

    }
    deletePatient = id => {
        fetch("http://localhost:3010/api/patient/" + id, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },

        })
            .then(res => this.componentDidMount())
            .catch(err => console.log(err));
    };
    render() {
        return (

            <div className="patientDiv" >

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
                <Table className="patientTable" striped bordered hover>
                    <thead>
                        <tr className="d-flex">
                            <th className="col-1">Notes</th>
                            <th className="col-1">First Name</th>
                            <th className="col-1">Last Name</th>
                            <th className="col-2">DateOfBirth</th>
                            <th className="col-2">Address</th>
                            <th className="col-1">City</th>
                            <th className="col-1">State</th>
                            <th className="col-1">ZipCode</th>
                            <th className="col-2">Email</th>

                            
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.patients.length ? (
                   this.state.patients.map(patients => (
                       <tr className="d-flex" key={patients.id}>
                       {/* <ListItem key={patients.id}> */}
                           <Link to={"/Notes/" + patients.id}>
                               <td className="col-1">Notes</td>
                               </Link>
                               <td className="col-1">{patients.First_Name}</td>
                               <td className="col-1">{patients.Last_Name}</td>
                               <td className="col-2">{patients.Date_Of_Birth}</td>
                               <td className="col-2">{patients.Address}</td>
                               <td className="col-1">{patients.City}</td>
                               <td className="col-1">{patients.State}</td>
                               <td className="col-1">{patients.Zip_Code}</td>
                               <td className="col-2">{patients.Email}</td>
                               {/* <strong>
                                   {patients.First_Name} {patients.Last_Name} {patients.Address}  {patients.City}  {patients.State} {patients.Zip_Code} {patients.Email} {patients.orgID} {patients.RoomID}
                               </strong> */}
                           <td className="col-1"><DeleteBtn onClick={() => { if (window.confirm('Are you sure you wish to delete this patient?')) this.deletePatient(patients.id)}} /></td>
                       </tr>
                   ))
           ) : (
                   <h3>No Results to Display</h3>
               )}
                    </tbody>
                   
                </Table>
                {/* {this.state.patients.length ? (
                    <List>
                        {this.state.patients.map(patients => (
                            <ListItem key={patients.id}>
                                <Link to={"/Notes/" + patients.id}>
                                    <strong>
                                        {patients.First_Name} {patients.Last_Name} {patients.Address}  {patients.City}  {patients.State} {patients.Zip_Code} {patients.Email} {patients.orgID} {patients.RoomID}
                                    </strong>
                                </Link>
                                <DeleteBtn onClick={() => { if (window.confirm('Are you sure you wish to delete this patient?')) this.deletePatient(patients.id)}} />
                            </ListItem>
                        ))}
                    </List>
                ) : (
                        <h3>No Results to Display</h3>
                    )} */}
            </div>

        )
    };
}
//exportes our Nav component
export default PatientDiv;

