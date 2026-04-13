import { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import { BrowserView, MobileView, isIOS } from 'react-device-detect'
import styles from './Nosotros.module.css'

import Imagen8 from '../../SELECCION_DE_FOTOS/areia 13_11-043.webp'
import Imagen4 from '../../SELECCION_DE_FOTOS/areia 13_11-060.webp'
import Imagen14 from '../../SELECCION_DE_FOTOS/areia 13_11-088.webp'
import Imagen7 from '../../SELECCION_DE_FOTOS/Areia editadas-45.webp'
import Imagen13 from '../../SELECCION_DE_FOTOS/Areia editadas-8.webp'
import Imagen10 from '../../SELECCION_DE_FOTOS/AREIA FECHA3-29.webp'
import Imagen9 from '../../SELECCION_DE_FOTOS/areia producto-3.webp'
import Imagen12 from '../../SELECCION_DE_FOTOS/areia producto-4.webp'
import Imagen5 from '../../SELECCION_DE_FOTOS/areia0412-29.webp'
import Imagen11 from '../../SELECCION_DE_FOTOS/areia1812-163.webp'
import closeButton from '../../SELECCION_DE_FOTOS/closeButton.webp'
import Imagen6 from '../../SELECCION_DE_FOTOS/fotoCancha.webp'
import Imagen1 from '../../SELECCION_DE_FOTOS/video1.webp'
import Imagen2 from '../../SELECCION_DE_FOTOS/video2.webp'
import Imagen3 from '../../SELECCION_DE_FOTOS/video3.webp'
import video1 from '../../videos/video1.mp4'
import video2 from '../../videos/video2.mp4'
import video3 from '../../videos/video3.mp4'
import ContactoFooter from '../contactoFooter'
import './Nosotros.css'

export default function Nosotros() {
  const [isActive1, setIsActive1] = useState(false)
  const [isActive2, setIsActive2] = useState(false)
  const [isActive3, setIsActive3] = useState(false)

  function unMute(e) {
    e.target.muted = false
  }
  function Mute(e) {
    e.target.muted = true
  }
  function play(e) {
    e.target.play()
    e.target.muted = false
  }
  function stop(e) {
    e.target.pause()
    e.target.muted = true
  }
  function closeAll() {
    setIsActive1(false)
    setIsActive2(false)
    setIsActive3(false)
  }
  const handleClick1 = () => {
    setIsActive1((current) => !current)
  }
  const handleClick2 = () => {
    setIsActive2((current) => !current)
  }
  const handleClick3 = () => {
    setIsActive3((current) => !current)
  }
  const imagenesCarousel = [
    Imagen7,
    Imagen8,
    Imagen9,
    Imagen10,
    Imagen11,
    Imagen12,
    Imagen13,
    Imagen14,
  ]

  return (
    <>
      <div
        className={
          isActive1 || isActive2 || isActive3
            ? `closeButton-active ${styles.closeButtonActive}`
            : 'closeButton'
        }
        style={{ backgroundImage: `url(${closeButton})` }}
        onClick={closeAll}
        onKeyDown={(e) => e.key === 'Enter' && closeAll()}
        role="button"
        tabIndex="0"
        aria-label="Close"
      />
      <BrowserView>
        <div className="homeVideos">
          <video
            className={isActive1 ? 'activeVideo' : ''}
            src={video1}
            onMouseOver={unMute}
            onFocus={unMute}
            onMouseLeave={Mute}
            onBlur={Mute}
            onClick={handleClick1}
            autoPlay
            loop
            muted={!isActive1}
          >
            <track kind="captions" />
          </video>
          <video
            className={isActive2 ? 'activeVideo' : ''}
            src={video2}
            onMouseOver={unMute}
            onFocus={unMute}
            onMouseLeave={Mute}
            onBlur={Mute}
            onClick={handleClick2}
            autoPlay
            loop
            muted={!isActive2}
          >
            <track kind="captions" />
          </video>
          <video
            className={isActive3 ? 'activeVideo' : ''}
            src={video3}
            onMouseOver={unMute}
            onFocus={unMute}
            onMouseLeave={Mute}
            onBlur={Mute}
            onClick={handleClick3}
            autoPlay
            loop
            muted={!isActive3}
          >
            <track kind="captions" />
          </video>
          <div className="videoButtons">
            <a
              href="https://www.youtube.com/shorts/2pFB6DUgnKA"
              target="_blank"
              rel="noreferrer"
            >
              <button
                id="bottone1"
                className={isActive1 ? 'videoButton1' : 'displayNone'}
              >
                <strong className={styles.strongText600}>Ir a YouTube</strong>
              </button>
            </a>
            <a
              href="https://www.youtube.com/shorts/3pfezF8Ejsw"
              target="_blank"
              rel="noreferrer"
            >
              <button
                id="bottone1"
                className={isActive2 ? 'videoButton2' : 'displayNone'}
              >
                <strong className={styles.strongText600}>Ir a YouTube</strong>
              </button>
            </a>
            <a
              href="https://www.youtube.com/shorts/fAQLYpIoBB0"
              target="_blank"
              rel="noreferrer"
            >
              <button
                id="bottone1"
                className={isActive3 ? 'videoButton3' : 'displayNone'}
              >
                <strong className={styles.strongText600}>Ir a YouTube</strong>
              </button>
            </a>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        {isIOS ? (
          <div className="homeVideos">
            <video
              src={video1}
              poster={Imagen1}
              onMouseOver={play}
              onFocus={play}
              onMouseLeave={stop}
              onBlur={stop}
            >
              <track kind="captions" />
            </video>
            <video
              src={video2}
              poster={Imagen2}
              onMouseOver={play}
              onFocus={play}
              onMouseLeave={stop}
              onBlur={stop}
            >
              <track kind="captions" />
            </video>
            <video
              src={video3}
              poster={Imagen3}
              onMouseOver={play}
              onFocus={play}
              onMouseLeave={stop}
              onBlur={stop}
            >
              <track kind="captions" />
            </video>
          </div>
        ) : (
          <div className="homeVideos">
            <video
              className={isActive1 ? 'activeVideo' : ''}
              src={video1}
              poster={Imagen1}
              onMouseOver={play}
              onFocus={play}
              onMouseLeave={stop}
              onBlur={stop}
              onClick={handleClick1}
              muted={!isActive1}
            >
              <track kind="captions" />
            </video>
            <video
              className={isActive2 ? 'activeVideo' : ''}
              src={video2}
              poster={Imagen2}
              onMouseOver={play}
              onFocus={play}
              onMouseLeave={stop}
              onBlur={stop}
              onClick={handleClick2}
              muted={!isActive2}
            >
              <track kind="captions" />
            </video>
            <video
              className={isActive3 ? 'activeVideo' : ''}
              src={video3}
              poster={Imagen3}
              onMouseOver={play}
              onFocus={play}
              onMouseLeave={stop}
              onBlur={stop}
              onClick={handleClick3}
              muted={!isActive3}
            >
              <track kind="captions" />
            </video>
          </div>
        )}
      </MobileView>
      <div className={`${styles.nosotrosInfo} nosotrosInfo`}>
        <p>
          <strong>AREIA</strong> es más que un torneo de fútbol.
          <br /> Es una experiencia social y deportiva.
          <br />
          <strong>PARA ENTENDERLA, HAY QUE VIVIRLA.</strong>
        </p>
      </div>
      <div className={`${styles.contenedorTorneo} contenedorTorneo`}>
        <div className={`${styles.imgTorneo} imgTorneo`}>
          <img
            className={styles.carouselImg}
            src={Imagen4}
            alt="Torneo imagen 1"
          />
          <img
            className={styles.carouselImgFilterNone}
            src={Imagen5}
            alt="Torneo imagen 2"
          />
        </div>
        <div className="textTorneo">
          <h1 className={styles.torneoTitle}>TORNEO</h1>
          <p className={styles.torneoText}>
            <strong className={styles.torneoStrong}>AREIA</strong> cuenta con
            una política de admisión
            <br />
            en base a un sistema de recomendaciones.
            <br />
            <br />
            Para ingesar al torneo es necesario recibir
            <br />
            la recomendación de dos capitanes.
            <br />
            <br />
            El acceso al predio es exclusivo para los <br />
            jugadores del torneo y sus invitados.
          </p>
        </div>
      </div>
      <div className={`${styles.serviceBanner} cont`}>
        <h1 className={styles.serviceTitle}>
          CALIDAD{' '}
          <strong className={styles.atencionCliente}>
            {' '}
            ATENCIÓN AL CLIENTE{' '}
          </strong>{' '}
          SERVICIO
        </h1>
      </div>
      <div
        className={`${styles.canchasBg} canchas`}
        style={{
          backgroundImage: `url(${Imagen6})`,
        }}
      >
        <div className={`${styles.canchasContainer} contenedor`}>
          <h1 className={`${styles.canchasTitle} titulo`}>5 HECTÁREAS</h1>
          <div className={styles.canchasInfoBox}>
            <h1>CANCHAS</h1>
            <p>
              -7 canchas de F7 Masculino
              <br />
              -2 canchas de F7 Femenino
              <br />
              -2 canchas de F6 Femenino (iluminadas)
              <br />
              -4 canchas de F5 Femenino (iluminadas)
            </p>
            <a
              href="https://youtu.be/QHpJ-beyWYs"
              target="_blank"
              rel="noreferrer"
            >
              <button id="bottone1">
                <strong>Ver mapa de canchas</strong>
              </button>
            </a>
            <h1>PREDIO</h1>
            <p>
              -2 estacionamientos privados <br />
              -Vestuarios acondicionados
              <br />
              -Bar interno
              <br />
              -Bar Exterior + Sector Fuegos
              <br />
              -Sector lounge con + 50 livings y mesas
            </p>
          </div>
        </div>
      </div>
      <div className={styles.whiteSpacer} />
      <div className={styles.centerText}>
        <h1 className={styles.galeriaHeader}>GALERÍA</h1>
        <Carousel className="carouselDiv" variant="dark">
          {imagenesCarousel.map((img) => (
            <Carousel.Item key={img}>
              <img
                className="d-block w-100 nosotrosCarrousel"
                src={img}
                alt="Galeria slide"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <ContactoFooter />
      <div className={styles.copyright}>
        Copyright 2024 AREIA©️ - Ementa SRL - Todos los derechos reservados
      </div>
    </>
  )
}
