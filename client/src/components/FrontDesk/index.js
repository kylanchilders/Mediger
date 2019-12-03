import React from "react";
import "./style.css";
import Table from 'react-bootstrap/Table'
import { Nav, NavItem, Navbar, NavDropdown, DropdownItem } from 'react-bootstrap';
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
        <div>
        <Container fluid>
        <Row>
          <Col size= "md-12">
           <FrontDeskForm />
           </Col>   
        </Row>
        <Row>

           <Col size="md-12" className = "rooms">
           <AvailableRoom />
           </Col>
        </Row>
      </Container>
      </div>
        </div>

    )
};

//exportes our Nav component
export default FrontDeskDiv;

