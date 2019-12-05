import React, { Component } from "react";
import './style.css';
import config from '../../config';
// import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import { Nav, NavItem, Navbar, NavDropdown, DropdownItem, Card } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import DeleteBtn from "../DeleteBtn";


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

    }).then(res => this.componentDidMount())

  }
  deleteRoom = id => {
    fetch("http://localhost:3010/api/room/" + id, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },

    }).then(res => this.componentDidMount())
  }

  render() {
    return (
      <div className="createRoomDiv" >
        <div className="row">
          <div className="col-lg-2">
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
          <div className="col-lg-10">
            <div className="row">
              <Card className="tableCard">
                <Card.Header className="text-center" style={{ fontFamily: "TimesNewRoman", color: "darkblue", fontSize: "20px" }}><strong>Room Details</strong></Card.Header>
                <Card.Body>
                  <Table striped bordered hover>
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
                </Card.Body>
              </Card>
            </div>
            <br></br>
            <div>
              <div className="row" >
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                  <Card>
                    <Card.Header className="text-center" style={{ fontFamily: "TimesNewRoman", color: "darkblue", fontSize: "20px" }}><strong>Create Room</strong></Card.Header>
                    <Card.Body className="text-left">
                      <Form className="createRoomForm" onSubmit={this.handleSubmit} style={{ fontFamily: "TimesNewRoman", color: "darkblue", fontSize: "15px" }}>
                        <div className="row">
                          <div className="col-lg-2"></div>
                          <div className="col-lg-4">
                            <Form.Group>
                              <Form.Label><strong>Enter Room Name</strong></Form.Label>
                              <Form.Control className="inputO" type="input" name="Name" onChange={this.handleInputChange} />
                            </Form.Group>
                          </div>
                          <div className="col-lg-4">
                            <Form.Group>
                              <Form.Label><strong>Enter Organization ID</strong></Form.Label>
                              <Form.Control className="inputO" type="input" name="orgID" onChange={this.handleInputChange} />
                            </Form.Group>
                          </div>
                          <div className="col-lg-5"></div>
                        </div>
                        <div className="row">
                          <div className="col-lg-4"></div>
                          <div className="col-lg-4">
                            <Button type="submit" style={{ backgroundColor: "darkBlue", fontFamily: "TimesNewRoman", fontSize: "16px" }}><strong>
                              Create Room!
                            </strong>
                            </Button>
                          </div>
                          <div className="col-lg-2"></div>
                        </div>

                      </Form>
                    </Card.Body>

                  </Card>
                </div>
                <div className="col-lg-3"></div>

              </div>
            </div>
            <div className="col-lg-2"></div>


          </div>
        </div>
      </div>
    )
  };
}

//exports our Nav component
export default CreateRoomDiv;

