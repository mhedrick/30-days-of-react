import React, { useRef, useState, useEffect } from 'react'
import Layout from '../../components/layout'

import { tile } from '../../components/Day06/styles.module.css';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length)
        color += str[index]
    }
    return '#' + color
}

const Color = ({color}) => {
    const [copied, setCopied] = useState(false);
    const ref = useRef(null)
    const handleClick = () => {
        const content = ref.current.textContent
        navigator.clipboard.writeText(content)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 3000)
    }

    return (
        <div className={`${tile} flex-column`} style={{ backgroundColor: color }}>
            <div ref={ref}>{color}</div>
            <Button variant="secondary" size="sm" onClick={handleClick}>
                {copied ? "copied" : "copy"}
            </Button>
        </div>);
}

// markup 
const IndexPage = () => {
    const [count, setCount] = useState(27);
    const [colors, setColors] = useState([]);
    const ref = useRef(null);

    // default for colors
    for (let n = 0; n < count; n++) {
        colors[n] = hexaColor();
    }

    useEffect(() => {
        let temp = [];
        for (let n = 0; n < count; n++) {
            temp[n] = hexaColor();
        }
        setColors(temp);
    }, [count]);

    // this is just for the exercise
    const handleChange = () => {
        let content = ref.current.value;
        console.log(content);
        setCount(content);
    }


    return (
        <Layout>
            <Form>
                <Row>
                    <Col md="3">
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Generate</InputGroup.Text>
                            <Form.Control
                                ref={ref}
                                placeholder="27"
                                onChange={handleChange}
                                type="number"
                                max="100"
                            />
                            <InputGroup.Text>{count == 1 ? "color" : "colors"}</InputGroup.Text>
                        </InputGroup>
                    </Col>
                </Row>
            </Form>
            <div className="d-flex flex-wrap mt-2">
                {colors.map((n, i) => (
                    <Color key={i} color={n} />
                ))
                }
            </div>
        </Layout>
    )
}

export default IndexPage;
