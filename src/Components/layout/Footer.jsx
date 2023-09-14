import React from 'react'
import './Footer.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import logo from "../../assets/logo.png";
import qr from '../../assets/datafiscal.png';



function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={3} md={3} sm={6} className="logo-container">
            <Image src={logo} alt="logo" width="150" />
          </Col>
          <Col className='enlance1' lg={3} md={3} sm={6}>
           <h5>CONTACTANOS</h5>
           <ul className="footer-links">
          <li>
           <FontAwesomeIcon icon={faHome} />
          <a> Gral. Paz 576, San Miguel de Tucumán, Tucumán</a>
          </li>
          <li>
          <FontAwesomeIcon icon={faPhone} />
          <a> 381 - 451 - 0779</a>
             </li>
             <li className='txt'>
                <FontAwesomeIcon className='mail' icon={faEnvelope} />
                <a href="mailto:forgestep@calzadoindustrial.com"> forgestep@calzadoindustrial.com</a>
             </li>
           </ul>
          </Col>
          <Col lg={3} md={3} sm={6}>
            <h5>ENLANCES</h5>
            <ul className="footer-linkss">
              <li><a href="/contacto">Contacto</a></li>
              <li><a href="/nosotros">Nosotros</a></li>
              <li><a href="#">Otro Enlace</a></li>
            </ul>
          </Col>
          <Col lg={3} md={3} sm={6}>
            <Image className='qr' src={qr} alt="qr" width="150" />
            <h5>CÓDIGO QR</h5>

            <ul className="social-icons text-center" id="icon">
             <li><a href="#"><i className="fab fa-facebook facebook"></i></a></li>
             <li><a href="#"><i className="fab fa-twitter twitter"></i></a></li>
             <li><a href="#"><i className="fab fa-instagram instagram"></i></a></li>
             <li><a href="#"><i className="fab fa-github github"></i></a></li> 
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