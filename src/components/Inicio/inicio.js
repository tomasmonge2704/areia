import Imagen from "../../SELECCION_DE_FOTOS/areia 13_11-043.jpg";
import appStore from "../../SELECCION_DE_FOTOS/available_on_app_store.webp";
import playStore from "../../SELECCION_DE_FOTOS/available_on_google_play.webp";
import ContactoFooter from "../contactoFooter";
import './Inicio.css'
export default function Inicio() {
  return (
    <div>
      <img className="imgInicio" src={Imagen} style={{ width: "100%",maxHeight:"70vh",objectFit:"cover" }} />
      <div
        style={{
          backgroundColor: "white",
          height: "25rem",
          display: "grid",
          justifyContent: "space-around",
          textAlign: "center",
          alignContent: "center",
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
      <ContactoFooter />
    </div>
  );
}
