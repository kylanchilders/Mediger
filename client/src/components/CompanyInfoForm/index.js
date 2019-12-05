import React , { Component } from "react";
import { Form, Button, FormGroup,Col,Card } from 'react-bootstrap';
import "./style.css";

class CompanyInfoForm extends Component {
  constructor() {
    super();
    this.state = {
      Name: '',
      Address: '',
      City: '',
      State: '', 
      Zip_Code: '', 
      Email: '', 
      Phone_Number: ''
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


    fetch("http://localhost:3010/api/organization/", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Name: this.state.Name,
        Address: this.state.Address,
        City: this.state.City,
        State: this.state.State, 
        Zip_Code: this.state.Zip_Code, 
        Email: this.state.Email, 
        Phone_Number: this.state.Phone_Number,


      })

    })

  }

  render() {
    return (
      <Card>
  <Card.Header className="text-center"  style={{fontFamily:"TimesNewRoman",color:"darkblue",fontSize:"20px"}}><strong>Organization Information</strong></Card.Header>
 
  <Card.Body>
      <Form className ="companyForm"onSubmit={this.handleSubmit}>
          <Form.Row>
            <Col> <Form.Group>
          <Form.Label><strong>Organization Name</strong></Form.Label>
          <Form.Control type="input" name="Name" onChange={this.handleInputChange} required/>
        </Form.Group></Col>
            <Col>
            <Form.Group>
          <Form.Label><strong>Contact </strong></Form.Label>
          <Form.Control type="input" name="Phone_Number" onChange={this.handleInputChange} required pattern="^\d{10}$"/>
        </Form.Group></Col>
          </Form.Row>
        <Form.Row>
          <Col><Form.Group>
          <Form.Label><strong>Address</strong></Form.Label>
          <Form.Control type="input" name="Address" onChange={this.handleInputChange} required/>
        </Form.Group></Col>
          <Col> <Form.Group>
          <Form.Label><strong>City</strong></Form.Label>
          <Form.Control type="input" name="City" onChange={this.handleInputChange} required/>
        </Form.Group></Col>
          </Form.Row> 
        <Form.Row>
          <Col><Form.Group>
          <Form.Label><strong>State</strong></Form.Label>
          <Form.Control type="input" name="State" onChange={this.handleInputChange} required/>
        </Form.Group></Col>
          <Col><Form.Group>
          <Form.Label><strong>Zip Code</strong></Form.Label>
          <Form.Control type="input" name="Zip_Code" onChange={this.handleInputChange} required pattern="^\d{5}$"/>
        </Form.Group></Col>
        </Form.Row>
        <Form.Group>
          <Form.Label><strong>Organization Contact  Email</strong></Form.Label>
          <Form.Control type="email" name="Email" onChange={this.handleInputChange} required/>
        </Form.Group>
        <Button  type="submit" style={{fontFamily:"TimesNewRoman",backgroundColor:"darkblue"}}><strong>
          Add Information
          </strong>
      </Button>
        </Form>
        </Card.Body>
       
  </Card>
    )
  }
}
  export default CompanyInfoForm