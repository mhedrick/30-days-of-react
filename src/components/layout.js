import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

// markup 
const Layout = ({children}) => {
  return (
    <main>
      <Container>
        <title>30 Days of React</title>
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <span className="fs-4">maggie k hedrick</span>
          </a>
          <span className="fs-4">30 Days of React</span>
        </header>
        {children}
      </Container>
    </main>
  )
}

export default Layout
