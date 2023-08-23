import React from 'react';
import './Contact.css'; 
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <Container>
        <br /><br />
        <h1>Contact Us</h1>
        <br /><br />
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Please Enter your Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
<br /><br />
          <Form.Group controlId="formBasicMessage">
            <Form.Label>Send us a Message we will surley reply</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Enter your message here" />
          </Form.Group>
<br /><br />
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
