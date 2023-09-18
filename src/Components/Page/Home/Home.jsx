import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from "../../../assets/slider 1.jpg";
import "./home.css";
import zapato1 from "../../../assets/zapato1.jpg";
import zapato2 from "../../../assets/zapato2.jpg";
import zapato3 from "../../../assets/zapato3.jpg";
//import logo from "../../../assets/logo.png"



function Sliders() {
 return (
     <div className="conteinerfluid">
       <Carousel>
         <Carousel.Item interval={1000}>
           <img
             className="w-100 "
             src={slider1}
             alt="First slide"
           />
           <Carousel.Caption>
             <h3>First slide label</h3>
             
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item interval={500}>
           <img
             className=" w-100 "
             src={slider1}
             alt="Second slide"
           />
           <Carousel.Caption>
             <h3>Second slide label</h3>
             
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
           <img
             className="w-100 "
             src={slider1}
             alt="Third slide"
           />
           <Carousel.Caption>
             <h3>Third slide label</h3>
             
           </Carousel.Caption>
         </Carousel.Item>
       </Carousel>
     </div>
   );
 }


const MiComponente = () => {
  return (
    <div className="mi-componente text-center">
      <div className="texto-izquierda">
        {/* <img src={logo} className="img-fluid" alt={titulo} /> */}
        <h2 className='text-center fs-1'>Nuestra Identidad</h2>
        <p className='text-center'>La nueva línea FogeStep desafía todos los límites del calzado de seguridad al incorporar la tecnología más exitosa del mundo del running para brindarte una amortiguación y flexibilidad nunca antes vista.

        La revolucionaria suela con un núcleo de Infinergy® by BASF te otorga un retorno de energía de más del 55% en cada paso y mejora notablemente la circulación para darte una capacidad de recuperación excepcional y que te sientas menos cansado al final del día, tal como sucede con los atletas, pero en el trabajo.</p>
        <div className=' conteiner btn-group'>
          <a href="/nosotros" class="btn btn-primary active" aria-current="page">Mas Informacion</a>
        </div>
        
      </div>
    </div>
  );
};

const Tarjeta = ({ titulo, contenido, imagenURL }) => {
  return (
    <div id="card-custom" className="card">
      <img src={imagenURL} className="card-img-top img-fluid" alt={titulo} />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{contenido}</p>
      </div>
    </div>
  );
};

const ComponenteConTarjetas = () => {
  return (
    <div className="container pb-4">
      <h1 className='text-center text-white mb-5'>Nuestras categorias</h1>
      <div className="row">
        <div className="col-md-4 col-sm-6 mb-4">
          <Tarjeta
            titulo="Tarjeta 1"
            contenido="Contenido de la Tarjeta 1"
            imagenURL= {zapato1}
          />
        </div>
        <div className="col-md-4 col-sm-6 mb-4">
          <Tarjeta
            titulo="Tarjeta 2"
            contenido="Contenido de la Tarjeta 2"
            imagenURL={zapato2}
          />
        </div>
        <div className="col-md-4 col-sm-6 mb-4">
          <Tarjeta
            titulo="Tarjeta 2"
            contenido="Contenido de la Tarjeta 2"
            imagenURL={zapato3}
          />
        </div>
        


      </div>
    </div>
  );
};


function App() {
  return (
    <>
      <Sliders />
      <MiComponente />
      <ComponenteConTarjetas/>
     
    </>
  );
}

export default App;
