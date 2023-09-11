import { Col, Container, Row, Table } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

function Cart(props) {
  return (
    <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Carrito</h1>
        </div>
        <Table striped bordered hover responsive className="align-middle mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Precio Unitario</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">id prod</td>
              <td>nombre prod</td>
              <td>$precio</td>
              <td>
                <Row>
                  <Col><Button variant="secondary" className=" mx-1 text-decoration-none text-center">-</Button></Col>
                  <Col><p>3</p></Col>
                  <Col><Button variant="secondary" className=" mx-1 text-decoration-none text-center">+</Button></Col>
                </Row>
              </td>
              <td>categoria</td>
              <td>subtotal</td>
            </tr>
            <tr>
              <td>TOTAL</td>
              <td>$3423234</td>
            </tr>
          </tbody>
        </Table>
          <Button variant="secondary" className=" mx-1 text-decoration-none text-center">Volver a productos</Button>
        <Button variant="secondary" className=" mx-1 text-decoration-none text-center">Comprar</Button>

      </Container>
  );
}

export default Cart;