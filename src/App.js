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

function App() {
  useEffect(() => {
    AOS.init(
      {duration : 2000}
    );
    AOS.refresh();
  }, []);
  return (
    <div>
      <Nabvar/>
      <Home/>
      <Datos/>
      <Mapa/>
      <Sponsors/>
      <FotosFooter/>
    </div>
  );
}

export default App;
