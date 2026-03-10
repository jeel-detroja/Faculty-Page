import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import image from '../image/0.jpg'; 
import image2 from '../image/12345678.jpg';
import image3 from '../image/123456.jpg';

const About = () => {
    return (
        <Container className="mt-5">
            <Row className="text-center mb-4">
                <Col>
                    <h1>About Oxford University</h1>
                    <p className="lead">
                        Discover the legacy of excellence, research, and innovation that defines Oxford University.
                    </p>
                </Col>
            </Row>

            <Row className="mb-4">
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Our Mission</Card.Title>
                            <Card.Text>
                                Oxford University aims to foster a vibrant community of scholars, promoting knowledge and discovery for the betterment of society.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Our Vision</Card.Title>
                            <Card.Text>
                                To inspire and prepare future leaders through rigorous academic training and a commitment to innovation and research.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-4">
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>Professor Emma Smith</Card.Title>
                            <Card.Text>
                                Emma is the Vice-Chancellor, leading the university's commitment to academic excellence and global engagement.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={image2} />
                        <Card.Body>
                            <Card.Title>Dr. John Doe</Card.Title>
                            <Card.Text>
                                John is a leading researcher in Artificial Intelligence, dedicated to pioneering advancements in technology.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={image3} />
                        <Card.Body>
                            <Card.Title>Ms. Alice Brown</Card.Title>
                            <Card.Text>
                                Alice is the Director of Outreach, working to connect the university with communities and promote educational opportunities.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="text-center">
                <Col>
                    <p>
                        Have any questions? <a href="/contact">Contact us</a> for more information.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
