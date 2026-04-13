import styles from './asados.module.css'
import './asados.css'
import imgBottom from '../../SELECCION_DE_FOTOS/formaBottom.png'
import imgTop from '../../SELECCION_DE_FOTOS/formasTop.png'
import hastag from '../../SELECCION_DE_FOTOS/hashtag.png'
import linea from '../../SELECCION_DE_FOTOS/linea.png'

export default function Asados({ productos }) {
  const adicionales = productos.filter(
    (e) => e.categoria === 'ASADOS-adicionales'
  )
  const postres = productos.filter((e) => e.categoria === 'ASADOS-postres')
  const cervezas = productos.filter((e) => e.categoria === 'ASADOS-cervezas')
  const combos = productos.filter(
    (e) => e.categoria === 'ASADOS-combos bebidas'
  )
  const vinos = productos.filter((e) => e.categoria === 'ASADOS-vinos')
  document.body.style.backgroundColor = 'rgb(40 40 39)'
  return (
    <div className="menu">
      <img src={imgTop} alt="img" className="imgTop" />
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
        <h2 className="stroke">ASADOS</h2>
      </div>
      <div className={styles.menuGrid}>
        <div className={`${styles.adicionalesBox} adicionales`}>
          <h1 className="textoSobreBorde">ADICIONALES</h1>
          {adicionales.map((e) => (
            <>
              <p className={styles.itemNombre}>{e.nombre}</p>
              <p className={styles.itemPrecio}>${e.precio}</p>
            </>
          ))}
        </div>

        <div className={`${styles.postresBox} adicionales`}>
          <h1 className="textoSobreBorde">POSTRES</h1>
          {postres.map((e) => (
            <>
              <p className={styles.itemNombre}>{e.nombre}</p>
              <p className={styles.itemPrecio}>${e.precio}</p>
            </>
          ))}
        </div>
        <div className={`${styles.seccionBebidasBox} seccionBebidas`}>
          <div className={styles.cervezasInnerBox}>
            <h2 className="stroke ">BEBIDAS</h2>
            <h1 className={styles.cervezasH1}>CERVEZAS</h1>
            <img alt="img" src={linea} className={styles.lineaImg} />
            <div className={styles.cervezasGrid}>
              {cervezas.map((e) => (
                <>
                  <p className={styles.cervezaNombre}>{e.nombre}</p>
                  <p className={styles.cervezaPrecio}>${e.precio}</p>
                </>
              ))}
            </div>
          </div>
          <div className="vinos">
            <h1>VINOS</h1>
            <div className={styles.vinosGrid}>
              {vinos.map((e) => (
                <>
                  <p className={styles.vinoNombre}>{e.nombre}</p>
                  <p className={styles.vinoPrecio}>${e.precio}</p>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.combosBox}>
          <div>
            <h1>COMBOS BEBIDAS</h1>
            <div className={styles.combosGrid}>
              {combos.map((e) => (
                <>
                  <p className={styles.comboNombre}>{e.nombre}</p>
                  <p className={styles.comboPrecio}>${e.precio}</p>
                </>
              ))}
            </div>
          </div>
          <img alt="img" src={imgBottom} className="imgBottom" />
        </div>
        <div className={`${styles.lineaAmarillaTop} lineaAmarilla`} />
        <div className={styles.lineaAmarillaBottom} />
      </div>
      <img src={hastag} alt="img" className="hashtag" />
    </div>
  )
}
