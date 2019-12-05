import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import Jumbotron from "../Jumbotron";
import DeleteBtn from "../DeleteBtn";
import EditBtn from "../EditBtn";

class NoteDiv extends Component {
    constructor(props) {
        super(props);

        console.log(this)
    }
    state = {
        notes: [],
        patient: [], 
    }

    // When this component mounts, grab the book with the _id of this.props.match.params.id
    // e.g. localhost:3000/books/599dcb67f0f16317844583fc


    componentWillMount() {
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

    deleteNotes = id => {

        fetch("http://localhost:3010/api/notes/" + id, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },

        })
            .then(res => this.componentWillMount())
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
            .then(res => this.componentWillMount())
            .catch(err => console.log(err));
    };

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
                            <h4>Room Number: {this.state.patient.map(patients => (
                                    <p key={patients}>{patients.roomID}</p>
                                ))}</h4>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-10 md-offset-1">
                        <article>
                            <h1 style={{color:"darkblue"}}>Patient Notes</h1>

                            <br></br>
                            {this.state.notes.map((notes, id) => (
                                <p key={id}>{notes.Note}

                                    <DeleteBtn onClick={() => { if (window.confirm('Are you sure you wish to delete this patient?')) this.deleteNotes(notes.id) }} />
                                </p>
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

export default NoteDiv;