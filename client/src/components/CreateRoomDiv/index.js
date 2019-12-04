import React, { Component } from "react";
import './style.css';
import config from '../../config';
// import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import { Nav, NavItem, Navbar, NavDropdown, DropdownItem,Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';


class CreateRoomDiv extends Component {
  constructor() {
    super();
    this.state = {
      Name: '',
      orgID: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

    })

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
        <div className="col-lg-5">
          <div className="row r1"></div>
          <div className="row" style={{color:"darkBlue",fontFamily:"TimesNewRoman",fontSize:"16px"}}>
            <div className="col-lg-12">
            <Card>
  <Card.Header className="text-center"  style={{fontFamily:"TimesNewRoman",color:"darkblue",fontSize:"20px"}}><strong>Create Room</strong></Card.Header>
 
  <Card.Body>
        <Form className="createRoomForm"onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label><strong>Enter Room Name</strong></Form.Label>
            <Form.Control type="input" name="Name" onChange={this.handleInputChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label><strong>Enter Organization ID</strong></Form.Label>
            <Form.Control type="input" name="orgID" onChange={this.handleInputChange} />
          </Form.Group>
          <Button type="submit" style={{backgroundColor:"darkBlue",fontFamily:"TimesNewRoman",fontSize:"16px"}}><strong>
            Create Room!
            </strong>
  </Button>
          </Form>
          </Card.Body>
         
  </Card>
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

