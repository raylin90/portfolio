import React from 'react';
import styled from 'styled-components';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Experience = props => {

    const Wrapper = styled.div`
    min-height: 94vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `

    return(
        <Wrapper>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={2}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Coding Bootcamp</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">OEC Group</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={10}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                        <ul>
                            <li>Immersive Full-Stack Training Program in Python, Java and MERN</li>
                        </ul>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <ul>
                            <li>Managed a team of 12 in-house customer service, traffic, import and export, ocean and air operations and 4 overseas staff simultaneously</li>
                            <li>Maintained deadlines and budgets consistently by anticipating scope changes, resource shortages, and communication barriers</li>
                            <li>Spearheaded weekly status meetings to review priopries, communicate resource allocation, form action plan, and feedback for improvement</li>
                            <li>programmed with Crystal Report to generate automated reports for process efficiency and reduced operational cost by 2 headcount</li>
                            <li>Achieved steady yearly increase of shipping volume by 25%, and sales by 42%</li>
                        </ul>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>

        </Wrapper>
    );
}

export default Experience;