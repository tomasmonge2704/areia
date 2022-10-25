import './App.css';
import Nabvar from './components/NabVar/Nabvar';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {Routes, Route, HashRouter, BrowserRouter} from "react-router-dom";
import Inicio from './components/Inicio/inicio';
import Nosotros from './components/Nosotros/nosotros';
import Eventos from './components/Eventos/eventos';
import Contacto from './components/Contacto/contacto';
import AsadosContenedor from './components/asados/asadosContenedor'
import AllinContenedor from './components/allin/allinContenedor'
function App() {
  useEffect(() => {
    AOS.init(
      { duration: 2000 }
    );
    AOS.refresh();
  }, []);
  document.body.style.backgroundColor = "rgb(23 23 24)" ;
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
          <div>
            <Nabvar exact section="inicio"/>
            <Inicio/>
          </div>
        }>
        </Route>
        <Route exact path="/nosotros" element={
          <div>
            <Nabvar section="nosotros" />
            <Nosotros/>
          </div>
        }>
        </Route>
        <Route exact path="/venue" element={
          <div>
            <Nabvar section="venue"/>
            <Eventos/>
          </div>
        }>
        </Route>
        <Route exact path="/contacto" element={
          <div>
            <Nabvar section="contacto" />
            <Contacto/>
          </div>
        }>
        </Route>
        <Route exact path="/asados" element={
            <AsadosContenedor/>
        }>
        </Route>
        <Route exact path="/allin" element={
            <AllinContenedor/>
        }>
        </Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
