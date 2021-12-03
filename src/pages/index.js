import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// markup 
const IndexPage = () => {
  return (
    <main>
      <Container>
        <title>30 Days of React</title>
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <span class="fs-4">maggie k hedrick</span>
          </a>
          <span class="fs-4">30 Days of React</span>
        </header>
        <Row>
          <Col md="auto">
          <Image src="https://via.placeholder.com/75" thumbnail />
          </Col>
          <Col>
          <h2>Day 01 <small class="text-muted">JavaScript Refresher</small></h2>
            Lorem ipsum dolor sit amet
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default IndexPage
