import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Button, FormGroup ,Card} from 'react-bootstrap';
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import EditBtn from "../components/EditBtn";


class Notes extends Component {


  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  constructor() {
    super();

    this.state = {
      notes: [],
      patient: [],
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
  .then(res => this.componentDidMount())
  .catch(err => console.log(err));
}

  componentDidMount() {
    console.log(this.props.match.params.id)
    fetch("http://localhost:3010/api/notes/" + this.props.match.params.id, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },


    }).then((res) => {
      res.json().then((data) => {
        this.setState({ notes: data })
        console.log(this.state);
      });
    });


    fetch("http://localhost:3010/api/patient/" + this.props.match.params.id, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },


    }).then((res) => {
      res.json().then((data) => {
        this.setState({ patient: data })
        console.log(this.state);

      });
    });

  };

  deleteNote = id => {
    fetch("http://localhost:3010/api/notes/" + id, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },

    })
      .then(res => this.componentDidMount())
      .catch(err => console.log(err));
  };



  editNote = id => {

    fetch("http://localhost:3010/api/notes/" + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Note: this.state.Note,
        patientID: this.props.match.params.id
      })
    })
      .then(res => this.componentDidMount())
      .catch(err => console.log(err));
  };

  render() {
    return (

      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
            <h1 style={{color:"darkblue"}}>
                                {this.state.patient.map(patients => (
                                    <p key={patients}>{patients.First_Name} {patients.Last_Name}</p>
                                ))}
                            </h1>
                            <h4 style={{color:"darkblue",fontFamily:"TimesNewRoman"}}>Room Number: {this.state.patient.map(patients => (
                                    <p key={patients}>{patients.roomID}</p>
                                ))}</h4>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1 style={{color:"darkblue"}}>Patient Notes: </h1>

              <br></br>
              {this.state.notes.map((notes, id) => (
                <p key={id}>{notes.Note}

                  <DeleteBtn onClick={() => { if (window.confirm('Are you sure you wish to delete this note?')) this.deleteNote(notes.id) }} />
                </p>
              ))}

            </article>

          </Col>
        </Row>
        <Card>
                    <Card.Header className="text-center" style={{ fontFamily: "TimesNewRoman", color: "darkblue", fontSize: "20px" }}><strong>Add Note</strong></Card.Header>
                    <Card.Body className="text-left">
 <Form onSubmit={this.handleSubmit} style={{fontFamily:"TimesNewRoman",color:"darkBlue"}}>
          <Form.Group>
            <Form.Label><strong>Note</strong></Form.Label>
            <Form.Control type="input" name="Note" onChange={this.handleInputChange}/>
            <Form.Label><strong>Date Entered</strong></Form.Label>
            <Form.Control type="input" name="Date" onChange={this.handleInputChange}/>
            <Form.Label><strong>Your ID</strong></Form.Label>
            <Form.Control type="input" name="userID" onChange={this.handleInputChange}/>
          </Form.Group>
          <Button style={{fontFamily:"TimesNewRoman",backgroundColor:"darkblue"}} type="submit"><strong>
            Add Note</strong>
    </Button>
        </Form>
        </Card.Body>
        </Card>
        <Row>
          <Col size="md-2">
            <Link to="/PatientList" style={{color:"darkblue",textDecoration:"none"}}>← Back to Patients</Link>
          </Col>
        </Row>
      </Container>

    );
  }
}

export default Notes;