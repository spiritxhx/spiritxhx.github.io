import React from "react";
import { Form, Col } from "react-bootstrap";

export default function ContactMe() {
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="firstname" placeholder="Enter your first name" />
        </Form.Group>
      </Form.Row>
    </Form>
  );
}
