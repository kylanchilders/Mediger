import React from "react";
import { Form, Button } from 'react-bootstrap';
import "./CompanyInfoForm.css";

const CompanyInfoForm = () => {
return (
<Form>
  <Form.Group>
    <Form.Label>Organization Name</Form.Label>
    <Form.Control type="input" />
  </Form.Group>
  <Form.Group>
    <Form.Label>Organization Address</Form.Label>
    <Form.Control type="input" />
  </Form.Group>
  <Form.Group>
    <Form.Label>Organization Contact Email</Form.Label>
    <Form.Control type="email" />
  </Form.Group>
  <Form.Group>
    <Form.Label>Organization Contact Phone Number</Form.Label>
    <Form.Control type="input" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Update Info
  </Button>
</Form>
)
}

export default CompanyInfoForm;