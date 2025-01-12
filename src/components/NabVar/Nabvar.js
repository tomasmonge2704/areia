import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../../SELECCION_DE_FOTOS/logo.webp';

export default function Nabvar({ section }) {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ maxWidth: '100%' }}>
      <Container>
        <Navbar.Brand href="#home" id="logoMobile" style={{ width: '100px' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img id="navLogo" src={logo} alt="navlogo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Link to="/" id="navInicio" style={{ textDecoration: 'none' }}>
              <Nav.Link className={section} href="#features">
                INICIO
              </Nav.Link>
            </Link>
            <Link
              to="/nosotros"
              id="navNosotros"
              style={{ textDecoration: 'none' }}
            >
              <Nav.Link
                href="#pricing"
                className={section}
                style={{ marginRight: '5vh', marginLeft: '2vh' }}
              >
                NOSOTROS
              </Nav.Link>
            </Link>
          </Nav>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Nav id="navLogoA">
              <Navbar.Brand
                href="#home"
                style={{
                  width: '12vw',
                  height: '100px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <img id="navLogo" src={logo} alt="navLogoMini" />
              </Navbar.Brand>
            </Nav>
          </Link>
          <Nav>
            <Link
              to="/venue"
              id="navEventos"
              style={{ textDecoration: 'none' }}
            >
              <Nav.Link
                href="#deets"
                className={section}
                style={{ marginLeft: '4vh', marginRight: '2vh' }}
              >
                VENUE
              </Nav.Link>
            </Link>
            <Link
              to="/contacto"
              id="navContacto"
              className={section}
              style={{ textDecoration: 'none' }}
            >
              <Nav.Link href="#deets" className={section}>
                CONTACTO
              </Nav.Link>
            </Link>
            <div id="socialIcons">
              <a
                href="https://www.instagram.com/areiafutbol/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-instagram instagram" />{' '}
              </a>
              <a
                href={
                  section === 'venue'
                    ? 'https://wa.link/u3nof1'
                    : 'https://wa.link/yypgzp'
                }
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-phone" />{' '}
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
