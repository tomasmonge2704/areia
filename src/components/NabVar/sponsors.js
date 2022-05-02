import sponsor from "../../SELECCION DE FOTOS/sponsor.png"

export default function Sponsors () {
    return(
        <div style={{height:"30rem",display:"grid",justifyContent:"center",textAlign:"center",width:"100%",marginBottom:"3rem"}}>
            <p style={{marginTop:"3rem"}}>MAIN SPONSORS</p>
            <div>
            <img src={sponsor}/>
            <img src={sponsor}/>
            <img src={sponsor}/>
            </div>
            <p>PARTNERS</p>
            <div>
            <img src={sponsor}/>
            <img src={sponsor}/>
            </div>
        </div>
    )
}