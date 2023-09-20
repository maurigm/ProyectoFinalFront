import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import icon from '../../../assets/icon.png';
import './nosotros.css'; 

const teamMembers = [
  {
    name: 'Miembro 1',
    text: 'Descripción del Miembro 1',
    image: 'URL de la imagen 1',
  },
  {
    name: 'Miembro 2',
    text: 'Descripción del Miembro 2',
    image: 'URL de la imagen 2',
  },
  {
    name: 'Miembro 3',
    text: 'Descripción del Miembro 3',
    image: 'URL de la imagen 3',
  },
  {
    name: 'Miembro 4',
    text: 'Descripción del Miembro 4',
    image: 'URL de la imagen 4',
  },
  {
    name: 'Miembro 5',
    text: 'Descripción del Miembro 5',
    image: 'URL de la imagen 5',
  },
];

const Team = () => {
  return (
    <Container className=''>
      <h1 className="team-title">Nuestro Equipo</h1>
      <Row className='team-row'>
        {teamMembers.map((member, index) => (
          <Col key={index} lg={4} md={6} sm={12}>
            <Card className="team-card">
              <Card.Img variant="top" src={icon} alt={member.name} />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>{member.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Team;
