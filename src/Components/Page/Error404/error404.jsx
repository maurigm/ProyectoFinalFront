import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import error from '../../../assets/error404.gif';
import '../Error404/error404.css'

const Error404 = () => {
    return (
      <section className="mainSection text-center mt-5">

        <img src={error} alt="error 404" className="error404-img mt-5" />
        <p className="error404-texto sombra mt-5">Ups, pagina en construcción.</p>
          <div className="error404-contenido">
          <Link to="/">
            <Button id='btn-error404'className='mb-5'>Volver al inicio</Button>
          </Link>
        </div>
      </section>
    );
  };

export default Error404;
