import styles from './allin.module.css'
import './allin.css'
import imgBottom1 from '../../SELECCION_DE_FOTOS/formaBottom1.png'
import imgBottom2 from '../../SELECCION_DE_FOTOS/formaBottom2.png'
import hastag from '../../SELECCION_DE_FOTOS/hashtag.png'
import imgTop from '../../SELECCION_DE_FOTOS/imagenTop.png'

export default function Allin({ productos }) {
  const combos = productos.filter((e) => e.categoria === 'ALLIN-combos')
  const bottles = productos.filter((e) => e.categoria === 'ALLIN-bottles')
  const mixers = productos.filter((e) => e.categoria === 'ALLIN-mixers')
  document.body.style.backgroundColor = 'rgb(40 40 39)'
  return (
    <div className="menu allin">
      <img alt="img" src={imgTop} className="imgTop" />
      <div className={styles.headerRow}>
        <a
          href="https://www.instagram.com/areiafutbol/"
          target="_blank"
          rel="noreferrer"
        >
          <p className={styles.igLink}>@AREIAFUTBOL</p>
        </a>
        <strong>AREIA.COM.AR</strong>
      </div>
      <div className={styles.menuTitleBox}>
        <h1 className="tituloMenu">MENÚ</h1>
        <h2 className="stroke">ALL IN</h2>
        <h3 className={styles.exclusiveText}>
          MENÚ EXCLUSIVO PARA MESAS CON RESERVA <br /> & CON SERVICIO DE MOZO
        </h3>
      </div>
      <div className={styles.menuGrid}>
        <div className={styles.combosBox}>
          <h2 className="stroke textoCombos">COMBOS</h2>
          {combos.map((e) => (
            <div className={styles.comboItem}>
              <h1 className="trago">{e.nombre}</h1>
              <p>{e.description}</p>
              <p>${e.precio}</p>
            </div>
          ))}
        </div>
        <div className={`${styles.bottlesBox} adicionales`}>
          <h1 className="textoSobreBorde">BOTTLES</h1>
          {bottles.map((e) => (
            <>
              <p className={styles.bottleNombre}>{e.nombre}</p>
              <p className={styles.bottlePrecio}>${e.precio}</p>
            </>
          ))}
        </div>
        <h2 className="stroke textoY">&</h2>
        <div className={`${styles.mixersBox} adicionales`}>
          <h1 className="textoSobreBorde">MIXERS</h1>
          {mixers.map((e) => (
            <>
              <p className={styles.mixerNombre}>{e.nombre}</p>
              <p className={styles.mixerPrecio}>${e.precio}</p>
            </>
          ))}
          <img src={imgBottom1} alt="img" className="imgBottom1" />
        </div>

        <img src={imgBottom2} alt="img" className="imgBottom2" />
        <div className={`${styles.lineaAmarillaTop} lineaAmarilla`} />
        <div className={styles.lineaAmarillaBottom} />
      </div>
      <img src={hastag} alt="img" className="hashtag" />
    </div>
  )
}
