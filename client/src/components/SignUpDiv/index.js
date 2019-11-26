import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./style.css";
const SignUpDiv = () => {
    return (
        <div className="mainDiv">
             <div className="float-left imgDiv">
                <img src = {require('../../images/carouselImage10.jpeg')}/>
            </div>
            <div className="float-left formDiv">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Re-Enter Password</Form.Label>
                        <Form.Control type="password" placeholder="Re-Enter Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        SignUp
                    </Button>
                </Form>
            </div>
           
        </div>
    )
}
export default SignUpDiv;