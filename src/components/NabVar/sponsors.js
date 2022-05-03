import sponsor from "../../SELECCION DE FOTOS/sponsor.png"
import sponsor2 from "../../SELECCION DE FOTOS/puma.png"
import sponsor3 from "../../SELECCION DE FOTOS/budweiser.png"
import sponsor4 from "../../SELECCION DE FOTOS/tromen.png"
import sponsor5 from "../../SELECCION DE FOTOS/trown.png"


export default function Sponsors () {
    return(
        <div style={{display:"grid",justifyContent:"center",textAlign:"center",width:"100%",marginBottom:"3rem"}}>
            <p style={{marginTop:"3rem"}}>MAIN SPONSORS</p>
            <div>
            <img src={sponsor}/>
            <img src={sponsor2}/>
            <img src={sponsor3}/>
            </div>
            <p>PARTNERS</p>
            <div>
            <img src={sponsor4}/>
            <img src={sponsor5}/>
            </div>
        </div>
    )
}