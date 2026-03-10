import { Container, Row, Col, Accordion } from 'react-bootstrap';

const faq=()=>{
    return (
        <>
         <Container className="mt-5">
      <Row className="text-center mb-4">
        <Col>
          <h1>Frequently Asked Questions</h1>
          <p className="lead">Find answers to common questions related to students below.</p>
        </Col>
      </Row>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What are the admission requirements?</Accordion.Header>
          <Accordion.Body>
            The admission requirements vary by program. Generally, you will need to submit your academic transcripts, 
            a personal statement, and letters of recommendation. Please check the specific program details on our website.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How can I apply for scholarships?</Accordion.Header>
          <Accordion.Body>
            You can apply for scholarships through our online application portal. Make sure to check the eligibility criteria 
            and deadlines for each scholarship opportunity.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>What resources are available for academic support?</Accordion.Header>
          <Accordion.Body>
            We offer a range of academic support services, including tutoring, writing centers, and study groups. You can 
            find more information on our website or contact the academic support office for assistance.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>How do I register for classes?</Accordion.Header>
          <Accordion.Body>
            You can register for classes through your student portal during the designated registration periods. 
            Make sure to consult your academic advisor for course selection.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>What should I do if I am struggling with my courses?</Accordion.Header>
          <Accordion.Body>
            If you're having difficulty, we encourage you to reach out to your instructor or academic advisor for support. 
            Additionally, you can access tutoring services and workshops to help you succeed.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>How can I get involved in extracurricular activities?</Accordion.Header>
          <Accordion.Body>
            You can explore various student organizations and clubs on campus by visiting the student activities office. 
            Participation in extracurricular activities can enhance your college experience and help you build a network.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>What are the options for on-campus housing?</Accordion.Header>
          <Accordion.Body>
            We offer several options for on-campus housing, including dormitories and apartments. You can find more information 
            and apply for housing through the housing office on our website.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>How do I access mental health services?</Accordion.Header>
          <Accordion.Body>
            Our campus provides mental health services through the counseling center. You can schedule an appointment online 
            or visit the center for immediate support.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>What are the deadlines for tuition payment?</Accordion.Header>
          <Accordion.Body>
            Tuition payment deadlines vary by semester. Please refer to the academic calendar on our website for specific dates 
            and payment options.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>How can I get my student ID card?</Accordion.Header>
          <Accordion.Body>
            You can obtain your student ID card from the student services office. Make sure to bring your enrollment 
            confirmation and a form of identification.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
        </>
    )
}
export default faq;