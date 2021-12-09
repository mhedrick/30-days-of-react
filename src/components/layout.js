import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Link } from "gatsby"

// markup 
const Layout = ({children}) => {
  return (
    <main>
      <Container style={{fontFamily: "readex pro"}}>
        <title>30 Days of React</title>
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <span className="fs-4" style={{fontFamily: "pacifico"}}>maggie k hedrick</span>
          </Link>
          <span className="fs-4">30 Days of React</span>
        </header>
        {children}
      </Container>
    </main>
  )
}

export default Layout
