import React, { Component, Fragment } from "react"
import Layout from '../../components/layout'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import axios from 'axios'


class CatFacts extends Component {
    state = {
        cats: [],
        count: 0,
        avgWeight: 0,
        avgLife: 0
    }
    componentDidMount() {
        this.fetchCatFacts();
    }

    averageCategory(cat) {
        return cat.split(' - ').reduce((a, b) => parseInt(a) + parseInt(b)) / 2;
    }

    fetchCatFacts = async () => {
        const url = 'https://api.thecatapi.com/v1/breeds';
        try {
            const response = await axios.get(url);
            const data = await response.data;
            this.setState({
                cats: data,
                count: data.length,
                avgWeight: data
                    .map(cat => this.averageCategory(cat.weight.imperial))
                    .reduce((a, b) => a + b) / data.length,
                avgLife: data
                    .map(cat => this.averageCategory(cat.life_span))
                    .reduce((a, b) => a + b) / data.length,
            });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <Fragment>
                <h1>Cat Facts</h1>
                <p>There are {this.state.count} cat breeds</p>
                <p>On average, they weigh {this.state.avgWeight.toPrecision(4)} lbs and live {this.state.avgLife.toPrecision(4)} years </p>
                <Container className="d-flex flex-column align-items-center align-content-center justify-content-center">
                    {this.state.cats.map(({name, life_span, weight, origin, image}) => (
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
