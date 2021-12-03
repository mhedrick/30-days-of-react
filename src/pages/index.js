import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// markup 
const IndexPage = () => {
  return (
      <Layout>
        <Row>
          <Col md="auto">
          <a href="/Day01"><Image src="https://via.placeholder.com/75" thumbnail /></a>
          </Col>
          <Col>
          <h2><a href="/Day01">Day 01 <small class="text-muted">JavaScript Refresher</small></a></h2>
            Lorem ipsum dolor sit amet
          </Col>
        </Row>
      </Layout>
  )
}

export default IndexPage
