import { Navbar } from "./components/templates/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Tienda } from "./components/pages/Tienda";
import { Contact } from "./components/pages/Contact";
import { CartProvider } from "./Servicios/CartContext/CartContext";
import { Footer } from "./components/templates/Footer";

function App() {
  return (
    <>
<CartProvider>
      <Navbar />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/tienda"} element={<Tienda />} />
        <Route path={"/contacto"} element={<Contact />} />
      </Routes>
      </CartProvider>
      <Footer></Footer>
    </>
  );
}

export default App
