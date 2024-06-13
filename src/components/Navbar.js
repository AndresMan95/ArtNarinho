import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Banner from './Banner';

const NavigationBar = () => {
  return (
    <div>
      <Banner/>
      <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
      <Navbar.Brand href="/">
          <img
            src={`${process.env.PUBLIC_URL}/logoArtNarinho.png`}
            width="80"
            height="80"
            className="d-inline-block align-top"
            alt="Logo de tu sitio"
          />
         {/*  ArtNariño */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" exact='true'>Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/about">Acerca de</Nav.Link>
            <Nav.Link as={NavLink} to="/products">Productos</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
    

  );
};

export default NavigationBar;

