import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';

const Contact = () => {
  const [data, setData] = useState({});
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const res = await fetch("http://localhost:4000/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Error contacting us.");
      }

      setMessage('Thank you! Your message has been submitted.');
      setData({});
    } catch (error) {
      console.error("Error:", error);
      setError('There was an issue submitting the form. Please try again.');
    }
  };

  return (
    <>
      <Container className="mt-5">
        <Row className="text-center mb-4">
          <Col>
            <h1>Contact Us</h1>
            <p className="lead">We'd love to hear from you!</p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h2>Get in Touch</h2>
            {message && <Alert variant="success">{message}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={data.name || ''}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={data.email || ''}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </Form.Group>

              <Form.Group controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Your message"
                  value={data.message || ''}
                  onChange={(e) => setData({ ...data, message: e.target.value })}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <h2>Our Location</h2>
            <div style={{ width: '100%', height: '300px' }}>
              <iframe
                title="Google Maps"
                width="100%"
                height="100%"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.6872164482347!2d-1.2570928233649628!3d51.75704287187111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a9ef8c485b%3A0xd2ff1883a001afed!2sUniversity%20of%20Oxford!5e0!3m2!1sen!2sin!4v1727963637235!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
