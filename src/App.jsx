import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/layout/Nav";
import ListProdutcs from "./Components/Page/Products/productcard";
import { useState } from "react";
import FavoriteProductsPage from "./Components/Page/fav/fav";
import Home from "./Components/Page/Home/Home"
import Footer from "./Components/layout/Footer";
import Error404 from "./Components/Page/Error404/error404";
import Team from "./Components/Page/Nosotros/nosotros";
import PasswordRecovery from "./Components/Page/Session/recpassword";
import Contacto from "./Components/Page/contacto/contacto";
import SearchBar from "./Components/Page/Busqueda/busqueda";




function App() {
  const usuarioStorage = JSON.parse(sessionStorage.getItem('usuario')) || {}
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioStorage);
  return (
    <>
      <div>
        <BrowserRouter>
        <Nav/>
          <main>
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/product/card" element={<ListProdutcs />} />
              <Route exact path="/favorite" element={<FavoriteProductsPage />} />
              <Route path="*" element={<Error404/>}></Route>
              <Route exact path="/nosotros" element={<Team />} />
              <Route exact path="/recuperarcontrasenia" element={<PasswordRecovery />} />
              <Route exact path="/contacto" element={<Contacto />} />
              <Route exact path="/busqueda" element={<SearchBar />} />

            </Routes>
          </main>
        
        <Footer/>
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
