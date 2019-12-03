import React, { Component } from "react";
import { Nav, NavItem, Navbar, NavDropdown, DropdownItem, Button, Dropdown, Form, FormGroup } from 'react-bootstrap';
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
            First_Name: '',
            Last_Name: '',
            roomID: '',
            Name: '',
            Available: '',
            patientID: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit = id => {
        console.log(id)
        fetch("http://localhost:3010/api/room/", {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                First_Name: this.state.First_Name,
                Last_Name: this.state.Last_Name,
                patientID: this.state.id,
                id: id,
                Available: 0
            })

        })
            .then(res => this.componentDidMount())
            .catch(err => console.log(err));
    }

    checkOut = id => {
        console.log(id)
        fetch("http://localhost:3010/api/room/", {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: id,
                Available: 1
            })

        })
            .then(res => console.log(res), this.componentDidMount())
            .catch(err => console.log(err));
    }
    
    render() {
        return (
            <Table className="patientTable" striped bordered hover>
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
                                    <Dropdown className="dropDown" style={{ display: "inline" }}>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            Rooms Available
                                    </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                        {this.state.rooms.length ? (
                        this.state.rooms.map(rooms => (
                                            <Dropdown.Item key={rooms.id} >{rooms.id}</Dropdown.Item>
                                            ))
                                            ) : (
                                                    <h3>No Rooms to Assign</h3>
                                                )}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>                        
                                <td><Button onClick={() => { this.handleSubmit(patients.roomID) }}>Check-In</Button></td>
                                <td><Button onClick={() => { this.checkOut(patients.roomID) }}>Check-Out</Button></td>
                            </tr>
                        ))
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </tbody>

            </Table>
        )
    }
}
export default AvailableRoom