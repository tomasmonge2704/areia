/* eslint-disable */
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { BrowserView, MobileView, isIOS } from 'react-device-detect';

import Imagen8 from '../../SELECCION_DE_FOTOS/areia 13_11-043.webp';
import Imagen4 from '../../SELECCION_DE_FOTOS/areia 13_11-060.webp';
import Imagen14 from '../../SELECCION_DE_FOTOS/areia 13_11-088.webp';
import Imagen7 from '../../SELECCION_DE_FOTOS/Areia editadas-45.webp';
import Imagen13 from '../../SELECCION_DE_FOTOS/Areia editadas-8.webp';
import Imagen10 from '../../SELECCION_DE_FOTOS/AREIA FECHA3-29.webp';
import Imagen9 from '../../SELECCION_DE_FOTOS/areia producto-3.webp';
import Imagen12 from '../../SELECCION_DE_FOTOS/areia producto-4.webp';
import Imagen5 from '../../SELECCION_DE_FOTOS/areia0412-29.webp';
import Imagen11 from '../../SELECCION_DE_FOTOS/areia1812-163.webp';
import closeButton from '../../SELECCION_DE_FOTOS/closeButton.webp';
import Imagen6 from '../../SELECCION_DE_FOTOS/fotoCancha.webp';
import Imagen1 from '../../SELECCION_DE_FOTOS/video1.webp';
import Imagen2 from '../../SELECCION_DE_FOTOS/video2.webp';
import Imagen3 from '../../SELECCION_DE_FOTOS/video3.webp';
import video1 from '../../videos/video1.mp4';
import video2 from '../../videos/video2.mp4';
import video3 from '../../videos/video3.mp4';
import ContactoFooter from '../contactoFooter';
import './Nosotros.css';

export default function Nosotros() {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  function unMute(e) {
    e.target.muted = false;
  }
  function Mute(e) {
    e.target.muted = true;
  }
  function play(e) {
    e.target.play();
    e.target.muted = false;
  }
  function stop(e) {
    e.target.pause();
    e.target.muted = true;
  }
  function closeAll() {
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
  }
  const handleClick1 = () => {
    // 👇️ toggle isActive state on click
    setIsActive1((current) => !current);
  };
  const handleClick2 = () => {
    // 👇️ toggle isActive state on click
    setIsActive2((current) => !current);
  };
  const handleClick3 = () => {
    // 👇️ toggle isActive state on click
    setIsActive3((current) => !current);
  };
  const imagenesCarousel = [
    Imagen7,
    Imagen8,
    Imagen9,
    Imagen10,
    Imagen11,
    Imagen12,
    Imagen13,
    Imagen14,
  ];
  return (
    <>
      <div
        className={
          isActive1 || isActive2 || isActive3
            ? 'closeButton-active'
            : 'closeButton'
        }
        style={{ backgroundImage: `url(${closeButton})` }}
        onClick={closeAll}
      />
      <BrowserView>
        <div className="homeVideos">
          <video
            className={isActive1 ? 'activeVideo' : ''}
            src={video1}
            onMouseOver={unMute}
            onMouseLeave={Mute}
            onClick={handleClick1}
            autoPlay
            loop
            muted={!isActive1}
          />
          <video
            className={isActive2 ? 'activeVideo' : ''}
            src={video2}
            onMouseOver={unMute}
            onMouseLeave={Mute}
            onClick={handleClick2}
            autoPlay
            loop
            muted={!isActive2}
          />
          <video
            className={isActive3 ? 'activeVideo' : ''}
            src={video3}
            onMouseOver={unMute}
            onMouseLeave={Mute}
            onClick={handleClick3}
            autoPlay
            loop
            muted={!isActive3}
          />
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
                <strong style={{ fontWeight: '600' }}>Ir a YouTube</strong>
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
                <strong style={{ fontWeight: '600' }}>Ir a YouTube</strong>
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
                <strong style={{ fontWeight: '600' }}>Ir a YouTube</strong>
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
              onMouseLeave={stop}
            />
            <video
              src={video2}
              poster={Imagen2}
              onMouseOver={play}
              onMouseLeave={stop}
            />
            <video
              src={video3}
              poster={Imagen3}
              onMouseOver={play}
              onMouseLeave={stop}
            />
          </div>
        ) : (
          <div className="homeVideos">
            <video
              className={isActive1 ? 'activeVideo' : ''}
              src={video1}
              poster={Imagen1}
              onMouseOver={play}
              onMouseLeave={stop}
              onClick={handleClick1}
              muted={!isActive1}
            />
            <video
              className={isActive2 ? 'activeVideo' : ''}
              src={video2}
              poster={Imagen2}
              onMouseOver={play}
              onMouseLeave={stop}
              onClick={handleClick2}
              muted={!isActive2}
            />
            <video
              className={isActive3 ? 'activeVideo' : ''}
              src={video3}
              poster={Imagen3}
              onMouseOver={play}
              onMouseLeave={stop}
              onClick={handleClick3}
              muted={!isActive3}
            />
          </div>
        )}
      </MobileView>
      <div
        className="nosotrosInfo"
        style={{
          backgroundColor: 'white',
          paddingBottom: '1rem',
          paddingTop: '1rem',
        }}
      >
        <p>
          <strong>AREIA</strong> es más que un torneo de fútbol.
          <br /> Es una experiencia social y deportiva.
          <br />
          <strong>PARA ENTENDERLA, HAY QUE VIVIRLA.</strong>
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
        className="contenedorTorneo"
      >
        <div
          className="imgTorneo"
          style={{
            zIndex: '10',
            width: '34vw',
            marginLeft: '10vw',
          }}
        >
          <img
            style={{ maxWidth: '100%', position: 'relative', bottom: '2rem' }}
            src={Imagen4}
          />
          <img style={{ maxWidth: '100%', filter: 'none' }} src={Imagen5} />
        </div>
        <div className="textTorneo">
          <h1
            style={{ color: 'white', fontWeight: '900', paddingBottom: '2vh' }}
          >
            TORNEO
          </h1>
          <p style={{ color: 'white', fontWeight: '200' }}>
            <strong style={{ color: 'white', fontWeight: '500' }}>AREIA</strong>{' '}
            cuenta con una política de admisión
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
      <div
        className="cont"
        style={{
          backgroundColor: '#f5ff35',
          height: '200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1 style={{ fontWeight: '400' }}>
          CALIDAD{' '}
          <strong style={{ fontSize: '38px' }}> ATENCIÓN AL CLIENTE </strong>{' '}
          SERVICIO
        </h1>
      </div>
      <div
        className="canchas"
        style={{
          backgroundImage: `url(${Imagen6})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="contenedor" style={{ height: '100%' }}>
          <h1
            className="titulo"
            style={{
              color: 'white',
              fontWeight: '400',
              margin: '0',
              padding: '0',
              position: 'relative',
              top: '16px',
            }}
          >
            5 HECTÁREAS
          </h1>
          <div
            style={{
              backgroundColor: 'white',
              width: '40%',
              display: 'grid',
              placeContent: 'space-evenly',
              paddingBottom: '5rem',
              height: '100%',
            }}
          >
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
      <div
        className="contenedorWhite"
        style={{
          backgroundColor: 'white',
          height: '10rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      />
      <div style={{ textAlign: 'center' }}>
        <h1
          style={{
            paddingBottom: '5%',
            paddingTop: '5%',
            color: 'rgb(243 255 51)',
            fontWeight: '200',
          }}
        >
          GALERÍA
        </h1>
        <Carousel className="carouselDiv" variant="dark">
          {imagenesCarousel.map((img) => (
            <Carousel.Item>
              <img
                className="d-block w-100 nosotrosCarrousel"
                src={img}
                alt="First slide"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <ContactoFooter />
      <div
        style={{
          color: 'white',
          textAlign: 'center',
          marginBottom: '2rem',
        }}
      >
        Copyright 2024 AREIA©️ - Ementa SRL - Todos los derechos reservados
      </div>
    </>
  );
}
