import * as React from "react"
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import html_image from '../../assets/html_logo.png';
import css_image from '../../assets/css_logo.png';
import react_logo from '../../assets/react_logo.png';

const Exercise1 = () => {
    return (
        <React.Fragment>
            <Row>
                <Col className="text-center">
                    <h6>Front End technologies</h6>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md="2"><Image src={html_image} alt="html 5 logo" fluid /></Col>
                <Col md="2"><Image src={css_image} alt="css logo" fluid /></Col>
                <Col md="2"><Image src={react_logo} alt="react logo" fluid /></Col>
            </Row>
        </React.Fragment>)
}

export default Exercise1