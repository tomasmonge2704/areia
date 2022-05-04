import Imagen1 from "../../SELECCION DE FOTOS/arei-66.jpg"
import Imagen2 from "../../SELECCION DE FOTOS/areia0412-10.jpg"
export default function Home (){
    return(
        <div className="home" style={{backgroundImage:`url(${Imagen2}), url(${Imagen1})`}}>
            
            <div>
                <a href="https://linktr.ee/estoesareia">
                <button data-aos="fade-up" id="bottone1"><h1 style={{color:"black",fontWeight:"400"}}>INSCRIBITE</h1><p>EN UN CLICK!</p>
                </button>
                </a>
                </div>

        </div>
    )
}