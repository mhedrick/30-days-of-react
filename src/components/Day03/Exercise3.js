import * as React from "react";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';

import ada from '../../assets/ada.jpeg'

const Exercise3 = () => {
    return (
        <Card className="my-2">
            <Card.Body>
                <Image src={ada} alt="Portrait of Ada Lovelace" width="100" roundedCircle thumbnail />
                <Card.Title>Ada Lovelace</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Mother of Algorithms</Card.Subtitle>
                <Card.Title>Skills</Card.Title>
                <Badge bg="info" className="me-2">Analytics</Badge>
                <Badge bg="info" className="me-2">Math</Badge>
                <Badge bg="info" className="me-2">Italian</Badge>
                <Badge bg="info" className="me-2">Translation</Badge>
                <Card.Subtitle className="etext-muted mt-2">Joined December 10, 1815</Card.Subtitle>
            </Card.Body>
        </Card>);
}

export default Exercise3