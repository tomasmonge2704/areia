import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import appStore from '../../SELECCION_DE_FOTOS/available_on_app_store.webp'
import playStore from '../../SELECCION_DE_FOTOS/available_on_google_play.webp'
import styles from './Inicio.module.css'
import ContactoFooter from '../contactoFooter'
import Sponsors from './Sponsors'
import fotoInicio from '../../SELECCION_DE_FOTOS/FotoInicioAREIAweb.jpg'
import posterVideoInicio from '../../SELECCION_DE_FOTOS/posterVideoInicio.png'

import './Inicio.css'

export default function Inicio() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  return (
    <div>
      <div className="video-container">
        {!isVideoLoaded && (
          <img
            src={posterVideoInicio}
            alt="Video poster"
            className="video-poster"
          />
        )}
        <ReactPlayer
          url="./videoInicio.mp4"
          playing
          muted
          loop
          controls
          width="100%"
          height="100%"
          onReady={() => setIsVideoLoaded(true)}
          config={{
            file: {
              attributes: {
                preload: 'auto',
                playsInline: true,
                disablePictureInPicture: true,
              },
            },
          }}
          playsinline
          pip={false}
          fallback={<div>Cargando video...</div>}
          loading="lazy"
        />
      </div>
      <div className={`${styles.divInicio} divInicio`}>
        <p className={styles.appTitle}>AREIA APP</p>
        <div className="storeButton">
          <a
            href="https://apps.apple.com/app/areia/id6478087598"
            className={styles.storeLinkLeft}
            target="_blank"
            rel="noreferrer"
            aria-label="Descargar en App Store"
          >
            <img src={appStore} alt="Disponible en App Store" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.ibaires.areia"
            className={styles.storeLinkRight}
            target="_blank"
            rel="noreferrer"
            aria-label="Descargar en Google Play"
          >
            <img src={playStore} alt="Disponible en Google Play" />
          </a>
        </div>
        <p className={styles.textInicio}>
          POSICIONES, ESTADÍSTICAS, CANCHAS, NOTICIAS Y MÁS
          <br />
          <strong>¡Descargá la app y enterate de todo!</strong>
        </p>
      </div>
      <div
        className={`${styles.contenedorImagenesInicio} contenedorImagenesInicio`}
        style={{
          backgroundImage: `url(${fotoInicio})`,
        }}
      >
        <img
          src="./DSC07056.jpg"
          className="imagenesInicio"
          alt="Imagen destacada 1"
        />
        <img
          src="./DSC08153.jpg"
          className="imagenesInicio"
          alt="Imagen destacada 2"
        />
        <img
          src="./DSC08935.jpg"
          className="imagenesInicio"
          alt="Imagen destacada 3"
        />
      </div>
      <Sponsors />
      <ContactoFooter />
      <div className={styles.copyright}>
        Copyright 2026 AREIA©️ - Ementa SRL - Todos los derechos reservados
      </div>
    </div>
  )
}
