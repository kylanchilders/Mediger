import React, { Component } from "react";
import { Form, Button, FormGroup, Col,Card } from 'react-bootstrap';
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
      .then(res => window.location.reload(true))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Card>
  <Card.Header  style={{fontFamily:"TimesNewRoman",color:"darkblue",fontSize:"20px"}}><strong>Add Patient</strong></Card.Header>
 
  <Card.Body>
  <Form onSubmit={this.handleSubmit} style={{color:"darkblue",fontFamily:"TimesNewRoman",fontSize:"14px"}}>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-2">
        <Form.Group><Form.Label ><strong>First Name</strong></Form.Label>
          <Form.Control  className="input"type="input" name="First_Name" onChange={this.handleInputChange} /></Form.Group>
          </div>
          <div className="col-lg-2">
         <Form.Group><Form.Label ><strong>Last Name</strong></Form.Label>
          <Form.Control className="input" type="input" name="Last_Name" onChange={this.handleInputChange} /></Form.Group>
          </div>
          <div className="col-lg-2">
          <Form.Group><Form.Label><strong>Date Of Birth</strong></Form.Label>
      <Form.Control className="input" type="input" name="Date_Of_Birth" onChange={this.handleInputChange} /></Form.Group>
          </div>
          <div className="col-lg-2"></div>
          </div>
          <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-2">
          <Form.Group><Form.Label><strong>Address</strong></Form.Label>
      <Form.Control className="input"type="input" name="Address" onChange={this.handleInputChange} /></Form.Group>
          </div>
          <div className="col-lg-2">
          <Form.Group><Form.Label><strong>City</strong></Form.Label>
      <Form.Control  className="input"type="input" name="City" onChange={this.handleInputChange} /></Form.Group>
          </div>
          <div className="col-lg-2">
          <Form.Group><Form.Label><strong>State</strong></Form.Label>
      <Form.Control className="input" type="input" name="State" onChange={this.handleInputChange} /></Form.Group>
          </div>
          <div className="col-lg-2"></div>
          </div>
          <div className="row">
          <div className="col-lg-2"></div>
            <div className="col-lg-2">
            <Form.Group><Form.Label><strong>Zip Code</strong></Form.Label>
      <Form.Control className="input" type="input" name="Zip_Code" onChange={this.handleInputChange} /></Form.Group>
            </div>
            <div className="col-lg-2">
            <Form.Group><Form.Label><strong>Email Address</strong></Form.Label>
      <Form.Control className="input" type="email" name="Email" onChange={this.handleInputChange} /></Form.Group>
            </div>
            <div className="col-lg-2">
            <Form.Group><Form.Label><strong>Phone Number</strong></Form.Label>
      <Form.Control className="input" type="input" name="Phone_Number" onChange={this.handleInputChange} /></Form.Group>
            </div>
            <div className="col-lg-2"></div>
          </div>
          <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-2"></div>
            <div className="col-lg-2">
               <Form.Group> <Form.Label><strong>Organization ID</strong></Form.Label>
      <Form.Control className="input" type="input" name="orgID" onChange={this.handleInputChange} /></Form.Group>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-2"></div>
          </div>
          <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-2"></div>
            <div className="col-lg-2">
      <Button type="submit" style={{fontFamily:"TimesNewRoman",backgroundColor:"darkblue"}}><strong>
      Add Patient
      </strong>
      </Button>
      </div>
      <div className="col-lg-2"></div>
            <div className="col-lg-2"></div>
      </div>
      </Form>
  </Card.Body>
  </Card>
     
    )
  }
}
export default FrontDeskForm