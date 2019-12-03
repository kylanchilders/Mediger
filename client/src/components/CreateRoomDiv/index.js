import React, { Component } from "react";
import styles from './sideBarMenu.css';
import config from '../../config';
// import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import { Nav, NavItem, Navbar, NavDropdown, DropdownItem } from 'react-bootstrap';
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
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              Name: this.state.Name,
              orgID: this.state.orgID,

            })
            
          })

      }

  render() {
    return (
        <div className="mainDiv" >
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

   <Form onSubmit={this.handleSubmit}>
   <Form.Group>
          <Form.Label>Enter Room Name</Form.Label>
          <Form.Control type="input" name="Name" onChange={this.handleInputChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your Organization ID</Form.Label>
          <Form.Control type="input" name="orgID" onChange={this.handleInputChange}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Create Room!
  </Button>
      </Form>
        </div>

    )
};
}

//exports our Nav component
export default CreateRoomDiv;

