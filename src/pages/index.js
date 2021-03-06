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
import day06_thumbnail from '../assets/day06_thumbnail.png';
import day07_thumbnail from '../assets/day07_thumbnail.png';
import day08_thumbnail from '../assets/day08_thumbnail.png';
import day09_thumbnail from '../assets/day09_thumbnail.png';
import day11_thumbnail from '../assets/day11_thumbnail.png';
import day12_thumbnail from '../assets/day12_thumbnail.png';
import day16_thumbnail from '../assets/day16_thumbnail.png'; 
import day18_thumbnail from '../assets/day18_thumbnail.png';
import day19_thumbnail from '../assets/day19_thumbnail.png';
import day21_thumbnail from '../assets/day19_thumbnail.png';  // this stays day19
import day24_thumbnail from '../assets/day24_thumbnail.png';
import day25_thumbnail from '../assets/day25_thumbnail.png';  
import day26_thumbnail from '../assets/day26_thumbnail.png';  
import day27_thumbnail from '../assets/day27_thumbnail.png';  
import day28_thumbnail from '../assets/day28_thumbnail.png'; 

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
  },
  {
    number: "06",
    title: "Mapping Arrays",
    image: day06_thumbnail,
    description: 'Using map on arrays to display JSX for lists'
  },
  {
    number: "07",
    title: "Class Based Components",
    image: day07_thumbnail,
    description: 'Turning yesterdays components into classes'??
  },
  {
    number: "08",
    title: "State",
    image: day08_thumbnail,
    description: 'Quick refresher on React state management'??
  },
  {
    number: "09",
    title: "Conditional Rendering",
    image: day09_thumbnail,
    description: 'Use conditional rendering to show different data based on different conditions'??
  },
  {
    number: "11",
    title: "Events",
    image: day11_thumbnail,
    description: 'Handling simple events in React'??
  },
  {
    number: "12",
    title: "Forms",
    image: day12_thumbnail,
    description: 'Handling form input'??
  },
  {
    number: "16",
    title: "Higher Order Components",
    image: day16_thumbnail,
    description: 'Creating a function that wraps a component in common logic'??
  },
  {
    number: "18",
    title: "Data fetching",
    image: day18_thumbnail,
    description: 'Creating a function that wraps a component in common logic'??
  },
  {
    number: "19",
    title: "Project",
    image: day19_thumbnail,
    description: 'Creating a project around cat facts to build upon what has been learned previously'??
  },
  {
    number: "21",
    title: "Introduction to Hooks",
    image: day21_thumbnail,
    description: 'Redoing the previous project, but with the useState hook instead of a class structure'??
  },
  {
    number: "24",
    title: "Fetching Data using Hooks",
    image: day24_thumbnail,
    description: 'Fetching external data with the useEffect Hook.  The given example was broken and not well done (in my opinion), so I opted to simplify the exercise to focus on the aim of the exercise.'??
  },
  {
    number: "25",
    title: "Custom Hooks",
    image: day25_thumbnail,
    description: 'Using a custom Hook to fetch data'??
  },
  {
    number: "26",
    title: "Context",
    image: day26_thumbnail,
    description: 'Context is King.  Today doesn\'t have an exercise so I made one up.  Hello, world.'??
  },
  {
    number: "27",
    title: "UseRef",
    image: day27_thumbnail,
    description: 'Use the UseRef hook to make a random hex generator.'??
  },
  {
    number: "28",
    title: "CRUD Project",
    image: day28_thumbnail,
    description: 'Final entry, and culmination of the project.  I opted to do a color palette generator.  UI is a bit wonky but I didn\'t want to pull down a whole icon library for one day\'s project.'??
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

export default IndexPage;
