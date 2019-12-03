import React from "react";
import "./style.css";
import Table from 'react-bootstrap/Table'
import { Nav, NavItem, Navbar, NavDropdown, DropdownItem, Button, Dropdown, } from 'react-bootstrap';
import { Col, Row, Container } from "../Grid";
import { NavLink } from 'react-router-dom';
import FrontDeskForm from "../FrontDeskForm";
import AvailableRoom from "../AvailableRoom";



const FrontDeskDiv = () => {
    return (

        <div className="frontDeskDiv" >

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
            <Table className="patientTable" striped bordered hover>
                <thead>
                    <tr>
                        <th className="head">First Name</th>
                        <th className="head">Last Name</th>
                        <th className="head">RoomNo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td><input type="text" name="room_number"></input></td>
                        <td><Button>Check-In</Button></td>
                        <td><Button>Check-Out</Button></td>
                    </tr>
                </tbody>
            </Table>
            
           <Container style={{paddingRight: "15px",paddingLeft: "15px",marginRight: "5rem",marginLeft: "auto"}}>
           <Row  >
             
               <Col size="lg-2">
               <Dropdown className="dropDown"style={{display:"inline"}}>
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
           
                    
                        <Col size="lg-5" >
                            <FrontDeskForm  className="ff"/>
                        </Col>

                        <Col size="lg-5" className="rooms">
                            <AvailableRoom className="ar"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        

    )
};

//exportes our Nav component
export default FrontDeskDiv;

