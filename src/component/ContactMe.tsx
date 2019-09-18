import React from "react";
import { Form, Col } from "react-bootstrap";

export default function ContactMe() {
  return (
    <React.Fragment>
      <h3>Contact me</h3>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="firstname"
              placeholder="Enter your first name"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="lastname" placeholder="Enter your last name" />
          </Form.Group>
        </Form.Row>
      </Form>
    </React.Fragment>
  );
}
