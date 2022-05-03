import './App.css';
import Nabvar from './components/NabVar/Nabvar';
import Home from './components/NabVar/home';
import Datos from './components/NabVar/datos';
import Mapa from './components/NabVar/mapa';
import Sponsors from './components/NabVar/sponsors';
import FotosFooter from './components/NabVar/fotosFooter';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HashRouter, Routes, Route } from "react-router-dom";
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
            <Nabvar />
            <Home />
            <Datos />
            <Mapa />
            <Sponsors />
            <FotosFooter />
          </div>
        }>
        </Route>
        <Route exact path="/Areia/" element={
          <div>
            <Nabvar />
            <Home />
            <Datos />
            <Mapa />
            <Sponsors />
            <FotosFooter />
          </div>
        }>
        </Route>
        <Route exact path="/nosotros" element={
          <div>
            <Nabvar />
          
          </div>
        }>
        </Route>
        <Route exact path="/eventos" element={
          <div>
            <Nabvar />
            
          </div>
        }>
        </Route>
        <Route exact path="/contacto" element={
          <div>
            <Nabvar />
            
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
