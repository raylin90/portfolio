import React from 'react';
import '../scss/variables.scss';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const Menu = props => {
    
    return(
        <Navbar bg="primary" expand="sm"  sticky="top">
            <Container fluid>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <Nav.Link href="#"><small>About</small></Nav.Link>
                    <Nav.Link href="#"><small>Skill</small></Nav.Link>
                    <Nav.Link href="#"><small>Project</small></Nav.Link>
                    <Nav.Link href="#"><small>Experience</small></Nav.Link>
                    <Nav.Link href="#"><small>Contact</small></Nav.Link>
                    <Button variant="outline-success" size="sm" >Resume</Button>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;