import React from 'react';
// import { Menubar, Container, NavDropdown} from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar';
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Menu = props => {
    return(
        <Navbar bg="primary" expand="sm">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#">HOME</Nav.Link>
                <Nav.Link href="#">ABOUT</Nav.Link>
                <Nav.Link href="#">SKILLS</Nav.Link>
                <Nav.Link href="#">PROJECTS</Nav.Link>
                <Nav.Link href="#">EXPERIENCE</Nav.Link>
                <Nav.Link href="#">EDUCATION</Nav.Link>
                <Nav.Link href="#">CONTACT</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
}

export default Menu;