import ContactoFooter from "./contactoFooter";
import imagenHome from "../SELECCION DE FOTOS/eventosHome.png";
import logo from "../SELECCION DE FOTOS/spanAeria.png";
import imagen2 from "../SELECCION DE FOTOS/espacioAeria.png";
import imagen3 from "../SELECCION DE FOTOS/casamientoAeria.png";
import imagen4 from "../SELECCION DE FOTOS/fotoEventos1.png";
import imagen5 from "../SELECCION DE FOTOS/fotoEventos2.png";
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
          <img className="spanAeria" style={{ height: "22px" }} src={logo} />
          <p style={{ color: "#C3D900", fontSize: "22px" }}>/ eventos</p>
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
        <p style={{ fontSize: "17px", marginTop: "2%" }}>
          AREIA es una empresa con{" "}
          <strong style={{ fontSize: "15px" }}>
            mas de 10 años de experiencia
          </strong>
          <br />
          en la organizacion de eventos tanto sociales como corporativos.
          <br />
          <br />
          Queremos que cada persona que nos visita <br /> se lleve de recuerdo
          una experiencia inolvidable.
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
            paddingLeft: "10%",
            alignContent: "center",
            color: "white",
          }}
        >
          <h2 style={{ fontSize: "15px", fontWeight: "500" }}>
            NUESTRO ESPACIO
          </h2>
          <h1 style={{ fontSize: "40px", fontWeight: "200" }}>
            CONTAMOS CON UN AMBIENTE ATRACTIVO <br /> Y NATURAL.
          </h1>
          <p style={{ fontSize: "20px", fontWeight: "200" }}>
            Las mas de 5 hectareas de espacio verde son ideales para
            desconectarse de la rutina y vivir <br /> una experiencia unica.
          </p>
          <p style={{ fontSize: "20px", fontWeight: "200" }}>
            La versatilidad de nuestras instalaciones permite que nos podamos
            adaptar perfectamente al tamaño del evento a realizar.
          </p>
        </div>
        <div
          className="nuestroEspacio-img"
          style={{
            backgroundImage: `url(${imagen2})`,
            height: "100%",
            width: "53%",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
      <div
        className="divCasamiento"
        style={{
          height: "50vh",
          margin: "10vh 12vw 7vh 46.5vw",
          alignItems: "center",
        }}
      >
        <img className="imgCasamiento" src={imagen3} />
        <div
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "4vw 17vh 4vw 19vh",
            display: "grid",
            alignContent: "center",
          }}
        >
          <h2 style={{ fontSize: "15px", fontWeight: "600" }}>UBICACION</h2>
          <h1 style={{ fontSize: "40px", fontWeight: "400" }}>
            AREIA SIEMPRE ESTUVO CERCA.
          </h1>
          <p style={{ fontSize: "18px", fontWeight: "400", color: "black" }}>
            A 35km de Capital Federal con facil y rapido acceso en una zona
            segura rodeada de barrios cerrados.
          </p>
          <button id="bottone1">
            <strong style={{ fontWeight: "600" }}>VER MAPA</strong>
          </button>
        </div>
      </div>
      <div className="divOrg">
        <div className="contt" style={{height:"100%",display:"grid",backgroundColor:"white",color:"black",width:"47vw",alignItems:"center",justifyItems:"center",padding:"3%",textAlign:"center"}}>
          <h1>
            TENEMOS UN EQUIPO QUE SE ENCARGA <br/> DE TODOS LOS ASPECTOS DE TU EVENTO.
          </h1>
          <div style={{ backgroundImage: `url(${imagen4})`,height:"46vh",width:"50%",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%" }} />
          <h1>LA ORGANIZACION, COORDINACION<br/> Y ASESORAMIENTO REQUERIDO.</h1>
          <p> Realizamos Eventos Sociales y Corporativos, sintiéndolos<br/> propio acompaniando al cliente en todos los pasos a dar.</p>
        </div>
        <div className="contt2" style={{ backgroundImage: `url(${imagen5})`,height:"100%",width:"53vw",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%" }}></div>
      </div>
      <ContactoFooter />
    </>
  );
}
