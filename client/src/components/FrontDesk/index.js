import React from "react";
import "./style.css";
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
            <AvailableRoom />
            
           <Container style={{paddingRight: "15px",paddingLeft: "15px",marginRight: "5rem",marginLeft: "auto"}}>
           <Row  >
                    
                        <Col size="lg-5" >
                            <FrontDeskForm  className="ff"/>
                        </Col>

                    </Row>
                </Container>
            </div>
        

    )
};

//exportes our Nav component
export default FrontDeskDiv;

