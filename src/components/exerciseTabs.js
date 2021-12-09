import * as React from "react";
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

// markup 
const ExerciseTabs = ({ exercises }) => {
    return (
        <Tab.Container defaultActiveKey="exercise-0">
            <Nav activeKey="exercise-0" variant="pills">
                {exercises.map((e, i) =>
                    <Nav.Item key={i}>
                        <Nav.Link eventKey={`exercise-${i}`}>Exercise {i + 1}</Nav.Link>
                    </Nav.Item>
                )}
            </Nav>
            <Tab.Content>
                {exercises.map((e, i) =>
                    <Tab.Pane eventKey={`exercise-${i}`} key={i}>
                        {exercises[i]}
                    </Tab.Pane>
                )}
            </Tab.Content>
        </Tab.Container>
    );
}

export default ExerciseTabs;
