import styles from './contacto.module.css'
import Imagen2 from '../../SELECCION_DE_FOTOS/fotoFooter1.webp'
import Imagen1 from '../../SELECCION_DE_FOTOS/fotoFooter3.png'
import Imagen4 from '../../SELECCION_DE_FOTOS/fotoHome1.webp'
import Imagen3 from '../../SELECCION_DE_FOTOS/fotoHome2.webp'
import imagenMapa from '../../SELECCION_DE_FOTOS/mapa.webp'
import imagenMapa2 from '../../SELECCION_DE_FOTOS/mapa2.webp'
import './contacto.css'
import ContactoFooter from '../contactoFooter'

export default function Contacto() {
  return (
    <>
      <div
        className={`${styles.home} home`}
        style={{ backgroundImage: `url(${Imagen4}), url(${Imagen3})` }}
      >
        <div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScoQ6EflHucSqPa4XcZEdc57fido8-WsmsU4FTnZieozQOnLA/viewform"
            target="_blank"
            rel="noreferrer"
          >
            <button id="bottone1">
              <h1 className={styles.inscribiteTitle}>INSCRIBITE</h1>
              <p>EN UN CLICK!</p>
            </button>
          </a>
        </div>
      </div>
      <div>
        <div>
          <img src={imagenMapa} id="mapa" alt="mapa" />
        </div>
        <div id="comoLlegar">
          <div id="textMapa">
            <a
              href="https://www.google.com/maps/place/AREIA/@-34.4241246,-58.7635257,17z/data=!3m1!4b1!4m5!3m4!1s0x95bc9f15237e7635:0x1c84373c9462bdd2!8m2!3d-34.424129!4d-58.761337?shorturl=1"
              target="_blank"
              rel="noreferrer"
            >
              <button id="bottone1">
                <strong>CÓMO LLEGAR</strong>
              </button>
            </a>
          </div>
          <div id="mapa2">
            <img alt="mapa2" src={imagenMapa2} className={styles.mapa2Img} />
          </div>
        </div>
      </div>

      <div
        className={`${styles.home2} home2`}
        style={{ backgroundImage: `url(${Imagen2}), url(${Imagen1})` }}
      />
      <ContactoFooter />
      <div className={styles.copyright}>
        Copyright 2024 AREIA©️ - Ementa SRL - Todos los derechos reservados
      </div>
    </>
  )
}
