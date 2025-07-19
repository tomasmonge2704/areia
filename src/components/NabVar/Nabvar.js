import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import logo from '../../SELECCION_DE_FOTOS/logo.webp';

export default function Nabvar({ section }) {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      setHasScrolled(window.scrollY > 50);
      // Show navbar if scrolling up, or if at the very top
      if (window.scrollY < lastScrollY || window.scrollY < 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => window.removeEventListener('scroll', controlNavbar);
    }
  }, [lastScrollY]);

  return (
    <Navbar 
      collapseOnSelect 
      expand="lg" 
      style={{ 
        maxWidth: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'transform 0.3s ease-in-out',
        transform: !isVisible && hasScrolled ? 'translateY(-100%)' : 'translateY(0)',
        backgroundColor: 'rgba(23, 23, 24, 0.95)',
        backdropFilter: hasScrolled ? 'blur(10px)' : 'none',
        boxShadow: hasScrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          id="logoMobile"
          style={{ width: '100px',  }}
        >
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
                <FontAwesomeIcon icon={faInstagram} className="instagram" />
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
                <FontAwesomeIcon icon={faWhatsapp} className="instagram"/>
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
