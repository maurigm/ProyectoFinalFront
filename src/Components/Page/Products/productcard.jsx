import React, { useState } from 'react';
import { CardGroup, Card, Container, Row, Button } from "react-bootstrap";

const images = [
    ["https://www.funcionalweb.com/sites/default/files/2019-08/CITY%20BLACK_0.png"],
    ['https://www.funcionalweb.com/sites/default/files/2019-08/FRONTIER.png'],
    ['https://www.funcionalweb.com/sites/default/files/2019-08/HORIZON_0.png'],
    ['https://www.funcionalweb.com/sites/default/files/2019-08/SOUL%20GRAY_0.png'],
    ['https://www.funcionalweb.com/sites/default/files/2019-08/STREET%20CAMEL.png'],
];

function ListProdutcs() {



    return (
        <Container>
            <CardGroup>
                <legend>Line Ultralight</legend>
                <Row lg={5} md={3} sm={2} xs={1}>
                    <div>
                        <Card>
                            <Card.Img variant="top" src={images[0]} />
                            <Card.Body>
                                <Card.Title>City</Card.Title>
                                <Card.Text>
                                    Zapato urbano ultraliviano de seguridad. Cuero 100% natural,
                                    diseño y tecnología de vanguardia.
                                    Confort sin límites y máxima protección.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <Button to="/product/create" variant="outline-success" className='text-decoration-none text-center'>Buy</Button>
                                    <Button to="/product/favorite" variant='outline-warning' className='text-decoration-none text-center'>Favorite</Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <Card.Img variant="top" src={images[1]} />
                            <Card.Body>
                                <Card.Title>Frontier</Card.Title>
                                <Card.Text>
                                    Botín urbano ultraliviano de seguridad.
                                    Cuero ultra premium, diseño y tecnología de vanguardia.
                                    Confort sin límites y máxima protección.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <Card.Img variant="top" src={images[2]} />
                            <Card.Body>
                                <Card.Title>Horizon</Card.Title>
                                <Card.Text>
                                    Zapato urbano ultraliviano de seguridad. Cuero ultra premium,
                                    diseño y tecnología de vanguardia.
                                    Confort sin límites y máxima protección.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <Card.Img variant="top" src={images[3]} />
                            <Card.Body>
                                <Card.Title>Soul</Card.Title>
                                <Card.Text>
                                    Zapatilla ultraliviana de seguridad. Diseño,
                                    tecnología y materiales de vanguardia.
                                    Confort sin límites y máxima proteccion.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <Card.Img variant="top" src={images[4]} />
                            <Card.Body>
                                <Card.Title>Street</Card.Title>
                                <Card.Text>
                                    Botín urbano ultraliviano de seguridad. Cuero 100% natural,
                                    diseño y tecnología de vanguardia.
                                    Confort sin límites y máxima protección.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </div>
                </Row>
                <legend>Line PU/TPU</legend>
                <Row lg={5} md={3} sm={2} xs={1}>
                    <div>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Street</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This card has even longer content than the
                                    first to show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Street</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This card has even longer content than the
                                    first to show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Street</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This card has even longer content than the
                                    first to show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Street</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This card has even longer content than the
                                    first to show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Street</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This card has even longer content than the
                                    first to show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </div>
                </Row>
                <legend>Michelin</legend>
                <Row xl={5} md={3} sm={2} xs={1}>
                    <div>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Street</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This card has even longer content than the
                                    first to show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Street</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This card has even longer content than the
                                    first to show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Street</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This card has even longer content than the
                                    first to show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Street</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This card has even longer content than the
                                    first to show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Street</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This card has even longer content than the
                                    first to show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </div>
                </Row>
            </CardGroup>
        </Container>
    );
}

// const paginationBasic = (
//     <div>
//       <Pagination>{items}</Pagination>
//      <br />

//      <Pagination size="lg">{items}</Pagination>
//       <br />

//      <Pagination size="sm">{items}</Pagination>
//      </div>
//     );

//    render(paginationBasic);

export default ListProdutcs;
