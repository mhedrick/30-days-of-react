import * as React from "react"
import Layout from '../../components/layout'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// Hexadecimal color generator
const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
  }

  const colors = [
      hexaColor(),
      hexaColor(),
      hexaColor(),
      hexaColor(),
      hexaColor(),
  ]

// markup 
const IndexPage = () => {
    return (
        <Layout>
            {colors.map((e)=> (
            <Row key={e} className="mb-2">
                <Col md={{span: 4, offset: 4}} style={{backgroundColor: e}} className="text-center rounded">{e}</Col>
            </Row>))}
        </Layout>
    )
}

export default IndexPage
