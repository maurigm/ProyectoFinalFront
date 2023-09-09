import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListProdutcs from "./Components/Page/Products/productcard";
import Login from "./Components/Page/Session/login";
import Register from "./Components/Page/Session/register"
import { useState } from "react";
import FavoriteProductsPage from "./Components/Page/fav/fav";

function App() {
  const usuarioStorage = JSON.parse(sessionStorage.getItem('usuario')) || {}
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioStorage);
  return (
    <>
    <div>
      <BrowserRouter>
      <main>
        <Routes>
          <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>} ></Route>
          <Route exact path="/register" element={<Register></Register>} ></Route>
          <Route exact path="/product/card" element={<ListProdutcs />} />
          <Route exact path="/favorite" element={<FavoriteProductsPage />} />
          {/* <Route exact path="*" element={<Error404/>} /> */}
        </Routes>
      </main>
      <Login/>
      <Register/>
      </BrowserRouter>
      
    </div>
    </>
  )
}

export default App
