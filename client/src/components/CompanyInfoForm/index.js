import React , { Component } from "react";
import { Form, Button, FormGroup,Col } from 'react-bootstrap';
import "./CompanyInfoForm.css";

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
      <Form onSubmit={this.handleSubmit}>
        
          <Form.Row>
            <Col> <Form.Group>
          <Form.Label>Organization Name</Form.Label>
          <Form.Control type="input" name="Name" onChange={this.handleInputChange}/>
        </Form.Group></Col>
            <Col>
            <Form.Group>
          <Form.Label>Contact </Form.Label>
          <Form.Control type="input" name="Phone_Number" onChange={this.handleInputChange}/>
        </Form.Group></Col>
          </Form.Row>
        <Form.Row>
          <Col><Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control type="input" name="Address" onChange={this.handleInputChange}/>
        </Form.Group></Col>
          <Col> <Form.Group>
          <Form.Label>City</Form.Label>
          <Form.Control type="input" name="City" onChange={this.handleInputChange}/>
        </Form.Group></Col>
          </Form.Row> 
        <Form.Row>
          <Col><Form.Group>
          <Form.Label>State</Form.Label>
          <Form.Control type="input" name="State" onChange={this.handleInputChange}/>
        </Form.Group></Col>
          <Col><Form.Group>
          <Form.Label>Zip Code</Form.Label>
          <Form.Control type="input" name="Zip_Code" onChange={this.handleInputChange}/>
        </Form.Group></Col>
        </Form.Row>
        <Form.Group>
          <Form.Label>Organization Contact  Email</Form.Label>
          <Form.Control type="email" name="Email" onChange={this.handleInputChange}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Update Info
  </Button>
      </Form>
    )
  }
}
  export default CompanyInfoForm