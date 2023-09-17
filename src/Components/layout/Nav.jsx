import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import LoginModal from '../Page/Session/login';
import RegisterModal from '../Page/Session/register';
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import './Nav.css';




function MyNavbar() {

  return (
    <Navbar expand="lg" variant="dark" fixed="top">
    <Container>
      <Navbar.Brand href="#">
      <Link to="/">
          <img src={logo} alt="logo" width="100" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className='textlink' href="/">Inicio</Nav.Link>
          <Nav.Link className='textlink' href="/product/card">Productos</Nav.Link>
        </Nav>
        <Nav className="ml-auto ">
          <Nav.Link href="#"><i className="fas fa-search"></i></Nav.Link>

          <Nav.Link href="/favorite"><i className="fas fa-star"></i></Nav.Link>
          <Nav.Link href="/*"><i className="fas fa-shopping-cart"></i></Nav.Link>
          <LoginModal/>
          <RegisterModal/>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
);
}

export default MyNavbar;
