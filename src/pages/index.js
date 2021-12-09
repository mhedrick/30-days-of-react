import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from "gatsby"

import day03_thumbnail from '../assets/day03_thumbnail.png';

const days = [
  {
    number: "03",
    title: "Setting Up",
    image: day03_thumbnail,
    description: "Putting together the React/Gatsby environment and getting back into the swing of things."
  }
];

// markup 
const IndexPage = () => {
  return (
    <Layout>
      {days.map(({ number, title, image, description }) => (
        <Row key={number}>
          <Col md="2">
            <Link to={`Day${number}`}><Image src={image} fluid thumbnail /></Link>
          </Col>
          <Col>
            <h2>
              <Link to={`Day${number}`}>Day {number} <small className="text-muted">{title}</small></Link>
            </h2>
            {description}
          </Col>
        </Row>
      ))}

    </Layout>
  )
}

export default IndexPage
