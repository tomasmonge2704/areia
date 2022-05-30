export default function Contacto(){
    return(
        <div id="contact-form" style={{ backgroundColor: "#1c1c1c",display:"grid",textAlign:"center",margin:"8%",padding:"5%"}}>
        <h1 style={{fontSize:"5rem"}}>CONTACTO</h1>
        <div>
            <h1 style={{color:"rgb(255 255 254)"}}>Estamos en </h1>
            <h2 style={{fontStyle:"oblique",color:"grey"}}> Patricias Argentinas 4005,Pilar, Buenos Aires</h2>
        </div>
        <div >
            <h1 style={{color:"rgb(255 255 254)"}}>Llamanos </h1>
            <h2 style={{fontStyle:"oblique",color:"grey"}}>+54 11 0348 421 8510 +54 911 4157 6513</h2>
        </div>
        <div >
            <h1 style={{color:"rgb(255 255 254)"}}>Inscripciones</h1>
            <button data-aos="fade-up" id="bottone1"><h2 style={{color:"black",fontWeight:"300"}}>Ir a inscripciones</h2>
                </button>
        </div>
        </div>
    )
}