import video from "../../videos/video_enero.mp4";
import posterVideoInicio from "../../SELECCION_DE_FOTOS/posterVideoInicio.png"
import fotoInicio from "../../SELECCION_DE_FOTOS/FotoInicioAREIAweb.jpg";
import appStore from "../../SELECCION_DE_FOTOS/available_on_app_store.webp";
import playStore from "../../SELECCION_DE_FOTOS/available_on_google_play.webp";
import ContactoFooter from "../contactoFooter";
import Sponsors from "./Sponsors";
import img1 from "../../SELECCION_DE_FOTOS/imgInicio1AREIAweb.jpg";
import img2 from "../../SELECCION_DE_FOTOS/imgInicio2AREIAweb.jpg";
import img3 from "../../SELECCION_DE_FOTOS/imgInicio3AREIAweb.jpg";

import './Inicio.css'
export default function Inicio() {
  return (
    <div>
      <video className="videoInicio" autoPlay controls muted loop src={video} poster={posterVideoInicio} />
      <div
        style={{
          backgroundColor: "white",
          height: "25rem",
          display: "grid",
          justifyContent: "space-around",
          textAlign: "center",
          alignContent: "center",
          marginTop:"-10px"
        }}
        className='divInicio'
      >
        <p style={{ color: "black", fontSize: "30px" }}>AREIA APP</p>
        <div className="storeButton">
          <a href="https://apps.apple.com/ar/app/areia/id1437104821" style={{ marginRight: "10px"}} target="_blank">
          <img src={appStore}/>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.fansbury.AREIA&hl=es-419" style={{ marginLeft: "10px"}} target="_blank">
          <img src={playStore}/>
          </a>
        </div>
        <p
          className="textInicio"
          style={{ color: "black", fontSize: "16px", marginTop: "30px" }}
        >
          POSICIONES, ESTADÍSTICAS, CANCHAS, NOTICIAS Y MÁS
          <br />
          <strong>¡Descargá la app y enterate de todo!</strong>
        </p>
      </div>
      <div className="contenedorImagenesInicio" style={{backgroundImage: `url(${fotoInicio})`,backgroundSize:"100% 100%"}} >
      <img src={img1} className="imagenesInicio"/>
      <img src={img2} className="imagenesInicio"/>
      <img src={img3} className="imagenesInicio"/>
      </div>
      <Sponsors/>
      <ContactoFooter />
    </div>
  );
}
