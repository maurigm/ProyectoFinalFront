import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [resultados, setResultados] = useState([]);

  const zapatos = [
    'City',
    'Frontier',
    'Horizon',
    'Soul',
    'Street',
    'Rander',
    'Terra',
    'Lander',
    'Drill',
    'Tracker',
    'Maui',
    'Capri',
    'Bali',
    '3002',
    '3901'
  ];

  const handleSearch = () => {
    const keyword = searchTerm.toLowerCase();
    const resultados = zapatos.filter(zapato => zapato.toLowerCase().includes(keyword));

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
              {resultados.map((resultado, index) => (
                <li key={index}>{resultado}</li>
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
