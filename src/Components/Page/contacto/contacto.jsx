import React from 'react';

const Contacto = () => {
  const direccion = "Tu dirección aquí"; // Ingresa tu dirección
  const telefono = "(123) 456-7890"; // Ingresa tu número de teléfono
  const email = "ejemplo@email.com"; // Ingresa tu dirección de correo electrónico
  const ubicacionLink = `https://www.google.com/maps/dir/-26.8057706,-65.2975823/rolling+code/@-26.8210458,-65.3350846,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94225d3ad7f30f1d:0xf8606cd659b8e3e4!2m2!1d-65.2072018!2d-26.8367009?entry=ttu`; // Enlace a Google Maps

  return (
    <div className="contacto-container mt-5">
      <div className="contacto-info">
        <h2>Contacto</h2>
        <div className="contacto-item">
          <p><a href={ubicacionLink} target="_blank" rel="noopener noreferrer">Dirección: {direccion}</a></p>
        </div>
        <div className="contacto-item">
          <p>Teléfono: {telefono}</p>
        </div>
        <div className="contacto-item">
          <p>Email: {email}</p>
        </div>
        <div className="contacto-redes">
          <a href="#" className="red-social">
            Facebook
          </a>
          <a href="#" className="red-social">
            Twitter
          </a>
          <a href="#" className="red-social">
            Instagram
          </a>
        </div>
      </div>
      <div className="contacto-mapa">
        {/* Puedes mostrar el mapa de Google Maps aquí si lo prefieres */}
      </div>
    </div>
  );
};

export default Contacto;
