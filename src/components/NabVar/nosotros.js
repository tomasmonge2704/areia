import Imagen1 from "../../SELECCION DE FOTOS/video1.png";
import Imagen2 from "../../SELECCION DE FOTOS/video2.png";
import Imagen3 from "../../SELECCION DE FOTOS/video3.png";
import Imagen4 from "../../SELECCION DE FOTOS/areia 13_11-060.png";
import Imagen5 from "../../SELECCION DE FOTOS/areia0412-29.png";
import Imagen6 from "../../SELECCION DE FOTOS/fotoCancha.png";
import Imagen7 from "../../SELECCION DE FOTOS/GALERIA1.png";
import Imagen8 from "../../SELECCION DE FOTOS/GALERIA2.png";
import Imagen9 from "../../SELECCION DE FOTOS/GALERIA3.png";
import ContactoFooter from "./contactoFooter";
export default function Nosotros() {
  return (
    <>
      <div
        className="nosotrosHome"
        style={{
          backgroundImage: `url(${Imagen1}), url(${Imagen2}),url(${Imagen3})`,
        }}
      />
      <div
        className="nosotrosInfo"
        style={{ backgroundColor: "white", height: "20vh" }}
      >
        <p style={{ paddingLeft: "25vh", paddingTop: "5vh" }}>
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
          style={{
            zIndex: "10",
            width: "40%",
          }}
        >
          <img
            style={{ maxWidth: "100%", paddingBottom: "20px" }}
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
      <div style={{ backgroundImage: `url(${Imagen6})`, height: "50rem",backgroundSize:"100% 100%"}}>
        <div
          style={{ paddingTop: "8rem", paddingLeft: "12rem", height: "100%" }}
        >
          <h1
            style={{
              fontSize: "78px",
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
              placeContent:"space-evenly",
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
            <button id="bottone1"><strong>ver mapa de canchas</strong></button>
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
      <div style={{ backgroundColor: "white", height: "10rem",display:"flex",justifyContent:"center" }}></div>
      <div
        className="nosotrosGaleria"
        style={{
          backgroundImage: `url(${Imagen7}), url(${Imagen8}),url(${Imagen9})`,
        }}>
            <h1 style={{color:"white",fontWeight:"200"}}>GALERIA</h1>
        </div>
      <ContactoFooter />
    </>
  );
}
