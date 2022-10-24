import './allin.css'
import hastag from "../../SELECCION_DE_FOTOS/hashtag.png"
import imgTop from "../../SELECCION_DE_FOTOS/imagenTop.png"
import imgBottom1 from "../../SELECCION_DE_FOTOS/formaBottom1.png"
import imgBottom2 from "../../SELECCION_DE_FOTOS/formaBottom2.png"

export default function Allin({productos}) {
    let combos = productos.filter(e => e.categoria == "ALLIN-combos")
    let bottles = productos.filter(e => e.categoria == "ALLIN-bottles")
    let mixers = productos.filter(e => e.categoria == "ALLIN-mixers")
    return (
        <div className="menu allin">
            <img src={imgTop} className="imgTop" />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", marginRight: "4%", marginTop: "4%" }}>
                <a href="https://www.instagram.com/areiafutbol/" target="_blank">
                    <p style={{ marginBottom: "0rem", fontWeight: "unset" }}>@AREIAFUTBOL</p>
                </a>
                <strong>AREIA.COM.AR</strong>
            </div>
            <div style={{ display: "grid", justifyContent: "center", textAlign: "center", marginTop: "2vh",marginBottom:"6vh" }}>
                <h1 className='tituloMenu'>MENÚ</h1>
                <h2 className="stroke">ALL IN</h2>
                <h3 style={{ color: "white" }}>MENÚ EXCLUSIVO PARA MESAS CON RESERVA <br></br> & CON SERVICIO DE MOZO</h3>
            </div>
            <div style={{ margin: "4%", display: "flex", flexWrap: "wrap", marginTop: "5%" }}>
                <div style={{width:"100%",display:"flex",flexWrap:"wrap",marginBottom:"12%"}}>
                <h2 className="stroke textoCombos">COMBOS</h2>
                {combos.map((e) => (
                        <div style={{display:"grid",justifyContent:"center",justifyItems:"center",width:"50%",textAlign:"center"}}>
                            <h1 className='trago'>{e.nombre}</h1>
                            <p>{e.descripcion}</p>
                            <p>${e.precio}</p>
                        </div>
                    ))}
                </div>
                <div style={{ border: "1px solid", borderColor: "rgb(243 254 52)", width: "47%", display: 'flex', flexWrap: "wrap",justifyContent:"center" }} className="adicionales">
                    <h1 className='textoSobreBorde'>BOTTLES</h1>
                    {bottles.map((e) => (
                        <>
                            <p style={{ width: "80%" }}>{e.nombre}</p>
                            <p style={{ width: "20%" }}>${e.precio}</p>
                        </>
                    ))}
                </div>
                <h2 className='stroke textoY'>&</h2>
                <div style={{
                    border: "1px solid", borderColor: "rgb(243 254 52)", width: "53%", display: 'flex', flexWrap: "wrap",justifyContent:"center" }} className="adicionales">
                    <h1 className='textoSobreBorde'>MIXERS</h1>
                    {mixers.map((e) => (
                        <>
                            <p style={{ width: "70%" }}>{e.nombre}</p>
                            <p style={{ width: "10%" }}>${e.precio}</p>
                        </>
                    ))}
                    <img src={imgBottom1} className="imgBottom1"/>
                </div>
                
                <img src={imgBottom2} className="imgBottom2"/>
                <div className='lineaAmarilla' style={{ borderTop: "1px solid", color: "rgb(243 254 52)", width: "100%", marginBottom: "0.7vh" }}></div>
                <div style={{ borderTop: "1px solid", color: "rgb(243 254 52)", width: "100%" }}></div>
            </div>
            <img src={hastag} className="hashtag" />
        </div>
    )
}