import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css';

function Nav() {
  return (
   <nav className="navbar navbar-expand-xl navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/Img/Cards/navbar.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/Html/index.html">Inicio</a>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="contacto.html">Contacto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="fas fa-search"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="fas fa-star"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="fas fa-shopping-cart"></i></a>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Nav