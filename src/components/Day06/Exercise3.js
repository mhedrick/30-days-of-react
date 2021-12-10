import * as React from "react"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';

import { tenHighestPopulation } from '../../data/ten_most_highest_populations';

const total = tenHighestPopulation[0].population;

const Exercise3 = () => {
    return (
        <div className="mt-2">
            {tenHighestPopulation.map(({country, population}) => (
                <Row className="align-items-center">
                    <Col md={2} className="text-end">
                        {country}
                    </Col>
                    <Col>
                        <ProgressBar now={(population/total) * 100} />
                    </Col>
                    <Col md={2}>
                        {population.toLocaleString()}
                    </Col>
                </Row>
            ))}

        </div>)
}

export default Exercise3;