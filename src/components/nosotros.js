import Imagen1 from "../SELECCION DE FOTOS/video1.png";
import Imagen2 from "../SELECCION DE FOTOS/video2.png";
import Imagen3 from "../SELECCION DE FOTOS/video3.png";
import Imagen4 from "../SELECCION DE FOTOS/areia 13_11-060.png";
import Imagen5 from "../SELECCION DE FOTOS/areia0412-29.png";
import Imagen6 from "../SELECCION DE FOTOS/fotoCancha.png";
import Imagen7 from "../SELECCION DE FOTOS/GALERIA1.png";
import Imagen8 from "../SELECCION DE FOTOS/GALERIA2.png";
import Imagen9 from "../SELECCION DE FOTOS/GALERIA3.png";
import video1 from "../videos/video1.mp4";
import video2 from "../videos/video2.mp4";
import video3 from "../videos/video3.mp4";
import ContactoFooter from "./contactoFooter";
import $ from "jquery";

export default function Nosotros() {
  function play(e) {
    e.target.play();
  }
  function pause(e) {
    e.target.pause();
  }

  return (
    <>
      <div className="homeVideos">
        <video src={video1} onMouseOver={play} onMouseLeave={pause}></video>
        <video src={video2} onMouseOver={play} onMouseLeave={pause}></video>
        <video src={video3} onMouseOver={play} onMouseLeave={pause}></video>
      </div>
      <div
        className="nosotrosInfo"
        style={{ backgroundColor: "white", height: "19vh" }}
      >
        <p>
          <strong>AREIA</strong> es mas que un torneo de futbol.<br></br> Es una
          experiencia social y deportiva.
          <br />
          <br />
          <strong>PARA ENTENDERLA HAY QUE VIVIRLA</strong>
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div
          className="imgTorneo"
          style={{
            zIndex: "10",
            width: "40%",
          }}
        >
          <img
            style={{ maxWidth: "100%", position: "relative", bottom: "2rem" }}
            src={Imagen4}
          />
          <img style={{ maxWidth: "100%" }} src={Imagen5} />
        </div>
        <div>
          <h1 style={{ color: "white", fontWeight: "200" }}>TORNEO</h1>
          <p style={{ color: "white", fontWeight: "200" }}>
            <strong style={{ color: "white", fontWeight: "500" }}>AREIA</strong>{" "}
            cuenta con una politica de admicion
            <br />
            en base a un sistema de recomendaciones.
            <br />
            <br />
            Para ingesar al torneo es necesario recibir
            <br />
            la recomendacion de dos capitanes.
            <br />
            <br />
            El acceso al predio es exclusivo para los <br />
            jugadores del torneo y sus invitados.
          </p>
        </div>
      </div>
      <div
        className="cont"
        style={{
          backgroundColor: "#f5ff35",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontWeight: "400" }}>
          CALIDAD{" "}
          <strong style={{ fontSize: "38px" }}> ATENCION AL CLIENTE </strong>{" "}
          SERVICIO
        </h1>
      </div>
      <div
        className="canchas"
        style={{
          backgroundImage: `url(${Imagen6})`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="contenedor" style={{ height: "100%" }}>
          <h1
            className="titulo"
            style={{
              color: "white",
              fontWeight: "400",
              margin: "0",
              padding: "0",
              position: "relative",
              top: "16px",
            }}
          >
            5 HECTAREAS
          </h1>
          <div
            style={{
              backgroundColor: "white",
              width: "40%",
              display: "grid",
              placeContent: "space-evenly",
              paddingBottom: "5rem",
              height: "100%",
            }}
          >
            <h1>CANCHAS</h1>
            <p>
              -7 canchas de F7 Masculino
              <br />
              -2 canchas de F7 Femenino
              <br />
              -2 canchas de F6 Femenino (iluminadas)
              <br />
              -4 canchas de F5 Femenino (iluminadas)
            </p>
            <button id="bottone1">
              <strong>ver mapa de canchas</strong>
            </button>
            <h1>PREDIO</h1>
            <p>
              -2 estacionamientos privados <br />
              -Vestuarios acondicionados
              <br />
              -Bar interno
              <br />
              -Bar Exterior + Sector Fuegos
              <br />
              -Sector lounge con + 50 livings y mesas
            </p>
          </div>
        </div>
      </div>
      <div
        className="contenedorWhite"
        style={{
          backgroundColor: "white",
          height: "10rem",
          display: "flex",
          justifyContent: "center",
        }}
      ></div>
      <div
        className="nosotrosGaleria"
        style={{
          backgroundImage: `url(${Imagen7}), url(${Imagen8}),url(${Imagen9})`,
        }}
      >
        <h1 style={{ color: "white", fontWeight: "200" }}>GALERIA</h1>
      </div>
      <ContactoFooter />
    </>
  );
}
