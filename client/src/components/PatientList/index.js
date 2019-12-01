import React, { Component } from "react";
import "./style.css";
import Table from 'react-bootstrap/Table'
import { Nav, NavItem, Navbar, NavDropdown, DropdownItem } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import DeleteBtn from "../DeleteBtn";
import { List, ListItem } from "../List";

class PatientDiv extends Component {

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
            console.log(this.state)
            console.log(data);
        });
    });

}
deletePatient = id => {
    fetch("http://localhost:3010/api/patient/:id", {
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
            <Table className="patientTable" striped bordered hover>
                <thead>
                    <tr>
                        <th className="head">First Name</th>
                        <th className="head">Last Name</th>
                        <th className="head">DateOfBirth</th>
                        <th className="head">Address</th>
                        <th className="head">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                </tbody>
            </Table>
            {this.state.patients.length ? (
              <List>
                {this.state.patients.map(patients => (
                  <ListItem key={patients.id}>
                    <Link to={"/api/notes/" + patients.id}>
                      <strong>
                        {patients.First_Name} {patients.Last_Name}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deletePatient(patients.id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </div>

    )
};
}
//exportes our Nav component
export default PatientDiv;

