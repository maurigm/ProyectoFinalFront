import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { Card, Form, Button, Modal } from 'react-bootstrap';
import "./register.css"
import { crearUsuario } from "../../helpers/queries";
import Swal from 'sweetalert2';
import "sweetalert2/dist/sweetalert2.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; 
import { FaUserPlus } from 'react-icons/fa';



function RegisterModal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button className='custom-button' variant="primary" onClick={handleShow}>
        <FaUserPlus />
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Registrate Ahora!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <RegistroUsuarios />
          </Modal.Body>
        </Modal>
      </>
    );
  }
const RegistroUsuarios = () => {
  const [formData, setFormData] = useState({
    nombreUsuario: "",
    email: "",
    password: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navegacion = useNavigate(); 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = (data) => {
    const newData = { ...data };
  
    if (data.email === "admin@forgestep.com") {
      newData.isAdmin = true;
    } else {
      newData.isAdmin = false;
    }
    const nuevoUsuario = {...newData, estado:true }
    axios.post('/api/auth/register', nuevoUsuario)
    
      .then((respuesta) => {
        if (respuesta.ok) {
          Swal.fire('Usuario creado', 'El usuario ha sido registrado correctamente', 'success')
            .then(() => {
              navegacion('/');
            });
        } else {
          Swal.fire('Error', 'No se pudo crear el usuario', 'error');
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire('Error', 'Hubo un error al crear el usuario', 'error');
      });
  };
  
  return (
    <Container className="mainSection">
      <Card className="my-5 cardPrincipal">
        <Card.Header as="h5" className='headLine'>Registro</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Nombre de Usuario</Form.Label>
              <Form.Control
                type="text"
                name="nombreUsuario"
                placeholder="Ingrese su nombre de usuario"
                maxLength={50}
                onChange={handleChange}
                {...register('nombreUsuario', {
                  required: 'El nombre de usuario es obligatorio',
                  maxLength: {
                    value: 50,
                    message: 'El nombre de usuario no puede tener más de 50 caracteres',
                  },
                })}
              />
              <Form.Text className="text-danger">{errors.nombreUsuario?.message}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Ingrese un email"
                onChange={handleChange}
                {...register('email', {
                  required: 'El email es obligatorio',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'El email debe contener @ y terminar en .com, .es, .com.ar u otra terminación',
                  },
                })}
              />
              <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                minLength={8}
                placeholder="Ingrese una contraseña"
                onChange={handleChange}
                {...register('password', {
                  required: 'La contraseña es obligatoria',
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                    message: 'La contraseña debe contener 8 caracteres (al menos 1 letra mayúscula, 1 letra minúscula y 1 número) y puede incluir caracteres especiales',
                  },
                })}
              />
              <Form.Text className="text-danger">{errors.password?.message}</Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit" className='botonRegistrar text-white'
              //onMouseOver={(e) => (e.target.style.backgroundColor = "#55868C")}
              //onMouseOut={(e) => (e.target.style.backgroundColor = "#55868C")}
            >
              Registrar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RegisterModal;