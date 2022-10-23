import './App.css';
import Nabvar from './components/NabVar/Nabvar';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Inicio from './components/Inicio/inicio';
import Nosotros from './components/Nosotros/nosotros';
import Eventos from './components/Eventos/eventos';
import Contacto from './components/Contacto/contacto';
import Asados from './components/asados/asados'
import Allin from './components/allin/allin'
function App() {
  useEffect(() => {
    AOS.init(
      { duration: 2000 }
    );
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={
          <div>
            <Nabvar section="inicio"/>
            <Inicio/>
          </div>
        }>
        </Route>
        <Route  path="/nosotros" element={
          <div>
            <Nabvar section="nosotros" />
            <Nosotros/>
          </div>
        }>
        </Route>
        <Route  path="/venue" element={
          <div>
            <Nabvar section="venue"/>
            <Eventos/>
          </div>
        }>
        </Route>
        <Route  path="/contacto" element={
          <div>
            <Nabvar section="contacto" />
            <Contacto/>
          </div>
        }>
        </Route>
        <Route  path="/asados" element={
            <Asados/>
        }>
        </Route>
        <Route  path="/allin" element={
            <Allin/>
        }>
        </Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
