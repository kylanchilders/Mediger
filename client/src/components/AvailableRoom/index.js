import React, { Component } from "react";
import { Form, Button, FormGroup } from 'react-bootstrap';
import "./style.css";


class AvailableRoom extends Component {
    constructor() {
        super();
        this.state = {
            rooms: [],
            id: '',
            Name: '',
            Available: '',
            patientID: ''
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


        fetch("http://localhost:3010/api/room/:id", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                First_Name: this.state.First_Name,
                Last_Name: this.state.Last_Name,
                id: this.state.id,
                Available: 0
            })

        })
            .then(res => this.componentDidMount())
            .catch(err => console.log(err));
    }
    componentDidMount() {
        fetch("http://localhost:3010/api/room/", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },


        }).then((res) => {
            res.json().then((data) => {
                this.setState({ rooms: data })
                console.log(this.state);
            });
        });
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Room Number</Form.Label>
                    <Form.Control type="input" name="Name" onChange={this.handleInputChange} />
                    <Form.Label>Patient ID</Form.Label>
                    <Form.Control type="input" name="patientID" onChange={this.handleInputChange} />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check-in" name="Available"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Check Patient In
    </Button>
            </Form>
        )
    }
}
export default AvailableRoom