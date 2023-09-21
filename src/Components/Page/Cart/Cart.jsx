import { useEffect, useState } from "react";
import { Col, Row, Container, Table } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

function Cart() {
  
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
    return () => {
      setCart([]);
    };
  }, []);
  console.log(cart);

  const deleteProduct = (event) => {
    const id = event.currentTarget.getAttribute('data-value');
    let modificable = cart;
    let productoABorrar = modificable.findIndex(prod => prod.id == id);
    console.log(modificable);
    console.log(productoABorrar);
    console.log(id);
    modificable.splice(productoABorrar, 1);

    setCart(modificable);
    localStorage.setItem('cart',JSON.stringify(modificable));
    totalAcount();
  }

  const increment = (event) => {
    let modificable = cart;
    const id = event.currentTarget.getAttribute('data-value');
    let productoAModificar = modificable.find(obj => obj.id == id);
    productoAModificar.items = productoAModificar.items + 1;  

    
    setCart(modificable);
    localStorage.setItem('cart',JSON.stringify(modificable));
    setCart(modificable);
    totalAcount();
  }

  const decrement = (event) => {
    let modificable = cart;
    const id = event.currentTarget.getAttribute('data-value');
    let productoAModificar = modificable.find(obj => obj.id == id);

    if (productoAModificar.items > 1) {
      productoAModificar.items = productoAModificar.items - 1;  
      setCart(modificable);
      localStorage.setItem('cart',JSON.stringify(modificable));
      setCart(modificable);
      totalAcount();
    }    
  }
  
  const vaciarCarrito = () => {
    localStorage.removeItem('cart');
    setCart([]);
  }

  let total=0;
  const totalAcount = () => {
    for (let index = 0; index < cart.length; index++) {
      total=total + parseFloat(cart[index].PriceProduct)
    }
  }


  return (
    <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Carrito</h1>
        </div>
        <Table striped bordered hover responsive variant="dark" className="align-middle mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Precio Unitario</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((prod, index) => {
              return (
                <tr key={index}>
                  <td className="text-center">{prod.id}</td>
                  <td>{prod.name}</td>
                  <td>{`$ ${prod.price}`}</td>
                  <td>
                    <Row>
                      <Col><Button variant="secondary" className=" mx-1 text-decoration-none text-center" onClick={decrement} data-value={prod.id}>-</Button></Col>
                      <Col>{prod.items}</Col>
                      <Col><Button variant="secondary" className=" mx-1 text-decoration-none text-center" onClick={increment} data-value={prod.id}>+</Button></Col>
                    </Row>
                  </td>
                  <td>{prod.items * prod.price}</td>            
                  <td className="w-25">
                       <Button variant="outline-danger mx-1" onClick={deleteProduct} data-value={prod.id}>Borrar
                      </Button>
                  </td>
                </tr>
              );
            })}
            <tr>
              <td colSpan={4}>TOTAL</td>
              <td>{`$ ${total}`}</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
        <Button variant="secondary" className=" mx-1 text-decoration-none text-center">Volver a productos</Button>
        <Button variant="secondary" className=" mx-1 text-decoration-none text-center" onClick={vaciarCarrito}>Vaciar carrito</Button>
        <Button variant="secondary" className=" mx-1 text-decoration-none text-center">Comprar</Button>

      </Container>
  );
}

export default Cart;