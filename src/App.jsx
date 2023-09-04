import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListProdutcs from "./Components/Page/Products/productcard";

function App() {
  return (
    <>
    <div>
      <BrowserRouter>
      <main>
        <Routes>
          <Route exact path="/product/card" element={<ListProdutcs />} />
      {/* aqui se van a subir los cambios anntes de enviarlos a produccion */}
        </Routes>
      </main>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
