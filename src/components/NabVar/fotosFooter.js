import Imagen1 from "../../SELECCION DE FOTOS/fotoFooter2.png"
import Imagen2 from "../../SELECCION DE FOTOS/fotoFooter1.png"
export default function FotosFooter (){
    return(
        <div className="home" style={{backgroundImage:`url(${Imagen2}), url(${Imagen1})`}}>

        </div>
    )
}