import ContactoFooter from "../contactoFooter";
import imagenHome from "../../SELECCION_DE_FOTOS/eventosHome.webp";
import logoVenue from "../../SELECCION_DE_FOTOS/Areia-VENUE-01.webp";
import imagen2 from "../../SELECCION_DE_FOTOS/espacioAeria.webp";
import imagen3 from "../../SELECCION_DE_FOTOS/casamientoAeria.webp";
import imagen4 from "../../SELECCION_DE_FOTOS/fotoEventos1.webp";
import imagen5 from "../../SELECCION_DE_FOTOS/fotoEventos2.webp";
import img1x4 from "../../SELECCION_DE_FOTOS/foto1x4.webp"
import img3x4 from "../../SELECCION_DE_FOTOS/foto2x4.webp"
import img2x4 from "../../SELECCION_DE_FOTOS/foto3x4.webp"
import img4x4 from "../../SELECCION_DE_FOTOS/foto4x4.webp"
import './Eventos.css'
import Form from 'react-bootstrap/Form';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function Eventos() {
  const form = useRef();
  const [show, setShow] = useState(true);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0wz35n1', 'template_zscz0t8', form.current, '_XsM333Nru3CR72JN')
      .then((result) => {
        setShow(false)
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${imagenHome})`,
          backgroundSize: "cover",
          height: "55vh",
          display: "grid",
          justifyContent: "space-around",
          alignItems: "center",
          alignContent: "center",
          justifyItems: "center",
          textAlign: "center",
        }}
        className='divEventosHome'
      >
        <h1 style={{ color: "white", fontWeight: "200", margin: "0" }}>
          SÓLO TENÉS QUE DISFRUTAR.
        </h1>
        <img src={logoVenue} />
      </div>
      <div
        className="eventosAbout"
        style={{
          backgroundColor: "white",
          height: "25vw",
          display: "grid",
          textAlign: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <strong style={{ fontSize: "15px" }}>ABOUT US</strong>
        <p style={{ fontSize: "17px", marginTop: "2%" }}>
          AREIA es una empresa con{" "}
          <strong style={{ fontSize: "17px" }}>
            más de 10 años de experiencia
          </strong>
          <br />
          en la organización de eventos tanto sociales como corporativos.
          <br />
          <br />
          Queremos que cada persona que nos visita <br /> se lleve de recuerdo
          una experiencia inolvidable.
          <br />
          <br />
          Trabajamos en cada detalle y con dedicación para que tu evento sea un
          exito.
        </p>
      </div>
      <div className="nuestroEspacio">
        <div
          className="nuestroEspacio-text"
          style={{
            height: "100%",
            display: "grid",
            padding: "13% 10% 10% 12%",
            alignContent: "center",
            color: "white",
          }}
        >
          <h2 style={{ fontSize: "1.13em", fontWeight: "500" }}>
            NUESTRO ESPACIO
          </h2>
          <h1 style={{ fontSize: "2.5em", fontWeight: "200" }}>
            CONTAMOS CON UN<br /> AMBIENTE ATRACTIVO <br /> Y NATURAL.
          </h1>
          <p style={{ fontSize: "1.3em", fontWeight: "200" }}>
            Las más de 5 hectareas de espacio verde son ideales para
            desconectarse de la rutina y vivir <br /> una experiencia unica.
          </p>
          <p style={{ fontSize: "1.3em", fontWeight: "200" }}>
            La versatilidad de nuestras instalaciones permite que nos podamos
            adaptar perfectamente al tamaño del evento a realizar.
          </p>
        </div>
        <img
          className="nuestroEspacio-img"
          src={imagen2}
          style={{
            height: "100%",
            width: "53%",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
      <div
        className="divCasamiento"
        style={{
          height: "50vh",
          margin: "9vh 10vw 9vh 46.5vw",
          alignItems: "center",
        }}
      >
        <img className="imgCasamiento" src={imagen3} />
        <div
          style={{
            backgroundColor: "white",
            color: "black",
            display: "grid",
            alignContent: "center",
          }}
        >
          <h2 style={{ fontSize: "15px", fontWeight: "600" }}>UBICACIÓN</h2>
          <h1 style={{ fontSize: "3em", fontWeight: "100" }}>
            AREIA SIEMPRE ESTUVO CERCA.
          </h1>
          <p style={{ fontSize: "1.4em", fontWeight: "400", color: "black" }}>
            A 35km de Capital Federal con fácil y rápido acceso en una zona
            segura rodeada de barrios cerrados.
          </p>
          <a href="https://www.google.com/maps/place/AREIA/@-34.4241246,-58.7635257,17z/data=!3m1!4b1!4m5!3m4!1s0x95bc9f15237e7635:0x1c84373c9462bdd2!8m2!3d-34.424129!4d-58.761337?shorturl=1" target="_blank">
            <button id="bottone1">
              <strong style={{ fontWeight: "600" }}>VER MAPA</strong>
            </button>
          </a>
        </div>
      </div>
      <div className="divOrg">
        <div className="contt" style={{ height: "100%", display: "grid", backgroundColor: "white", color: "black", width: "47vw", alignItems: "center", justifyItems: "center", padding: "3%", textAlign: "center" }}>
          <h1>
            TENEMOS UN EQUIPO QUE SE ENCARGA <br /> DE TODOS LOS ASPECTOS DE TU EVENTO.
          </h1>
          <img src={imagen4} style={{ height: "31vw", width: "58%", objectFit: "cover", borderRadius: "5%", margin: "10px" }} />
          <h1>LA ORGANIZACIÓN, COORDINACIÓN<br /> Y ASESORAMIENTO REQUERIDO.</h1>
          <p> Realizamos Eventos Sociales y Corporativos, sintiéndolos<br /> propio acompaniando al cliente en todos los pasos a dar.</p>
        </div>
        <img src={imagen5} className="contt2" style={{ height: "100%", width: "53vw", objectFit: "cover" }} />
      </div>
      <div className="ofrecemos" style={{ display: "grid", textAlign: "center" }} >
        <h1>OFRECEMOS</h1>
        <p>Estacionamiento privado para más de 500 autos <br />Seguridad privada<br />Catering<br />Tecnica/Iluminación & DJs<br />Servicio de coctelería<br />Event Planner</p>
      </div>
      <div className="eventos4x4Cont" >
        <div className="fotos4x4" style={{ width: "100%" }}>
          <img src={img1x4} />
          <img src={img2x4} />
          <img src={img3x4} />
          <img src={img4x4} />
        </div>
      </div>
      <div className="divFormulario">
        <div className="form">
          {show ? (<>
            <h1>CONTACTO</h1>
            <p>Dejanos tu nombre, fecha solicitada, cantidad de personas y tipo de evento a realizar.</p>
            <div>
              <Form ref={form} onSubmit={sendEmail}>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'center', height: '100%' }}>
                  <div style={{ width: '48%', marginRight: '2%', height: '100%' }}>
                    <Form.Control className="mb-3" name="from_name" type="text" placeholder="Nombre" />
                    <Form.Control className="mb-3" type="text" name="from_telefono" placeholder="Telefono" />
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control type="email" pattern="[^ @]*@[^ @]*"
                        required placeholder="Mail" name="user_email" />
                    </Form.Group>
                  </div>
                  <div style={{ width: '48%' }}>
                    <Form.Group className="h-100" controlId="exampleForm.ControlTextarea1">
                      <Form.Control className="h-100" as="textarea" placeholder="Mensaje" rows={3} name="message" />
                    </Form.Group>
                  </div>
                </div>
                <button className="mt-4" id="bottone1">
                  <strong>Enviar</strong>
                </button>
              </Form>
            </div>
          </>) : (<>
            <h1>Mensaje enviado Correctamente!</h1>
            <button className="mt-5" style={{marginLeft:'30%',marginRight:'30%'}} id="bottone1" onClick={() => setShow(true)}>
                  <strong>Volver</strong>
                </button>
          </>)}

        </div>
        <div className="botonSeguinos" style={{ width: "100%", display: "flex", justifyContent: "center",backgroundColor:'white'}}>
        <a href="https://www.instagram.com/areiavenue/" className="eventosButton" target="_blank">
          <button id="bottone1" style={{ borderRadius: "0px", margin: '0' }}>
            <p style={{ fontWeight: "200", fontSize: "18px", margin: '0' }}>Seguinos en instagram</p>
            <strong style={{ fontSize: "15px" }}>@areiavenue</strong>
          </button>
        </a>
      </div>
      </div>
      <ContactoFooter section="venue" />
    </>
  );
}
