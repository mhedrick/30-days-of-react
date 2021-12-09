import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/pacifico"
import "@fontsource/readex-pro"
import Layout from "../components/layout"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from "gatsby"

import day03_thumbnail from '../assets/day03_thumbnail.png';
import day04_thumbnail from '../assets/day04_thumbnail.png';

const days = [
  {
    number: "03",
    title: "Setting Up",
    image: day03_thumbnail,
    description: "Putting together the React/Gatsby environment and getting back into the swing of things."
  }, 
  {
    number: "04",
    title: "Components",
    image: day04_thumbnail,
    description: '"Learning" how functional components work, and turning yesterday\'s components into functions...'
  }
];

// markup 
const IndexPage = () => {
  return (
    <Layout>
      {days.map(({ number, title, image, description }) => (
        <Row key={number} className="mb-2">
          <Col md="1">
            <Link to={`Day${number}`}><Image src={image} fluid thumbnail /></Link>
          </Col>
          <Col>
            <h2>
              <Link to={`Day${number}`}>Day {number}</Link> <small className="text-muted">{title}</small>
            </h2>
            {description}
          </Col>
        </Row>
      ))}

    </Layout>
  )
}

export default IndexPage
