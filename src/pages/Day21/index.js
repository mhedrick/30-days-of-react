import React, { Fragment, useState, useEffect } from "react"
import Layout from '../../components/layout'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import axios from 'axios'


const CatFacts = () => {

    const [cats, setCats] = useState([]);
    const [count, setCount] = useState(0);
    const [avgWeight, setAvgWeight] = useState(0);
    const [avgLife, setAvgLife] = useState(0);


    function averageCategory(cat) {
        return cat.split(' - ').reduce((a, b) => parseInt(a) + parseInt(b)) / 2;
    }

    useEffect(() => {
        async function fetchData() {
            const url = 'https://api.thecatapi.com/v1/breeds';
            try {
                const response = await axios.get(url);
                const data = await response.data;
                setCats(data);
                setCount(data.length);
                setAvgWeight(data
                    .map(cat => averageCategory(cat.weight.imperial))
                    .reduce((a, b) => a + b) / data.length);
                setAvgLife(data
                    .map(cat => averageCategory(cat.life_span))
                    .reduce((a, b) => a + b) / data.length);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <Fragment>
            <h1>Cat Facts</h1>
            <p>There are {count} cat breeds</p>
            <p>On average, they weigh {avgWeight.toPrecision(4)} lbs and live {avgLife.toPrecision(4)} years </p>
            <Container className="d-flex flex-column align-items-center align-content-center justify-content-center">
                {cats.map(({ name, life_span, weight, origin, image }) => (
                    <Card className="mb-2" style={{ width: '18rem' }}>
                        {image && <Card.Img variant="top" src={image.url} />}
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{origin}</Card.Subtitle>
                            <Card.Text>Life span: {life_span} years</Card.Text>
                            <Card.Text>Weight: {weight.imperial} lbs</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        </Fragment>
    )
}

// markup 
const IndexPage = () => {
    return (
        <Layout>
            <Container className="text-center">
                <CatFacts />
            </Container>
        </Layout>
    )
}

export default IndexPage;
