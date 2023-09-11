import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function FavoriteProductsPage() {
  // Supongamos que tienes una lista de productos favoritos en tu estado
  const [favoriteProducts, setFavoriteProducts] = useState([
    { id: 1, name: 'Product 1', description: 'Descripción del Producto 1' },
    { id: 2, name: 'Product 2', description: 'Descripción del Producto 2' },
    { id: 3, name: 'Product 3', description: 'Descripción del Producto 3' },
    // Agrega más productos favoritos aquí
  ]);

  return (
    <Container>
      <h1>My favorite products</h1>
      <Row>
        {favoriteProducts.map((product) => (
          <Col key={product.id} md={4} sm={6}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Img variant="top" src="src/public/assets/productoPrueba.png" />
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="danger">Eliminar de Favoritos</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FavoriteProductsPage;
