import imagenMapa from "../../SELECCION DE FOTOS/Untitled.png"
import imagenMapa2 from "../../SELECCION DE FOTOS/mapa2.png"

export default function Mapa() {
    return (
        <div style={{ backgroundColor: "#1c1c1c" }}>
            <div id="mapa1">

                <img src={imagenMapa} style={{ width: "100%", height: "100%" }} />

            </div>
            <div id="comoLlegar">
                <div id="textMapa">
                <a href="https://linktr.ee/estoesareia">
                <button data-aos="fade-up" id="bottone1"><strong>COMO LLEGAR</strong>
                </button>
                </a>
                </div>
                <div id="mapa2">
                    <img src={imagenMapa2} style={{ width: "100%", height: "100%" }} />
                </div>


            </div>
        </div>
    )
}   