import React, { Component } from "react";
import "./style.css";
import Table from 'react-bootstrap/Table'
import { Nav, NavItem, Navbar, NavDropdown, DropdownItem, Card } from 'react-bootstrap';

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

        fetch("http://localhost:3010/api/notes/" + id, {
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
                <Card className="card1">
                <Card.Header  style={{fontFamily:"TimesNewRoman",color:"darkblue",fontSize:"20px"}}><strong>Patient List</strong></Card.Header>
                <Card.Body className="text-left">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th style={{width:"20px"}}>Notes</th>
                            <th>Room Number</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>DateOfBirth</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>ZipCode</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.patients.length ? (
                   this.state.patients.map(patients => (
                       <tr key={patients.id}>
                       {/* <ListItem key={patients.id}> */}
                           <td style={{width:"5rem"}}>
                           <Link to={"/Notes/" + patients.id} style={{color:"black",textDecoration:"none"}}>
                               Notes
                               </Link>
                              
                               </td>
                               <td style={{width:"3rem"}}>{patients.roomID}</td>
                               <td style={{width:"8rem"}}>{patients.First_Name}</td>
                               <td style={{width:"8rem"}}>{patients.Last_Name}</td>
                               <td style={{width:"5rem"}}>{patients.Date_Of_Birth}</td>
                               <td style={{width:"10rem"}}>{patients.Address}</td>
                               <td style={{width:"3rem"}}>{patients.City}</td>
                               <td style={{width:"2rem"}}>{patients.State}</td>
                               <td style={{width:"3rem"}}>{patients.Zip_Code}</td>
                               <td style={{width:"3rem"}}>{patients.Email}</td>
                               {/* <strong>
                                   {patients.First_Name} {patients.Last_Name} {patients.Address}  {patients.City}  {patients.State} {patients.Zip_Code} {patients.Email} {patients.orgID} {patients.RoomID}
                               </strong> */}
                               <td > <strong><DeleteBtn style={{float:"left"}} onClick={() => { if (window.confirm('Are you sure you wish to delete this patient?')) this.deletePatient(patients.id)}} /></strong></td>
                       </tr>
                     
                   ))
                  
           ) : (
                   <h3>No Results to Display</h3>
               )}
                  </tbody>   
                   
                </Table>
                </Card.Body>
                </Card>
                
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
                        // <h3>No Results to Display</h3>
                    )} */}
            </div>

        )
    };
}
//exportes our Nav component
export default PatientDiv;

