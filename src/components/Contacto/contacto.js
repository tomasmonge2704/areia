import Imagen1 from "../../SELECCION DE FOTOS/fotoFooter2.png";
import Imagen2 from "../../SELECCION DE FOTOS/fotoFooter1.png";
import Imagen3 from "../../SELECCION DE FOTOS/fotoHome2.png";
import Imagen4 from "../../SELECCION DE FOTOS/fotoHome1.png";
import sponsor2 from "../../SELECCION DE FOTOS/sponsor.png";
import sponsor from "../../SELECCION DE FOTOS/puma.png";
import sponsor3 from "../../SELECCION DE FOTOS/budweiser.png";
import imagenMapa from "../../SELECCION DE FOTOS/mapa.png"
import imagenMapa2 from "../../SELECCION DE FOTOS/mapa2.png"
import './contacto.css'
export default function Contacto() {
  return (
    <>
      <div
        className="home"
        style={{ backgroundImage: `url(${Imagen4}), url(${Imagen3})` }}
      >
        <div>
          <a href="https://linktr.ee/estoesareia" target="_blank">
            <button id="bottone1">
              <h1 style={{ color: "black", fontWeight: "100",margin:"0",fontSize:"30px" }}>INSCRIBITE</h1>
              <p>EN UN CLICK!</p>
            </button>
          </a>
        </div>
      </div>
      <div className="datos">
        <div>
          <h1>TEL.</h1> <p>03484218510</p>
        </div>
        <div>
          <h1>WA.</h1> <p>1141576513</p>
        </div>
        <div>
          <h1>UBICACIÓN.</h1> <p>PATRICIAS ARGENTINAS 4005, PILAR</p>
        </div>
        <div>
          <h1>MAIL.</h1> <p>INFO@AREIA.COM.AR</p>
        </div>
      </div>
      <div>
            <div>

            <img src={imagenMapa} id="mapa" />

            </div>
            <div id="comoLlegar">
                <div id="textMapa">
                <a href="https://www.google.com/maps/place/AREIA/@-34.4241246,-58.7635257,17z/data=!3m1!4b1!4m5!3m4!1s0x95bc9f15237e7635:0x1c84373c9462bdd2!8m2!3d-34.424129!4d-58.761337?shorturl=1" target="_blank">
                <button id="bottone1"><strong>CÓMO LLEGAR</strong>
                </button>
                </a>
                </div>
                <div id="mapa2">
                    <img src={imagenMapa2} style={{ width: "100%", height: "100%",padding:"5%"}}/>
                </div>


            </div>
        </div>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
          paddingBottom: "3rem",
          backgroundColor: "white",
        }}
      >
        <p style={{ marginTop: "3rem", marginBottom: "4rem" }}>
          NUESTROS SPONSORS
        </p>
        <div>
          <img className="sponsor" src={sponsor} />
          <img
            className="sponsor"
            style={{ maxWidth: "140px" }}
            src={sponsor2}
          />
          <img className="sponsor" src={sponsor3} />
        </div>
      </div>

      <div
        className="home2"
        style={{ backgroundImage: `url(${Imagen2}), url(${Imagen1})`}}
      ></div>
    </>
  );
}
