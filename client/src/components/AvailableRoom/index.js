import React, { Component } from "react";
import { Nav, NavItem, Navbar, NavDropdown, DropdownItem, Button, Dropdown, Form, FormGroup, Card } from 'react-bootstrap';
import { Col, Row, Container } from "../Grid";
import Table from 'react-bootstrap/Table'
import "./style.css";


class AvailableRoom extends Component {
    constructor() {
        super();
        this.state = {
            patients: [],
            rooms: [],
            id: '',
            CheckedIn: '',
            First_Name: '',
            Last_Name: '',
            roomID: '',
            Name: '',
            Available: '',
            patientID: '',
            chosenRoomID: ''
        };

        this.checkIn = this.checkIn.bind(this);
        this.checkOut = this.checkOut.bind(this);
    }

    
    componentDidMount() {
        fetch("http://localhost:3010/api/room/", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },


        }).then((res) => {
            res.json().then((data) => {
                this.setState({ rooms: data })
            });
        });

        fetch("http://localhost:3010/api/patient/", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },


        }).then((res) => {
            res.json().then((data) => {
                this.setState({ patients: data })
            });
        });
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    checkIn = (id, patid, CheckedIn) => {
        console.log(CheckedIn)
        console.log(this.state)


        fetch("http://localhost:3010/api/room/", {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: id,
                Available: 0
            })

        })

        fetch("http://localhost:3010/api/patient/", {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                roomID: id,
                id: patid,
                CheckedIn: 1
            })

        }).then(res => console.log(res), this.componentDidMount())
        .catch(err => console.log(err));
    
        }

    checkOut = (id, patid) => {
        console.log(id)
        fetch("http://localhost:3010/api/room/", {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: id,
                Available: 1
            })

        })
        console.log(patid)
        fetch("http://localhost:3010/api/patient/", {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: patid,
                roomID: '',
                CheckedIn: 0
            })

        }).then(res => console.log(res), this.componentDidMount(), this.componentDidMount())
        .catch(err => console.log(err));
    
        }
    
        handleSelect = id => {
            // what am I suppose to write in there to get the value?
            this.setState({ chosenRoomID: id })
        }

    render() {
        return (
            <Card className="arCard">
                 <Card.Header  style={{fontFamily:"TimesNewRoman",color:"darkblue",fontSize:"20px"}}><strong>All Patients</strong></Card.Header>
                 <Card.Body className="text-left">

                 <Table  striped bordered hover>
                <thead>
                    <tr className="d-flex">
                        <th className="col-1">First Name</th>
                        <th className="col-1">Last Name</th>
                        <th className="col-2">Room Number</th>
                        <th className="col-2">Available Rooms</th>
                    </tr>
                </thead>

                <tbody>
                    {this.state.patients.length ? (
                        this.state.patients.map(patients => (
                            <tr className="d-flex" key={patients.id}>
                                {/* <ListItem key={patients.id}> */}

                                <td className="col-1">{patients.First_Name}</td>
                                <td className="col-1">{patients.Last_Name}</td>
                                <td className="col-2">{patients.roomID}</td>
                               
                                 <Col size="lg-2">
                                    <Dropdown className="dr">
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        <span id="selected">Choose a Room </span>
                                    </Dropdown.Toggle>

                                        <Dropdown.Menu >
                                        {this.state.rooms.length ? (
                                        this.state.rooms.map(rooms => (
                                            <Dropdown.Item onSelect={() => {this.handleSelect(rooms.id, patients.CheckedIn)}} key={rooms.id} >{rooms.id} </Dropdown.Item>
                                            ))
                                            ) : (
                                                    <h3>No Rooms to Assign</h3>
                                                )}
                                        </Dropdown.Menu>
                                    </Dropdown>
                              
                                </Col>  
                                                   
                                <td><Button onClick={() => { this.checkIn(this.state.chosenRoomID, patients.id, patients.CheckedIn) }}>Check-In</Button></td>
                                <td><Button onClick={() => { this.checkOut(patients.roomID, patients.id) }}>Check-Out</Button></td>
                            </tr>
                        ))
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </tbody>

            </Table>
                 </Card.Body>
            </Card>
           
        )
    }
}
export default AvailableRoom