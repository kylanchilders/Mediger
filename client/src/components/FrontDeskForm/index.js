import React , { Component } from "react";
import { Form, Button, FormGroup } from 'react-bootstrap';
import "./style.css";




class FrontDeskForm extends Component {
    constructor() {
      super();
      this.state = {
        First_Name: '',
        Last_Name: '',
        Date_Of_Birth: '',
        Address: '',
        City: '',
        State: '', 
        Zip_Code: '', 
        Email: '', 
        Phone_Number: '',
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
  
  
      console.log(this.state)
  
  
      fetch("http://localhost:3010/api/patient/", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          First_Name: this.state.First_Name,
          Last_Name: this.state.Last_Name,
          Date_Of_Birth: this.state.Date_Of_Birth,
          Address: this.state.Address,
          City: this.state.City,
          State: this.state.State, 
          Zip_Code: this.state.Zip_Code, 
          Email: this.state.Email, 
          Phone_Number: this.state.Phone_Number,
          orgID: this.state.orgID
  
        })
  
      })
  
    }
  
    render() {
      return (
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="input" name="First_Name" onChange={this.handleInputChange}/>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="input" name="Last_Name" onChange={this.handleInputChange}/>
            <Form.Label>Date Of Birth</Form.Label>
            <Form.Control type="input" name="Date_Of_Birth" onChange={this.handleInputChange}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control type="input" name="Address" onChange={this.handleInputChange}/>
            <Form.Label>City</Form.Label>
            <Form.Control type="input" name="City" onChange={this.handleInputChange}/>
            <Form.Label>State</Form.Label>
            <Form.Control type="input" name="State" onChange={this.handleInputChange}/>
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="input" name="Zip_Code" onChange={this.handleInputChange}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" name="Email" onChange={this.handleInputChange}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="input" name="Phone_Number" onChange={this.handleInputChange}/>
            <Form.Label>Organization ID</Form.Label>
            <Form.Control type="input" name="orgID" onChange={this.handleInputChange}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Update Info
    </Button>
        </Form>
      )
    }
  }
    export default FrontDeskForm