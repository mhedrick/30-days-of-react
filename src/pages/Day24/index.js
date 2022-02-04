import React, { useState, useEffect } from 'react'
import Layout from '../../components/layout'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// markup 
const IndexPage = () => {
    // setting initial state and method to update state
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const all_url = 'https://restcountries.com/v3.1/all';
            const name_url = 'https://restcountries.com/v3.1/name';
            try {
                const response = await fetch(value ? `${name_url}/${value}` : all_url);
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.log(error);
            }
        };

        const delayAPICall = setTimeout(() => fetchData(), 500);
        return () => clearTimeout(delayAPICall);
    }, [value])

    const onChange = (e) => setValue(e.target.value);

    return (
        <Layout>
            <div className="p-5 mb-4 bg-secondary bg-opacity-25 rounded-3">
                <Container fluid className="py-2 text-center">
                    <h1 className="display-5 text-primary">World Countries Data</h1>
                    <h3 className="text-muted">Currently, we have {data.length} Countries</h3>
                </Container>
            </div>
            <Container className="px-5">
                <div class="mb-3 px-5">
                    <input type="text" className="form-control" id="searchTerm" placeholder="Search by name" onChange={onChange} />
                    <small className="ms-2">(this search is using more than the English name, so results can be confusing.)</small>
                </div>
            </Container>
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
