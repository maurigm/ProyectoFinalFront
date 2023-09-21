import { Container, Form, Table } from "react-bootstrap";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Product from "./Product/Product";
import { Link } from "react-router-dom";

const ProductPage = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Productos</h1>
          <div>
            <p>notificacion de falta de stock a las unidades:</p>
            <Form.Select aria-label="Default select example">
              <option>nunca</option>
              <option value="10">10</option>
              <option value="9">9</option>
              <option value="8">8</option>
              <option value="7">7</option>
              <option value="6">6</option>
              <option value="5">5</option>
            </Form.Select>  
          </div>
          <Link className="btn-yellow text-decoration-none text-center" onClick={handleShow}>Add Product</Link>
        </div>
        <hr />
        {/* Table of products */}
        <Table striped bordered hover responsive className="align-middle mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Imagen</th>
              <th>Categoria</th>
              <th>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">id prod</td>
              <td>nombre prod</td>
              <td>$precio</td>
              <td>
                <p className="truncate-img-link m-0">img url
                </p>
              </td>
              <td>categoria</td>
              <td className="w-25">
                <div className="d-flex justify-content-center">
                  <Button variant="secondary" className=" mx-1 text-decoration-none text-center" onClick={handleShow}>Editar</Button>

                  <Button variant="secondary" className="btn-red mx-1">Borrar</Button>
                </div>
              </td>
            </tr>
            {/* { products.map( (product) => <Product key = {product.id} product= {product} /> )} */}
          </tbody>
        </Table>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body >
            <Form.Control size="sm" type="text" placeholder="id" />
            <Form.Control size="sm" type="text" placeholder="Nombre" />
            <Form.Control size="sm" type="number" placeholder="Precio" />
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Seleccionar imagen</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Select aria-label="Default select example">
              <option>Seleccione la categoria</option>
              <option value="10">10</option>
              <option value="9">9</option>
              <option value="8">8</option>
              <option value="7">7</option>
            </Form.Select> 
            <Form.Control size="sm" type="number" placeholder="Stock" />
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Ingrese la descripcion del producto</Form.Label>
              <Form.Control as="textarea"/>
            </Form.Group>
            <Button variant="primary" onClick={handleClose}>
            Save Changes
            </Button>

          </Modal.Body>
          
        </Modal>
      </Container>
    </div>
  );
};

export default ProductPage;