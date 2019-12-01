import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";


class Notes extends Component {
  state = {
    notes: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    fetch("http://localhost:3010/api/notes/" + this.props.match.params.id, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },


    }).then((res) => {
        res.json().then((data) => {
            this.setState({ patients: data, First_Name: "", Last_Name: "", Date_Of_Birth: "", Address: "", City: "", State: "", Zip_Code: "", Email: "", orgID: "", RoomID: "" })
        });
    });

}

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.notes.title} by {this.state.notes.author}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>
                {this.state.notes.synopsis}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Notes;