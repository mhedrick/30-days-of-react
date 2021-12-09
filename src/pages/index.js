import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from "gatsby"


import day03_thumbnail from '../assets/day03_thumbnail.png';

// markup 
const IndexPage = () => {
  return (
      <Layout>
        <Row>
          <Col md="2">
          <Link to="Day03"><Image src={day03_thumbnail} fluid thumbnail /></Link>
          </Col>
          <Col>
          <h2><Link href="Day03">Day 03 <small className="text-muted">Setting Up</small></Link></h2>
            Putting together the React/Gatsby environment and getting back into the swing of things.
          </Col>
        </Row>
      </Layout>
  )
}

export default IndexPage
