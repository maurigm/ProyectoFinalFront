import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListProdutcs from "./Components/Page/Products/productcard";
import Login from "./Components/Page/Session/login";
import { useState } from "react";

function App() {
  const usuarioStorage = JSON.parse(sessionStorage.getItem('usuario')) || {}
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioStorage);
  return (
    <>
    <div>
      <BrowserRouter>
      <main>
        <Routes>
          <Route exact path="/product/card" element={<ListProdutcs />} />
          <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>} ></Route>
        </Routes>
      </main>
      <Login/>
      </BrowserRouter>
      
    </div>
    </>
  )
}

export default App
