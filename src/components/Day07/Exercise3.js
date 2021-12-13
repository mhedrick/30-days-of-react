import * as React from "react"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';

import { tenHighestPopulation } from '../../data/ten_most_highest_populations';

class Exercise3 extends React.Component {
    constructor(props) {
        super(props);
        this.total = tenHighestPopulation[0].population;
    }

    getPercentage = (population) => {
        return (population/this.total) * 100;
    }

    render() {
        return (
            <div className="mt-2">
                {tenHighestPopulation.map(({country, population}) => (
                    <Row className="align-items-center">
                        <Col md={2} className="text-end">
                            {country}
                        </Col>
                        <Col>
                            <ProgressBar now={this.getPercentage(population)} />
                        </Col>
                        <Col md={2}>
                            {population.toLocaleString()}
                        </Col>
                    </Row>
                ))}
    
            </div>)
    }
}

export default Exercise3;