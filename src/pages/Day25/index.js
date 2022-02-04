import React, { useState, useEffect } from 'react'
import Layout from '../../components/layout'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const useFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [url]);

    return data;
}

// markup 
const IndexPage = () => {
    // setting initial state and method to update state
    const [value, setValue] = useState('');

    const data = useFetch('https://restcountries.com/v3.1/all');

    return (
        <Layout>
            <div className="p-5 mb-4 bg-secondary bg-opacity-25 rounded-3">
                <Container fluid className="py-2 text-center">
                    <h1 className="display-5 text-primary">World Countries Data</h1>
                    <h3 className="text-muted">Currently, the API is returning {data.length} Countries</h3>
                </Container>
            </div>
            <Container className="px-5">
                {
                    data.map(({ name, flags }, i) => {
                        return (<Row key={i}>
                            <Col>
                                <img src={flags.png} alt={`${name.common} flag`} width="30" className="me-2" />
                                {name.common}
                                <small className="ms-2">({name.official})</small>
                            </Col>
                        </Row>);
                    })
                }
            </Container>
        </Layout>
    )
}

export default IndexPage;
