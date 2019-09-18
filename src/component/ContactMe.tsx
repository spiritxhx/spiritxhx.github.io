import React from "react";
import { Form, Col } from "react-bootstrap";

export default function ContactMe() {
  return (
    <React.Fragment>
      <h2>Contact me</h2>
      <Form>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="firstname"
              placeholder="Enter your first name"
            />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="lastname" placeholder="Enter your last name" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="formEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="phonenumber" placeholder="Enter your phone number" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="4" />
          </Form.Group>
        </Form.Row>
      </Form>
    </React.Fragment>
  );
}
