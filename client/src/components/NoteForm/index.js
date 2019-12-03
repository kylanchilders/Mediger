import React , { Component } from "react";
import { Form, Button, FormGroup } from 'react-bootstrap';
import "./style.css";




class NoteForm extends Component {
    constructor() {
      super();
      this.state = {
        Note: '',
        Date: '',
        userID: ''
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
      console.log(this.props.match.params.id)
      fetch("http://localhost:3010/api/notes/" + this.props.match.params.id, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          Note: this.state.Note,
          Date: this.state.Date,
          userID: this.state.userID,
          patientID: this.props.match.params.id
        })
  
      })
  
    }
  
    render() {
      return (
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Note</Form.Label>
            <Form.Control type="input" name="Note" onChange={this.handleInputChange}/>
            <Form.Label>Date Entered</Form.Label>
            <Form.Control type="input" name="Date" onChange={this.handleInputChange}/>
            <Form.Label>Your ID</Form.Label>
            <Form.Control type="input" name="userID" onChange={this.handleInputChange}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Note
    </Button>
        </Form>
      )
    }
  }
    export default NoteForm