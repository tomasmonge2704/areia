import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './Eventos.css';
import { isMobile } from 'react-device-detect';

const importAll = (requireContext) => requireContext.keys().map(requireContext);
const images = importAll(
  require.context('../../../public/Carrousell', false, /\.(jpg|jpeg|png)$/)
);

export default function Eventos() {
  return (
    <>
      <section className="eventos-section">
        <Container fluid className="text-center">
          <Row className="justify-content-center align-items-center">
            <Col
              xs={12}
              md={6}
              className="d-flex flex-column align-items-center mb-3 mb-md-0"
            >
              <img
                src="/logoVenue.webp"
                alt="logo en Areia Venue"
                className="eventos-logo"
              />
              <h1 className="tituloVenue">
                EVENTOS <span className="distintos">DISTINTOS</span>
              </h1>
              <h2 className="eventos-descripcion">
                Trabajamos con dedicación en cada detalle
                <br />
                para que tu evento sea único.
              </h2>
              <button
                className="eventos-boton"
                style={{ marginTop: '15px' }}
                onClick={() =>
                  window.open('https://wa.me/+5491134022431', '_blank')
                }
              >
                más información
              </button>
            </Col>
            <Col xs={12} md={6} className="p-0">
              <div className="eventos-imagen-container">
                <img
                  src="/1.png"
                  alt="Evento en Areia Venue"
                  className="eventos-imagen"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="momentos-section">
        <Container fluid className="p-5">
          <Row className="justify-content-start">
            <Col xs={12} md={6}>
              <h1 className="tituloVenue2">
                Coleccioná <br /> momentos, no cosas.
              </h1>
            </Col>
          </Row>
          <Row className="justify-content-end mt-4">
            <Col xs={12} md={6}>
              <p className="eventos-descripcion">
                AREIA es una empresa con más de 10 <br /> años de experiencia en
                la organización de eventos <br /> tanto sociales como
                corporativos.
              </p>
              <button
                style={{ marginTop: '10px' }}
                className="eventos-boton"
                onClick={() =>
                  window.open('https://wa.me/+5491134022431', '_blank')
                }
              >
                Pedir presupuesto
              </button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="seccion-blanco">
        <Container fluid className="p-5 text-center">
          <Row>
            <h2 className="carrousel-descripcion">
              Un espacio en medio de la naturaleza{' '}
              <strong className="carrousel-descripcion">
                a solo 35 km de CABA
              </strong>{' '}
              que te ofrece todo lo que necesitás: propuesta gastronómica,
              barra, ambientación, planner de AREIA a cargo del evento ¡y mucho
              más!
            </h2>
          </Row>
          <Row className="mt-4">
            <Carousel
              style={{ overflow: 'hidden' }}
              className="carousel-item-height"
            >
              {images.map((image, index) => (
                <Carousel.Item key={image} className="carousel-item-height">
                  <img
                    className="d-block w-100"
                    src={image}
                    alt={`Slide ${index + 1}`}
                    style={{
                      height: '100%',
                      maxHeight: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Row>
        </Container>
      </section>
      <section className="imgFondo1">
        <Container fluid className="text-center contOfrece">
          <Row className="justify-content-center">
            <Col
              xs={12}
              md={2}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <div
                className="offer-box bg-yellow h-100 d-flex flex-column justify-content-center align-items-center"
                style={{ height: '100%' }}
              >
                <h3 className="text-center">Qué te ofrecemos</h3>
              </div>
            </Col>
            <Col
              xs={12}
              md={10}
              className="d-flex flex-wrap justify-content-center"
            >
              {[
                'Estacionamiento privado +500 autos',
                'Seguridad privada',
                'Catering & barra',
                'DJ & técnica e iluminación',
                'Actividades deportivas',
                'Event Planner y más!',
              ].map((feature, index) => (
                <Col xs={5} md={3} className="feature-box" key={feature}>
                  <div className="feature-content">
                    <img
                      src={`/sinFondo/${index + 1}.png`}
                      style={{ height: '100px' }}
                      alt="check"
                    />
                    <h5 className="bold">{feature}</h5>
                  </div>
                </Col>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
      {!isMobile && (
        <section className="seccion-blanco">
          <Container fluid style={{ padding: '6%' }}>
            <Row className="w-100">
              <Col xs={12} md={4}>
                <img
                  src="/eventos1.jpg"
                  alt="Evento en Areia Venue"
                  className="eventos-imagen borde"
                />
              </Col>
              <Col xs={12} md={4}>
                <img
                  src="/eventos2.jpg "
                  alt="Evento en Areia Venue"
                  className="eventos-imagen borde"
                />
              </Col>
              <Col xs={12} md={4}>
                <img
                  src="/eventos3.jpg"
                  alt="Evento en Areia Venue"
                  className="eventos-imagen borde"
                />
              </Col>
            </Row>
          </Container>
        </section>
      )}
      <section className="seccion-blanco">
        <Container fluid className="text-center">
          <Row>
            <Col
              xs={12}
              md={5}
              style={{
                backgroundColor: '#807046',
                color: 'white',
                padding: '4%',
              }}
            >
              <h1 className="tituloVenue2">Corporativo</h1>
              <img
                src="/2.png"
                alt="Evento en Areia Venue"
                style={{ width: '100%', objectFit: 'cover' }}
              />
              <Row className="text-start p-4">
                <h2 className="eventos-descripcion bold">TEAM BUILDING</h2>
                <p style={{ width: '80%' }}>
                  Actividades divertidas y distendidas para tu empresa. El
                  objetivo es fomentar el trabajo en equipo y mejorar las
                  relaciones interpersonales.
                </p>
              </Row>
            </Col>
            <Col xs={12} md={7} className="text-start">
              <Row style={{ alignItems: 'center' }}>
                <Col>
                  <img
                    src="/3.png"
                    alt="Evento en Areia Venue"
                    style={{ width: '100%', objectFit: 'cover' }}
                  />
                </Col>
                <Col>
                  <h2 className="eventos-descripcion bold">ACTIVIDADES</h2>
                  <p style={{ width: '70%' }}>
                    Actividades deportivas coordinadas por miembros de nuestro
                    staff + distintas actividades recreativas disponibles
                    durante todo el evento.
                  </p>
                </Col>
              </Row>
              <Row style={{ alignItems: 'center' }}>
                <Col>
                  <img
                    src="/4.png"
                    alt="Evento en Areia Venue"
                    style={{ width: '100%', objectFit: 'cover' }}
                  />
                </Col>
                <Col>
                  <h2 className="eventos-descripcion bold">CATERING & BARRA</h2>
                  <p style={{ width: '70%' }}>
                    Nuestra propuesta incluye catering a lo largo de todo el
                    evento, y un after party opcional.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="seccion-blanco">
        <Container fluid style={{ padding: '10%' }}>
          <Row>
            <h2
              className="sociales-title"
              style={{
                position: 'relative',
                top: '45px',
                fontWeight: '1000',
              }}
            >
              Sociales
            </h2>
          </Row>
          <Row>
            <Col
              xs={12}
              md={6}
              style={{ display: 'grid', justifyItems: 'center' }}
            >
              <img
                src="/boda.jpg"
                alt="Evento en Areia Venue"
                style={{
                  width: '100%',
                  height: '70vh',
                  objectFit: 'cover',
                  borderRadius: '7%',
                }}
              />
              <Row
                style={{
                  backgroundColor: '#171718',
                  color: 'white',
                  padding: '3%',
                  borderRadius: '30px',
                  width: '70%',
                  position: 'relative',
                  bottom: '5rem',
                }}
              >
                <h2 className="eventos-descripcion bold">CASAMIENTOS</h2>
                <p>
                  Te acompañamos en el camino a este día tan especial con una
                  ejecutiva de AREIA a cargo de todo el evento para que ustedes
                  solo se ocupen de DISFRUTAR!
                </p>
              </Row>
            </Col>
            <Col
              xs={12}
              md={6}
              style={{ display: 'grid', justifyItems: 'center' }}
            >
              <img
                src="/DSC02042.jpg"
                alt="Evento en Areia Venue"
                style={{
                  width: '100%',
                  objectFit: 'cover',
                  height: '70vh',
                  borderRadius: '7%',
                }}
              />
              <Row
                style={{
                  backgroundColor: '#fae94f',
                  padding: '3%',
                  borderRadius: '30px',
                  width: '70%',
                  position: 'relative',
                  bottom: '5rem',
                }}
              >
                <h2 className="eventos-descripcion bold">
                  CUMPLEAÑOS & FIESTAS
                </h2>
                <p>
                  Noches únicas con una propuesta increíble de catering, barra y
                  DJ -y más- para que disfrutes con tus invitados.
                </p>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container
          fluid
          className="text-center"
          style={{
            padding: '6%',
            height: '80vh',
            alignContent: 'center',
            backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url(./DSC02017.jpg)
          `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <p style={{ color: 'white' }} className="tituloVenue3">
            Más de 5 hectáreas de espacio verde, ideales para desconectarse{' '}
            <br /> de la rutina y vivir una experiencia única.
            <br /> * <br /> La versatilidad de nuestras instalaciones permite
            que nos <br /> podamos adaptar perfectamente al tamaño del evento a
            realizar.
          </p>
        </Container>
      </section>
      <footer>
        <Container
          className="text-center"
          style={{ color: 'white', height: '35rem' }}
        >
          <Row className="h-100 justify-content-center align-items-center mt-5">
            <Col className="d-flex flex-column align-items-center gap-3">
              <h2 className="bold grande">
                AREIA SIEMPRE <br /> ESTUVO CERCA.
              </h2>
              <p style={{ fontSize: '20px' }}>
                A 35km de Capital Federal con fácil y rápido acceso en una zona{' '}
                <br />
                segura rodeada de barrios cerrados.
              </p>
              <button className="eventos-boton">VER MAPA</button>
              <p className="mt-4" style={{ fontSize: '20px' }}>
                Seguinos
              </p>
              <div>
                <a
                  href="https://www.instagram.com/areiafutbol/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <i className="fa fa-facebook" />{' '}
                </a>
                <a
                  href="https://wa.link/u3nof1"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <i className="fa fa-twitter" />{' '}
                </a>
                <a
                  href="https://www.instagram.com/areiafutbol/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <i className="fa fa-instagram" />{' '}
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
