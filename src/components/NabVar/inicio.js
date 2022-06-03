import Imagen from "../../SELECCION DE FOTOS/fotoInicio.png"
import appStore from "../../SELECCION DE FOTOS/available_on_app_store.png"
import playStore from "../../SELECCION DE FOTOS/available_on_google_play.png"
export default function Inicio (){
    return(
        <>
        <img src={Imagen} style={{width:"100%"}}/>
        <div style={{backgroundColor:"white",height:"25rem",display:"grid",justifyContent:"space-around",textAlign:"center",alignContent:"center"}}>
            <p style={{color:"black",fontSize:"40px"}}>AREIA APP</p>
            <div>
            <img src={appStore} style={{marginRight:"10px"}}/>
            <img src={playStore}style={{marginLeft:"10px"}}/>
            </div>
            <p style={{color:"black",fontSize:"25px",marginTop:"30px"}}>POSICIONES,ESTADISTICAS,CANCHAS,NOTICIAS Y MAS<br/><strong>Descarga la app y enterate de todo!</strong></p>
            
        </div>
        <footer>
        <h1 className="footer" style={{marginLeft:"13%",fontSize:"30px",marginTop:"5rem"}}>CONTACTO</h1>
        <div className="contactoFooter">
        
            <div><h1>TEL.</h1> <p>03484218510</p></div>
            <div><h1>WA.</h1> <p>1141576513</p></div>
            <div><h1>UBICACION.</h1> <p>PATRICIAS ARGENTINAS 4005, PILAR</p></div>
            <div><h1>MAIL.</h1> <p>INFO@AREIA.COM.AR</p></div>
        </div>
        </footer>
        </>
    )
}