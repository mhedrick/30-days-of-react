import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from "gatsby"

// markup 
const IndexPage = () => {
  return (
      <Layout>
        <Row>
          <Col md="auto">
          <Link to="Day03"><Image src="https://via.placeholder.com/75" thumbnail /></Link>
          </Col>
          <Col>
          <h2><Link href="Day03">Day 03 <small className="text-muted">Setting Up</small></Link></h2>
            Lorem ipsum dolor sit amet
          </Col>
        </Row>
      </Layout>
  )
}

export default IndexPage
