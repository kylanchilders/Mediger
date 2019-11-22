import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./style.css";
const SignInDiv = () => {
    return (
        <div className="mainDiv">
             <div className="float-left imgDiv">
                <img src = {require('../../images/carouselImage6.jpeg')}/>
            </div>
            <div className="float-left formDiv">
                <Form>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>UserID</Form.Label>
                        <Form.Control type="text" placeholder="Enter UserID" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        SignIn
                    </Button>
                </Form>
            </div>
           
        </div>
    )
}
export default SignInDiv;