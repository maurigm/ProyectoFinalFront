import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
//import axios from 'axios';
import Swal from 'sweetalert2';

const PasswordRecovery = () => {
  const [email, setEmail] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, ingresa tu dirección de correo electrónico.',
      });
      return;
    }

    try {
      //const response = await axios.post('/api/reset-password', { email });

      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Recuperación de Contraseña',
          text: 'Se ha enviado un correo de recuperación de contraseña a tu dirección de correo electrónico. Revísa tu correo para continuar.',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al enviar el correo de recuperación de contraseña. Inténtalo de nuevo más tarde.',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al enviar el correo de recuperación de contraseña. Inténtalo de nuevo más tarde.',
      });
      console.error('Error:', error);
    }

    setEmail('');
  };

  return (
    <Container className="mt-5">
      <h2 className='pt-5'>Recupera tu Contraseña</h2>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="email">
          <Form.Label className='text-white mt-5'>Ingresa tu Correo Electrónico *</Form.Label>
          <Form.Control
            className='mt-2 mb-2 w-75'
            type="email"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Button className='mb-5 mt-3' variant="primary" type="submit">
          Recuperar Contraseña
        </Button>
      </Form>
    </Container>
  );
};

export default PasswordRecovery;

