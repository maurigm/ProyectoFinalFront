import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Realiza una solicitud GET para obtener los productos favoritos
    axios.get('/favorites/user_id').then((response) => {
      setFavorites(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    // Realiza una solicitud DELETE para eliminar un producto favorito
    axios.delete(`/favorites/${id}`).then((response) => {
      if (response.status === 200) {
        // Actualiza la lista de favoritos después de eliminar un producto
        setFavorites(favorites.filter((fav) => fav._id !== id));
      } else {
        // Maneja errores aquí si es necesario
      }
    });
  };

  return (
    <div>
      <h1>Tus Favoritos</h1>
      <ul>
        {favorites.length > 0 ? (
          favorites.map((favorite) => (
            <li key={favorite._id}>
              <p>Marca: {favorite.product_id.mark}</p>
              <p>Modelo: {favorite.product_id.model}</p>
              <p>Precio: {favorite.product_id.price}</p>
              <button onClick={() => handleDelete(favorite._id)}>Eliminar</button>
            </li>
          ))
        ) : (
          <p>No tienes productos favoritos.</p>
        )}
      </ul>
    </div>
  );
};

export default FavoritesPage;
