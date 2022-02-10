import React, { useState } from 'react'
import Layout from '../../components/layout'

import { tile } from '../../components/Day06/styles.module.css';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const Color = ({ color, index, setLockParent, saved, lock }) => {
    const [copied, setCopied] = useState(false);
    const [locked, setLocked] = useState(lock);


    const handleCopyClick = () => {
        navigator.clipboard.writeText(color);
        setCopied(true);
        setTimeout(() => {
            setCopied(false)
        }, 3000);
    }
    const handleLockClick = () => {
        setLocked(!locked);
        setLockParent(index);
    }

    return (
        <div className={`${tile} flex-column`} style={{ backgroundColor: color }}>
            <div>{color}</div>
            <Button className="mb-1" variant="secondary" size="sm" onClick={handleCopyClick}>
                {copied ? "copied" : "copy"}
            </Button>
            {!saved && <Button variant="secondary" size="sm" onClick={handleLockClick}>
                {locked ? "locked" : "lock"}
            </Button>}
        </div>);
}

// markup 
const IndexPage = () => {
    const hexaColor = () => {
        let str = '0123456789abcdef'
        let color = ''
        for (let i = 0; i < 6; i++) {
            let index = Math.floor(Math.random() * str.length)
            color += str[index]
        }
        return '#' + color
    }

    const [colors, setColors] = useState([...Array(5)].map(() => hexaColor()));
    const [locked, setLocked] = useState([...Array(5)].map(() => false));
    const [savedColors, setSavedColors] = useState([]);

    const handleGenerateClick = () => {
        setColors([...Array(5)].map((c, i) => locked[i] ? colors[i] : hexaColor()));
        return true;
    }
    const handleSetLock = (location) => {
        let locks = locked;
        locks[location] = !locks[location];
        setLocked(locks);
    }
    const handleSaveClick = () => {
        setSavedColors([...savedColors, colors]);
        setLocked([...Array(5)].map(() => false));
    }
    const handleDeleteClick = (i) => {
        let saved = [...savedColors];
        saved.splice(i, 1);
        console.log(savedColors);
        console.log(saved);
        setSavedColors(saved);
    }

    return (
        <Layout>
            <Container>
                <Row className="d-flex justify-content-center mb-2">
                    {colors.map((c, i) => <Color color={c} key={Math.random()} index={i} setLockParent={handleSetLock} lock={locked[i]} />)}
                </Row>
                <Row className="mb-2">
                    <Col className="d-flex justify-content-center">
                        <Button variant="secondary" size="sm" onClick={handleGenerateClick}>
                            Generate New Colors
                        </Button>
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col className="d-flex justify-content-center">
                        <Button variant="secondary" size="sm" onClick={handleSaveClick}>
                            Save Palette
                        </Button>
                    </Col>
                </Row>
                {savedColors.map((sc, index) => (
                    <React.Fragment key={Math.random()}>
                        <Row className="d-flex justify-content-center mb-2">
                            {sc.map((c, i) => <Color color={c} key={Math.random()} index={i} saved={true} />)}
                        </Row>
                        <Row className="mb-2">
                            <Col className="d-flex justify-content-center">
                                <Button variant="danger" size="sm" onClick={() => handleDeleteClick(index)}>
                                    Delete Palette
                                </Button>
                            </Col>
                        </Row>
                    </React.Fragment>))
                }
            </Container>
        </Layout>
    )
}

export default IndexPage;
