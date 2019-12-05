import React, { Component } from "react";
import './style.css';
import config from '../../config';
// import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Table from 'react-bootstrap/Table'
import { Nav, NavItem, Navbar, NavDropdown, DropdownItem } from 'react-bootstrap';

import { NavLink, Link } from 'react-router-dom';
import DeleteBtn from "../DeleteBtn";
import { Form, Button } from 'react-bootstrap';


class CreateRoomDiv extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteRoom = this.deleteRoom.bind(this);
  };

  state = {
    patientRooms: [],
    id: '',
    First_Name: '',
    Last_Name: '',
    orgID: '',
    RoomID: '',
    Name: '',
    orgID: ''
  }


  componentDidMount() {


    fetch("http://localhost:3010/api/room/room", {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },


    }).then((res) => {
      res.json().then((data) => {
        this.setState({ patientRooms: data })
        console.log(this.state.patientRooms)
      });
    })
    

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


    console.log(this.state.Name)
    console.log(this.state.orgID)

    fetch("http://localhost:3010/api/room/createRoom", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Name: this.state.Name,
        orgID: this.state.orgID,

      })

    }).then (res => this.componentDidMount())

  }

  deleteRoom = id => {
    fetch("http://localhost:3010/api/room/" + id, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },

    }).then (res => this.componentDidMount())
  }

  render() {
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
          </div>
          <Table className="patientTable" striped bordered hover>
            <thead>
              <tr>
                <th>Room Number</th>
                <th>Room Name</th>
                <th>Patient</th>
                <th>Notes</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.patientRooms.length ? (
                this.state.patientRooms.map(patientRooms => (
                  <tr key={patientRooms.id}>
                    <td style={{ width: "3rem" }}>{patientRooms.id}</td>
                    <td style={{ width: "8rem" }}>{patientRooms.name}</td>
                    <td style={{ width: "8rem" }}>{patientRooms.First_Name} {patientRooms.Last_Name}</td>
                    <td style={{ width: "5rem" }}><Link to={"/Notes/" + patientRooms.patientid}>Notes</Link></td>

                    <td > <strong><DeleteBtn style={{ float: "left" }} onClick={() => { if (window.confirm('Are you sure you wish to delete this room?')) this.deleteRoom(patientRooms.id) }} /></strong></td>
                  </tr>

                ))

              ) : (
                  <h3>No Results to Display</h3>
                )}
            </tbody>
          </Table>
          <div className="col-lg-5">
            <div className="row r1"></div>
            <div className="row" style={{ color: "Red", fontFamily: "TimesNewRoman", fontSize: "20px" }}>
              <div className="col-lg-12">
                <Form className="createRoomForm" onSubmit={this.handleSubmit}>
                  <Form.Group>
                    <Form.Label><strong>Enter Room Name</strong></Form.Label>
                    <Form.Control type="input" name="Name" onChange={this.handleInputChange} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label><strong>Enter Organization ID</strong></Form.Label>
                    <Form.Control type="input" name="orgID" onChange={this.handleInputChange} />
                  </Form.Group>
                  <Button variant="danger" type="submit" style={{ fontFamily: "TimesNewRoman" }}><strong>
                    Create Room!
            </strong>
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  };
}

//exports our Nav component
export default CreateRoomDiv;

