import React, { useState, useEffect } from 'react'
import Layout from '../../components/layout'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const NameContext = React.createContext({ 
    name: '',
    handleChange: () => {}
});

const HelloWorld = () => {
    return (
        <NameContext.Consumer>
            {({name}) => <React.Fragment>Hello, {name}. </React.Fragment>}
        </NameContext.Consumer>);
}
const InputName = () => {
    return (
        <NameContext.Consumer>
            {({name, handleChange}) => <Form.Control type="text" placeholder="World" value={name} onChange={handleChange} />}
        </NameContext.Consumer>);
}

// markup 
const IndexPage = () => {
    const [ name, setName ] = useState("World");

    const handleChange = (event) => {
        setName(event.target.value);
    }

    return (
        <Layout>
            <NameContext.Provider value={{name, handleChange }}>
                <Container>
                    <Row>
                        <Col md={{ offset: 3, span: 6 }}>
                            <Form autocomplete="off">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>What is your name?</Form.Label>
                                    <InputName />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ offset: 3, span: 6 }}>
                            <HelloWorld />
                        </Col>
                    </Row>
                </Container>
            </NameContext.Provider>
        </Layout>
    )
}

export default IndexPage;
