import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";


class Notes extends Component {

  state = {
    notes: [],
    patient: []
  }

  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc


  componentDidMount() {
    console.log(this.props.match.params.id)
    fetch("http://localhost:3010/api/notes/" + this.props.match.params.id, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },


    }).then((res) => {
        res.json().then((data) => {
            this.setState({ notes: data})
            console.log(this.state);
        });
    });
    fetch("http://localhost:3010/api/patient/" + this.props.match.params.id, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },


    }).then((res) => {
        res.json().then((data) => {
            this.setState({ patient: data})
            console.log(this.state);
            
        });
    });
    this.checkState()
};

checkState() {
  console.log(this.state);
}

  render() {
    return (
      
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
              {this.state.patient.map(patients => (
            <p key={patients}>{patients.First_Name} {patients.Last_Name}</p>
          ))}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Patient Notes</h1>

<br></br>
          {this.state.notes.map((notes, id) => (
            <p key={id}>{notes.Note}</p>
          ))}

            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/PatientList">← Back to Patients</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Notes;