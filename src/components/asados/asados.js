import './asados.css'
import hastag from "../../SELECCION_DE_FOTOS/hashtag.png"
import imgTop from "../../SELECCION_DE_FOTOS/formasTop.png"
import imgBottom from "../../SELECCION_DE_FOTOS/formaBottom.png"
import linea from "../../SELECCION_DE_FOTOS/linea.png"

export default function Asados({productos}) {
    let  adicionales = productos.filter(e => e.categoria == "ASADOS-adicionales")
    let postres = productos.filter(e => e.categoria == "ASADOS-postres")
    let cervezas = productos.filter(e => e.categoria == "ASADOS-cervezas")
    let combos = productos.filter(e => e.categoria == "ASADOS-combos bebidas")
    let vinos = productos.filter(e => e.categoria == "ASADOS-vinos")
    
    return (
            <div className="menu">
            <img src={imgTop} className="imgTop"/>
            <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",marginRight:"4%",marginTop:"4%"}}>
            <a href="https://www.instagram.com/areiafutbol/" target="_blank">
                <p style={{marginBottom:"0rem",fontWeight:"unset"}}>@AREIAFUTBOL</p>
              </a>
                <strong>AREIA.COM.AR</strong>
            </div>
            <div style={{ display: "grid", justifyContent: "center", textAlign: "center", marginTop: "2vh" }}>
                <h1 className='tituloMenu'>MENÚ</h1>
                <h2 className="stroke">ASADOS</h2>
            </div>
            <div style={{ margin: "4%", display: "flex", flexWrap: "wrap", marginTop: "5%" }}>

                <div style={{ border: "1px solid", borderColor: "rgb(243 254 52)", width: "53%", display: 'flex', flexWrap: "wrap"}} className="adicionales">
                    <h1 className='textoSobreBorde'>ADICIONALES</h1>
                    {adicionales.map((e) => (
                        <>
                            <p style={{ width: "86%" }}>{e.nombre}</p>
                            <p style={{ width: "10%" }}>${e.precio}</p>
                        </>
                    ))}
                </div>

                <div style={{ border: "1px solid", borderColor: "rgb(243 254 52)", width: "47%", display: 'flex', flexWrap: "wrap"
            }} className="adicionales">
                    <h1 className='textoSobreBorde'>POSTRES</h1>
                    {postres.map((e) => (
                        <>
                            <p style={{ width: "86%" }}>{e.nombre}</p>
                            <p style={{ width: "10%" }}>${e.precio}</p>
                        </>
                    ))}
                </div>
                <div className='seccionBebidas' style={{ marginTop: "2%", display: 'flex', flexWrap: "wrap", width: "100%"}}>
                    <div style={{ width: "40%" }}>
                        <h2 className="stroke">BEBIDAS</h2>
                        <h1 style={{marginBottom:"0px"}}>CERVEZAS</h1>
                        <img src={linea} style={{width:"82%",marginBottom:"2%"}}/>
                        <div style={{ display: 'flex', flexWrap: "wrap", padding: "1%" }}>
                        {cervezas.map((e) => (
                        <>
                            <p style={{ width: "70%" }}>{e.nombre}</p>
                            <p style={{ width: "30%" }}>${e.precio}</p>
                        </>
                    ))}
                        </div>

                    </div>
                    <div className="vinos">
                        <h1>VINOS</h1>
                        <div style={{ display: 'flex', flexWrap: "wrap", padding: "1%" }}>
                        {vinos.map((e) => (
                        <>
                            <p style={{ width: "90%" }}>{e.nombre}</p>
                            <p style={{ width: "10%" }}>${e.precio}</p>
                        </>
                    ))}
                    </div>

                    </div>
                </div>
                <div style={{ width: "70%", marginTop: "2%",display:"flex"}}>
                    <div>
                        <h1>COMBOS BEBIDAS</h1>
                        <div style={{ display: 'flex', flexWrap: "wrap", padding: "1%" }}>
                        {combos.map((e) => (
                        <>
                            <p style={{ width: "65%" }}>{e.nombre}</p>
                            <p style={{ width: "35%" }}>${e.precio}</p>
                        </>
                    ))}
                        </div>
                    </div>
                    <img src={imgBottom} className="imgBottom"/>
                </div>
                <div className='lineaAmarilla' style={{borderTop:"1px solid" ,color:"rgb(243 254 52)",width:"100%",marginBottom:"0.7vh"}}></div>
                <div style={{borderTop:"1px solid" ,color:"rgb(243 254 52)",width:"100%"}}></div>
            </div>
            <img src={hastag} className="hashtag"/>
        </div>
    )
}