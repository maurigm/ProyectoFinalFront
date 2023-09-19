
import React from 'react';
import './contacto.css';

function ContactPage() {
  const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14242.00095104606!2d-65.27075171470644!3d-26.82403727015687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225ce99cc7d4ad%3A0xa9822fac114c2b43!2sParque%20Guillermina!5e0!3m2!1ses-419!2sar!4v1695130219999!5m2!1ses-419!2sar';

  return (
    <div className="contact-container mt-5 p-3">
      <div className="contact-info mt-5">
        <h1 className='text-white'>Información de Contacto</h1>
        <p>Dirección: Avenida Mate de luna 1856</p>
        <p>Teléfono: +123 456 789</p>
        <p>Horario de Atención: Lunes a Viernes: 9:00 AM - 5:00 PM</p>
      </div>
      <div className="map-container">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="450"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          title="Mapa de Google"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactPage;