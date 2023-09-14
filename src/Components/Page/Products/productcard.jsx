import React from "react";
import { CardGroup, Card, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './productcard.css';

const images = [
    ["https://www.funcionalweb.com/sites/default/files/2019-08/CITY%20BLACK_0.png"],
    ['https://www.funcionalweb.com/sites/default/files/2019-08/FRONTIER.png'],
    ['https://www.funcionalweb.com/sites/default/files/2019-08/HORIZON_0.png'],
    ['https://www.funcionalweb.com/sites/default/files/2019-08/SOUL%20GRAY_0.png'],
    ['https://www.funcionalweb.com/sites/default/files/2019-08/STREET%20CAMEL.png'],
    ['https://www.funcionalweb.com/sites/default/files/2019-08/RANDER%20GRAY.png'],
    ['https://www.funcionalweb.com/sites/default/files/2021-01/TERRA%20BLACK.png'],
    ['https://www.funcionalweb.com/sites/default/files/2021-01/LANDER%20BROWN_0.png'],
    ['https://www.funcionalweb.com/sites/default/files/2021-05/drill-barrel.png'],
    ['https://www.funcionalweb.com/sites/default/files/2021-05/tracker.png'],
    ['https://www.funcionalweb.com/sites/default/files/2019-08/MAUI%20GRAY.png'],
    ['https://www.funcionalweb.com/sites/default/files/2019-08/CAPRI%20GRAY_0.png'],
    ['https://www.funcionalweb.com/sites/default/files/2019-08/BALI%20GRAY.png'],
    ['https://www.funcionalweb.com/sites/default/files/2021-01/3002_0.png'],
    ['https://www.funcionalweb.com/sites/default/files/2021-05/3901.png']

]; 

function ListProdutcs() {



    return (
        <Container>
            <CardGroup>
                <legend>Linea Ultralivianos</legend>
                <Row lg={5} md={3} sm={2} xs={1}>
                    <div>
                        <Card className="cardd">
                            <Card.Img variant="top" src={images[0]} />
                            <Card.Body >
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
                        <Card className="cardd">
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
                            <div className='d-flex align-items-center justify-content-between'>
                                    <Button to="/product/create" variant="outline-success" className='text-decoration-none text-center'>Buy</Button>
                                    <Button to="/product/favorite" variant='outline-warning' className='text-decoration-none text-center'>Favorite</Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div>
                        <Card className="cardd">
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
                            <div className='d-flex align-items-center justify-content-between'>
                                    <Button to="/product/create" variant="outline-success" className='text-decoration-none text-center'>Buy</Button>
                                    <Button to="/product/favorite" variant='outline-warning' className='text-decoration-none text-center'>Favorite</Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div>
                        <Card className="cardd">
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
                            <div className='d-flex align-items-center justify-content-between'>
                                    <Button to="/product/create" variant="outline-success" className='text-decoration-none text-center'>Buy</Button>
                                    <Button to="/product/favorite" variant='outline-warning' className='text-decoration-none text-center'>Favorite</Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div>
                        <Card className="cardd">
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
                            <div className='d-flex align-items-center justify-content-between'>
                                    <Button to="/product/create" variant="outline-success" className='text-decoration-none text-center'>Buy</Button>
                                    <Button to="/product/favorite" variant='outline-warning' className='text-decoration-none text-center'>Favorite</Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                </Row>
                <legend>Linea PU/TPU</legend>
                <Row lg={5} md={3} sm={2} xs={1}>
                    <div>
                        <Card className="cardd">
                            <Card.Img variant="top" src={images[5]} />
                            <Card.Body>
                                <Card.Title>Rander</Card.Title>
                                <Card.Text>
                                    Botín de seguridad ultra Premium. Óptimo calce y comodidad.
                                    Diseño exclusivo. Tecnología y componentes de vanguardia.
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
                        <Card className="cardd"> 
                            <Card.Img variant="top" src={images[6]} />
                            <Card.Body>
                                <Card.Title>Terra</Card.Title>
                                <Card.Text>
                                    Botín de seguridad ultra Premium. Óptimo calce y comodidad.
                                    Diseño exclusivo. Tecnología y componentes de vanguardia.
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
                        <Card className="cardd">
                            <Card.Img variant="top" src={images[7]} />
                            <Card.Body>
                                <Card.Title>Lander</Card.Title>
                                <Card.Text>
                                    Zapatilla de seguridad ultra ventilada de muy alta gama. Confort extremo.
                                    Diseño exclusivo. Estética,
                                    tecnología y componentes de vanguardia.
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
                        <Card className="cardd">
                            <Card.Img variant="top" src={images[8]} />
                            <Card.Body>
                                <Card.Title>Drill</Card.Title>
                                <Card.Text>
                                    Bota petrolera de alta gama.
                                    Máximo confort. Óptimo calce.
                                    Componentes Premium.
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
                        <Card className="cardd">
                            <Card.Img variant="top" src={images[9]} />
                            <Card.Body>
                                <Card.Title>Tracker</Card.Title>
                                <Card.Text>
                                    Borceguí de última generación.
                                    Confort garantizado.
                                    Tecnología y componentes de alta gama.
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
                </Row>
                <legend>Linea Mujer</legend>
                <Row xl={5} md={3} sm={2} xs={1}>
                    <div>
                        <Card className="cardd">
                            <Card.Img variant="top" src={images[10]} />
                            <Card.Body>
                                <Card.Title>Maui</Card.Title>
                                <Card.Text>
                                    Zapatilla ultraliviana de seguridad. Diseñada por y para mujeres.
                                    Materiales nobles ultra premium y tecnología de vanguardia.
                                    Confort sin límites, femineidad y máxima protección.
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
                        <Card className="cardd">
                            <Card.Img variant="top" src={images[11]} />
                            <Card.Body>
                                <Card.Title>Capri</Card.Title>
                                <Card.Text>
                                    Botita urbana ultraliviana de seguridad. Diseñada por y para mujeres.
                                    Materiales nobles ultra premium y tecnología de vanguardia.
                                    Confort sin límites, femineidad y máxima protección.
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
                        <Card className="cardd">
                            <Card.Img variant="top" src={images[12]} />
                            <Card.Body>
                                <Card.Title>Bali</Card.Title>
                                <Card.Text>
                                    Zapatilla ultraliviana de seguridad. Diseñada por y para mujeres.
                                    Materiales nobles ultra premium y tecnología de vanguardia.
                                    Confort sin límites, femineidad y máxima protección.
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
                        <Card className="cardd">
                            <Card.Img variant="top" src={images[13]} />
                            <Card.Body>
                                <Card.Title>3002</Card.Title>
                                <Card.Text>
                                    Botín de seguridad de alto confort. Diseño clásico.
                                    Componentes de alta calidad.
                                    Ideal para trabajar cómodo en condiciones muy exigidas.
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
                        <Card className="cardd"> 
                            <Card.Img variant="top" src={images[14]} />
                            <Card.Body>
                                <Card.Title>3901</Card.Title>
                                <Card.Text>
                                    Super confort y altas prestaciones. Componentes de alta calidad.
                                    Comodidad aún en trabajos de condiciones muy exigidas
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
                </Row>
            </CardGroup>
        </Container>
    );
}

export default ListProdutcs;
