import Imagen1 from "../../SELECCION DE FOTOS/Areiaeditadas-104.jpg"
import Imagen2 from "../../SELECCION DE FOTOS/areia13_11-005.jpg"
export default function FotosFooter (){
    return(
        <div className="home" style={{backgroundImage:`url(${Imagen2}), url(${Imagen1})`,backgroundRepeat:"no-repeat, no-repeat",backgroundSize:"50% 100%,50% 100%", backgroundPosition:"left, right"}}>

        </div>
    )
}