import React from 'react';
import { Navbar, Nav, Container,FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Banner from './Banner';

const NavigationBar = () => {
  return (
    <div>
      <Banner/>
      <Navbar bg="primary" variant="dark" expand="lg" style={{background: "#e3f2fd"}}>
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
            {/* Barra de búsqueda */}
            <FormControl type="text" placeholder="Buscar" className="me-2" />
           
            {/* Otros elementos del menú de navegación */}
            <Nav.Link as={NavLink} to="/" exact='true'>Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/about">Acerca de</Nav.Link>
            <Nav.Link as={NavLink} to="/products">Productos</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contacto</Nav.Link>
             {/* Botón de inicio de sesión */}
             <Button variant="outline-light" className="ms-2"  style={{ marginLeft: 'auto' }}>Iniciar sesión</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
    

  );
};

export default NavigationBar;

