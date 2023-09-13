const URL_USUARIO = import.meta.env.VITE_API_USUARIO


export const login = async (usuario) =>{
  try {
    const respuesta = await fetch(URL_USUARIO, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    const datos = await respuesta.json();
    return {
      status: respuesta.status,
      mensaje: datos.mensaje,
      usuario: datos.nombre,
      estado: datos.estado,
      isAdmin: datos.isAdmin,
      uid: datos.uid,
      token: datos.token
    };
  } catch (error) {
    console.log("errores en el login");
    return;
  }
}

export const crearUsuario = async (usuario) => {
  try {
    const respuesta = await fetch(URL_USUARIO+'/registro', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
  

  













