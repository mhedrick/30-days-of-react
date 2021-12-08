import * as React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Exercise2 = () => {
    return (
        <Container style={{ 
            backgroundColor: "#c2e6f4", 
            marginTop: "10px", 
            borderRadius: "10px",
            padding: "20px 0px"}}>
            <Row className="justify-content-center">
                <Col className="text-center">
                    <h1 className="text-uppercase">subscribe</h1>
                    <p>Sign up with your email address to receive news and updates.</p>
                </Col>
            </Row>
            <Form className="justify-content-center">
                <Form.Group as={Row} className="mb-3 justify-content-center">
                    <Col sm={3}>
                        <Form.Control type="firstName" placeholder="FirstName" />
                    </Col>
                    <Col sm={3}>
                        <Form.Control type="LastName" placeholder="Last Name" />
                    </Col>
                    <Col sm={3}>
                        <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>
            </Form>
            <Row className="justify-content-center">
                <Col md={5} className="d-grid gap-2">
                    <Button style={{backgroundColor: "#f37475", border: 0 }}>Subscribe</Button>
                </Col>
            </Row>
        </Container>)
}

export default Exercise2