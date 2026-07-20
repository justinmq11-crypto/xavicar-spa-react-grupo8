import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Contacto from "./pages/Contacto";
import DetalleProducto from "./pages/DetalleProducto";
import Inicio from "./pages/Inicio";
import NoEncontrado from "./pages/NoEncontrado";
import Nosotros from "./pages/Nosotros";
import Productos from "./pages/Productos";
import Servicios from "./pages/Servicios";
import Ubicacion from "./pages/Ubicacion";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/ubicacion" element={<Ubicacion />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NoEncontrado />} />
      </Route>
    </Routes>
  );
}

export default App;
