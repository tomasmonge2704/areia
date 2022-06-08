import ContactoFooter from "./contactoFooter";
import imagenHome from "../SELECCION DE FOTOS/eventosHome.png";
import logo from "../SELECCION DE FOTOS/spanAeria.png";
import imagen2 from "../SELECCION DE FOTOS/espacioAeria.png";
import imagen3 from "../SELECCION DE FOTOS/casamientoAeria.png";
export default function Eventos() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${imagenHome})`,
          backgroundSize: "100% 100%",
          height: "55vh",
          display: "grid",
          justifyContent: "space-around",
          alignItems: "center",
          alignContent: "center",
          justifyItems: "center",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "white", fontWeight: "200", fontSize: "35px" }}>
          SOLO TENES QUE DISFRUTAR
        </h1>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <img style={{ height: "24px" }} src={logo} />
          <p style={{ color: "#C3D900", fontSize: "25px" }}>/ eventos</p>
        </div>
      </div>
      <div
        className="eventosAbout"
        style={{
          backgroundColor: "white",
          height: "27vh",
          display: "grid",
          textAlign: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <h1 style={{ fontSize: "20px" }}>ABOUT US</h1>
        <p style={{ fontSize: "15px" }}>
          AREIA es una empresa con{" "}
          <strong style={{ fontSize: "15px" }}>
            mas de 10 años de experiencia
          </strong>
          <br />
          en la organizacion de eventos tanto sociales como corporativos.
          <br />
          <br />
          Queremos que cada persona que nos visita se lleve de recuerdo una
          experiencia inolvidable.
          <br />
          <br />
          Trabajamos en cada detalle y con dedicacion para que tu evento sea un
          exito.
        </p>
      </div>
      <div className="nuestroEspacio">
        <div
          className="nuestroEspacio-text"
          style={{
            height: "100%",
            width: "40%",
            display: "grid",
            padding: "8%",
            alignContent: "center",
            color: "white",
          }}
        >
          <h2 style={{ fontSize: "15px", fontWeight: "200" }}>
            NUESTRO ESPACIO
          </h2>
          <h1 style={{ fontSize: "40px", fontWeight: "200" }}>
            CONTAMOS CON UN AMBIENTE ATRACTIVO Y NATURAL.
          </h1>
          <p style={{ fontSize: "15px", fontWeight: "200" }}>
            Las mas de 5 hectareas de espacio verde son ideales para
            desconectarse de la rutina y vivir una experiencia unica.
          </p>
          <p style={{ fontSize: "15px", fontWeight: "200" }}>
            La versatilidad de nuestras instalaciones permite que nos podamos
            adaptar perfectamente al tamaño del evento a realizar.
          </p>
        </div>
        <div
          className="nuestroEspacio-img"
          style={{
            backgroundImage: `url(${imagen2})`,
            height: "100%",
            width: "60%",
          }}
        />
      </div>
      <div
      className="divCasamiento"
        style={{
          height: "38vh",
          display: "flex",
          justifyContent: "center",
          margin: "7vh",
          marginRight:"10vw"
          ,alignItems:"center" 
        }}
      >
        <img className="imgCasamiento" src={imagen3} />
        <div style={{ backgroundColor: "white", color: "black",padding:"9%",display:"grid"}}>
          <h2 style={{ fontSize: "15px", fontWeight: "600" }}>UBICACION</h2>
          <h1 style={{ fontSize: "40px", fontWeight: "400" }}>
            AREIA SIEMPRE ESTUVO CERCA.
          </h1>
          <p style={{ fontSize: "18px", fontWeight: "200" }}>
            A 35km de Capital Federal con facil y rapido acceso en una zona
            segura rodeada de barrios cerrados.
          </p>
          <button id="bottone1">
              <p>VER MAPA</p>
            </button>
        </div>
      </div>
      <ContactoFooter />
    </>
  );
}
