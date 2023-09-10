import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '@fortawesome/fontawesome-free/css/all.css';
import LoginModal from '../Page/Session/login';
import RegisterModal from '../Page/Session/register';




function BasicExample() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
    <Container>
      <Navbar.Brand href="#">
        <img
          alt=""
          src="/Img/Cards/navbar.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="contacto.html">Contacto</Nav.Link>
          <Nav.Link href="#"><i className="fas fa-search"></i></Nav.Link>
          <Nav.Link href="#"><i className="fas fa-star"></i></Nav.Link>
          <Nav.Link href="#"><i className="fas fa-shopping-cart"></i></Nav.Link>
          <LoginModal/>
          <RegisterModal/>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
);
}

export default BasicExample;
