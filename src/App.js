import './App.css';
import Nabvar from './components/NabVar/Nabvar';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {HashRouter,Routes, Route } from "react-router-dom";
import Inicio from './components/Inicio/inicio';
import Nosotros from './components/Nosotros/nosotros';
import Eventos from './components/Eventos/eventos';
import Contacto from './components/Contacto/contacto';
function App() {
  useEffect(() => {
    AOS.init(
      { duration: 2000 }
    );
    AOS.refresh();
  }, []);
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={
          <div>
            <Nabvar section="inicio"/>
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
        <Route exact path="/eventos" element={
          <div>
            <Nabvar section="eventos"/>
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
        <Route exact path="/Areia/nosotros" element={
          <div>
            <Nabvar />
          
          </div>
        }>
        </Route>
        <Route exact path="/Areia/eventos" element={
          <div>
            <Nabvar />
            
          </div>
        }>
        </Route>
        <Route exact path="/Areia/contacto" element={
          <div>
            <Nabvar />
            
          </div>
        }>
        </Route>
      </Routes>
      </HashRouter>
  );
}

export default App;
