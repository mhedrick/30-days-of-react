import * as React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';

import ada from '../../../static/ada.jpeg'

const Exercise3 = () => {
    return (
        <Card className="my-2">
            <Card.Body>
                <Image src={ada} width="100" roundedCircle thumbnail />
                <Card.Text>
                    <Card.Title>Ada Lovelace</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Mother of Algorithms</Card.Subtitle>
                    <Card.Title>Skills</Card.Title>
                    <Badge bg="info" className="me-2">Analytics</Badge>
                    <Badge bg="info" className="me-2">Math</Badge>
                    <Badge bg="info" className="me-2">Italian</Badge>
                    <Badge bg="info" className="me-2">Translation</Badge>
                </Card.Text>
                <Card.Subtitle className="etext-muted">Joined December 10, 1815</Card.Subtitle>
            </Card.Body>
        </Card>);
}

export default Exercise3