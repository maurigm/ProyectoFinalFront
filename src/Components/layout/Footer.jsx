import React from 'react'
import './Footer.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import logo from "../../assets/logo.png";



function Footer() {
  return (
    <footer className="footer bg-dark">
      <Container>
        <Row>
          <Col lg={3} md={3} sm={6}>
            <Image src={logo} alt="logo" width="150" />
          </Col>
          <Col lg={3} md={3} sm={6}>
            <h5>Enlaces</h5>
            <ul className="footer-links">
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Otro Enlace</a></li>
            </ul>
          </Col>
          <Col lg={3} md={3} sm={6}>
            <h5>Más Enlaces</h5>
            <ul className="footer-links">
              <li><a href="#">Enlace 1</a></li>
              <li><a href="#">Enlace 2</a></li>
              <li><a href="#">Enlace 3</a></li>
            </ul>
          </Col>
          <Col lg={3} md={3} sm={6}>
            <h5>Código QR</h5>
           
            <ul className="social-icons text-center" id="icon">
              <li><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-github"></i></a></li> 
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>Rolling Code © Proyecto Final</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer