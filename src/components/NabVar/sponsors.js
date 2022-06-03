import sponsor2 from "../../SELECCION DE FOTOS/sponsor.png"
import sponsor from "../../SELECCION DE FOTOS/puma.png"
import sponsor3 from "../../SELECCION DE FOTOS/budweiser.png"
import sponsor4 from "../../SELECCION DE FOTOS/tromen.png"
import sponsor5 from "../../SELECCION DE FOTOS/trown.png"


export default function Sponsors () {
    return(
        <div style={{display:"grid",justifyContent:"center",textAlign:"center",width:"100%",paddingBottom:"3rem",backgroundColor:"white"}}>
            <p style={{marginTop:"3rem",marginBottom:"4rem"}}>NUESTROS SPONSORS</p>
            <div>
            <img className="sponsor" src={sponsor}/>
            <img className="sponsor" style={{maxWidth:"140px"}} src={sponsor2}/>
            <img className="sponsor" src={sponsor3}/>
            </div>
            
        </div>
    )
}