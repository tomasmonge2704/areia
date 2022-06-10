import Imagen from "../SELECCION DE FOTOS/fotoInicio.png";
import appStore from "../SELECCION DE FOTOS/available_on_app_store.png";
import playStore from "../SELECCION DE FOTOS/available_on_google_play.png";
import ContactoFooter from "./contactoFooter";
export default function Inicio() {
  return (
    <>
      <img className="imgInicio" src={Imagen} style={{ width: "100%",maxHeight:"60vh" }} />
      <div
        style={{
          backgroundColor: "white",
          height: "25rem",
          display: "grid",
          justifyContent: "space-around",
          textAlign: "center",
          alignContent: "center",
        }}
      >
        <p style={{ color: "black", fontSize: "40px" }}>AREIA APP</p>
        <div className="storeButton">
          <img src={appStore} style={{ marginRight: "10px" }} />
          <img src={playStore} style={{ marginLeft: "10px" }} />
        </div>
        <p
          className="textInicio"
          style={{ color: "black", fontSize: "25px", marginTop: "30px" }}
        >
          POSICIONES,ESTADÍSTICAS,CANCHAS,NOTICIAS Y MÁS
          <br />
          <strong>¡Descargá la app y enterate de todo!</strong>
        </p>
      </div>
      <ContactoFooter />
    </>
  );
}
