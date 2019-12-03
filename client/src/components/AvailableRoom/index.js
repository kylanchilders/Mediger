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
    }
    componentDidMount() {
        fetch("http://localhost:3010/api/room/", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },


        }).then((res) => {
            res.json().then((data) => {
                this.setState({ rooms: data })
                console.log(this.state);
            });
        });

        fetch("http://localhost:3010/api/patient/", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },


        }).then((res) => {
            res.json().then((data) => {
                this.setState({ patients: data, First_Name: "", Last_Name: "", Date_Of_Birth: "", Address: "", City: "", State: "", Zip_Code: "", Email: "", orgID: "", RoomID: "" })
            });
        });
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit(event) {
        event.preventDefault();

        const data = new FormData(event.target);

        console.log(...data)


        console.log(this.state)


        fetch("http://localhost:3010/api/room/:id", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                First_Name: this.state.First_Name,
                Last_Name: this.state.Last_Name,
                id: this.state.id,
                Available: 0
            })

        })
            .then(res => this.componentDidMount())
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
                    </tr>
                </thead>

                <tbody>
                    {this.state.patients.length ? (
                        this.state.patients.map(patients => (
                            <tr className="d-flex" key={patients.id}>
                                {/* <ListItem key={patients.id}> */}

                                <td className="col-1">{patients.First_Name}</td>
                                <td className="col-1">{patients.Last_Name}</td>
                                <Col size="lg-2">
                                    <Dropdown className="dropDown" style={{ display: "inline" }}>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            Rooms Available
                                    </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Room1</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Room2</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Room3</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                                <td><Button>Check-In</Button></td>
                                <td><Button>Check-Out</Button></td>
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