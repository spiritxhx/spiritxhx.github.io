import React from "react";
import { Form, Col, Button } from "react-bootstrap";

export default function ContactMe() {
  return (
    <React.Fragment>
      <h2 className="my-5">Get In Touch</h2>
      <Form>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="formFirstName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="4" />
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </React.Fragment>
  );
}
