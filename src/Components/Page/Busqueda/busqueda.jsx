import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import {Swal} from 'sweetalert2';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSearch = () => {
    const keyword = searchTerm.toLowerCase().substring(0, 2);
    const content = document.body.innerText.toLowerCase();
    const startIndex = content.indexOf(keyword);

    if (startIndex !== -1) {
      const endIndex = startIndex + 2;
      const context = content.substring(startIndex, endIndex);
      const encodedContext = encodeURIComponent(context);

      // Cambia la URL para llevar al usuario a la ubicación de la palabra clave
      window.location.href = `${window.location.pathname}?search=${encodedContext}`;
    } else {
      // No se encontraron resultados, muestra el modal de SweetAlert2
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="search-bar">
    <div className="d-flex">
      <Form.Control
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mr-2"
      />
      <Button variant="primary" onClick={handleSearch}>
        Buscar
      </Button>
    </div>

    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Resultados de la Búsqueda</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='text-dark'>No se encontraron resultados. Inténtelo con otra palabra clave.</p>
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
