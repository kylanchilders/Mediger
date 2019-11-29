import React, { Component } from "react";
import styles from './sideBarMenu.css';
import config from '../../config';
// import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import { Nav, NavItem, Navbar, NavDropdown, DropdownItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function stringifyFormData(fd) {
    const data = {};
      for (let key of fd.keys()) {
        data[key] = fd.get(key);
    }
    return JSON.stringify(data, null, 2);
  }
class CreateRoomDiv extends Component {
    constructor() {
        super();
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(this.data)
        console.log(...data)
        
        this.setState({
            res: stringifyFormData(data)})
            console.log(this.state)
            console.log(...data)

        fetch("http://localhost:3010/api/createRoom", {
          method: 'POST',
          body: data,
        });
      }

  render() {
    return (
        <div className="mainDiv" >
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

   <Form onSubmit={this.handleSubmit}>
        <label htmlFor="Name">Enter Room Name</label>
        <input id="Name" name="Name" type="text" />

        <label htmlFor="orgID">Enter your Organization ID</label>
        <input id="orgID" name="orgID" type="text" />

        <button>Create Room!</button>
      </Form>
      <Form>
      {this.state.res && (
        	<div className="res-block">
            <h3>Data to be sent:</h3>
            <pre>FormData {this.state.res}</pre>
        	</div>
        )}
        </Form>
        </div>

    )
};
}

//exports our Nav component
export default CreateRoomDiv;

