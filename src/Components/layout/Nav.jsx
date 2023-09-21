import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import LoginModal from '../Page/Session/login';
import RegisterModal from '../Page/Session/register';
import logo from "../../assets/logo.png";
import { Link , NavLink } from "react-router-dom";
import './Nav.css';
import SearchBar from '../Page/Busqueda/busqueda';



function MyNavbar() {

  return (
    <Navbar expand="lg" variant="dark" fixed="top">
    <Container>
      <Navbar.Brand to="/">
      <Link to="/">
          <img src={logo} alt="logo" width="100" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink className='textlink nav-link active' to="/">Inicio</NavLink>
          <NavLink className='textlink nav-link active' to="/product/card">Productos</NavLink>
        </Nav>
        <Nav className="ml-auto ">
          {/* <NavLink to="#"><i className="fas fa-search"></i></NavLink> */}
          <SearchBar/>
          <NavLink className='nav-link active' to="/favorite"><i className="fas fa-star"></i></NavLink>
          <NavLink className='nav-link active' to="/cart"><i className="fas fa-shopping-cart"></i></NavLink>
          <LoginModal/>
          <RegisterModal/>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
);
}

export default MyNavbar;
