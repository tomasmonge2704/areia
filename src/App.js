import './App.css';
import AOS from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import AllinContenedor from './components/allin/allinContenedor';
import AsadosContenedor from './components/asados/asadosContenedor';
import Contacto from './components/Contacto/contacto';
import Eventos from './components/Eventos/eventos';
import Inicio from './components/Inicio/inicio';
import Nabvar from './components/NabVar/Nabvar';
import Nosotros from './components/Nosotros/nosotros';

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);
  document.body.style.backgroundColor = 'rgb(23 23 24)';
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <Nabvar exact section="inicio" />
              <Inicio />
            </div>
          }
        />
        <Route
          exact
          path="/nosotros"
          element={
            <div>
              <Nabvar section="nosotros" />
              <Nosotros />
            </div>
          }
        />
        <Route
          exact
          path="/venue"
          element={
            <div>
              <Nabvar section="venue" />
              <Eventos />
            </div>
          }
        />
        <Route
          exact
          path="/contacto"
          element={
            <div>
              <Nabvar section="contacto" />
              <Contacto />
            </div>
          }
        />
        <Route exact path="/asados" element={<AsadosContenedor />} />
        <Route exact path="/allin" element={<AllinContenedor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
