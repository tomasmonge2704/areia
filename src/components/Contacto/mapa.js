import imagenMapa from "../SELECCION_DE_FOTOS/mapa.webp"
import imagenMapa2 from "../SELECCION_DE_FOTOS/mapa2.webp"

export default function Mapa() {
    return (
        <div>
            <div>

            <img src={imagenMapa} id="mapa" />

            </div>
            <div id="comoLlegar">
                <div id="textMapa">
                <a href="https://linktr.ee/estoesareia">
                <button id="bottone1"><strong>COMO LLEGAR</strong>
                </button>
                </a>
                </div>
                <div id="mapa2">
                    <img src={imagenMapa2} style={{ width: "100%", height: "100%",padding:"5%",filter:"drop-shadow(2px 4px 6px black)" }} />
                </div>


            </div>
        </div>
    )
}   