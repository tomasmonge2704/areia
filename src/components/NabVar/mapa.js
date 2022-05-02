import imagenMapa from "../../SELECCION DE FOTOS/Untitled.png"
import imagenMapa2 from "../../SELECCION DE FOTOS/mapa2.png"

export default function Mapa() {
    return (
        <div style={{ backgroundColor: "#1c1c1c" }}>
            <div style={{ height: "40rem" }}>

                <img src={imagenMapa} style={{ width: "100%", height: "100%" }} />

            </div>
            <div style={{ height: "40rem",display:"flex",justifyContent:"space-evenly", alignItems:"center" }}>
                <div style={{marginBottom:"15rem"}}>
                    <h1>CÓMO LLEGAR</h1>
                </div>
                <div style={{width:"50%"}}>
                    <img src={imagenMapa2} style={{ width: "100%", height: "100%" }} />
                </div>


            </div>
        </div>
    )
}   