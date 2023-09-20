// SearchBar.js
import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [resultados, setResultados] = useState([]);

  const zapatos = [
    { id: 1, nombre: 'City' },
    { id: 2, nombre: 'Frontier' },
    { id: 3, nombre: 'Horizon' },
    { id: 4, nombre: 'Soul' },
    { id: 5, nombre: 'Street' },
    { id: 6, nombre: 'Rander' },
    { id: 7, nombre: 'Terra' },
    { id: 8, nombre: 'Lander' },
    { id: 9, nombre: 'Drill' },
    { id: 10, nombre: 'Tracker' },
    { id: 11, nombre: 'Maui' },
    { id: 12, nombre: 'Capri' },
    { id: 13, nombre: 'Bali' },
    { id: 14, nombre: '3002' },
    { id: 15, nombre: '3901' }
  ];

  const handleSearch = () => {
    const keyword = searchTerm.toLowerCase();
    const resultados = zapatos.filter(zapato => zapato.nombre.toLowerCase().includes(keyword));

    if (resultados.length > 0) {
      setResultados(resultados);
      setShowModal(true);
    } else {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Previene la recarga de página
    handleSearch(); // Realiza la búsqueda
  };

  return (
    <div className="search-bar">
      <Form onSubmit={handleSubmit}>
        <div className="d-flex">
          <Form.Control
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mr-2"
          />
          <Button type="submit" variant="primary">
            Buscar
          </Button>
        </div>
      </Form>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Resultados de la Búsqueda</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {resultados.length > 0 ? (
            <ul>
              {resultados.map((resultado) => (
                <li key={resultado.id}>
                  <Link to={`/product/${resultado.id}`}>{resultado.nombre}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className='text-dark'>No se encontraron resultados. Inténtelo con otra palabra clave.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SearchBar;
