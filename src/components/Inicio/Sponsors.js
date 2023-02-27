import sponsor2 from "../../SELECCION_DE_FOTOS/sponsor.png";
import sponsor3 from "../../SELECCION_DE_FOTOS/budweiser.webp";
import sponsor4 from "../../SELECCION_DE_FOTOS/Logo_TromenAREIAweb.webp";
import sponsor5 from "../../SELECCION_DE_FOTOS/LOGOS TROWN.jpg";
import redBull from "../../SELECCION_DE_FOTOS/redBull.png"
export default function Sponsors(){
    return(
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
        <p style={{ marginTop: "3rem", marginBottom: "3rem" }}>
          MAIN SPONSORS
        </p>
        <div className="contenedorSponsors">
          <img className="sponsor" src={sponsor2} />
          <img className="sponsor" src={redBull} />
          <img className="sponsor" src={sponsor3} />
        </div>
        <p style={{ marginTop: "3rem", marginBottom: "0px" }}>
          PARTNERS
        </p>
        <div>
          <img className="partners" style={{ maxWidth: "95px",marginRight:"10px",objectFit:"contain" }} src={sponsor4} />
          <img className="partners" style={{ maxWidth: "90px",marginLeft:"10px",objectFit:"contain",marginTop:"11px" }} src={sponsor5} />
        </div>
      </div>
    )
}