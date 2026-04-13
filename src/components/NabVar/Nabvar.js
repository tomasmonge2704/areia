import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faWhatsapp,
  faTiktok,
  faSpotify,
} from '@fortawesome/free-brands-svg-icons'
import logo from '../../SELECCION_DE_FOTOS/logo.webp'
import styles from './Nabvar.module.css'

export default function Nabvar({ section }) {
  const [isVisible, setIsVisible] = useState(true)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      setHasScrolled(window.scrollY > 50)
      // Show navbar if scrolling up, or if at the very top
      if (window.scrollY < lastScrollY || window.scrollY < 50) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)
      return () => window.removeEventListener('scroll', controlNavbar)
    }
    return undefined
  }, [lastScrollY])

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={styles.navbar}
      style={{
        transform:
          !isVisible && hasScrolled ? 'translateY(-100%)' : 'translateY(0)',
        backdropFilter: hasScrolled ? 'blur(10px)' : 'none',
        boxShadow: hasScrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          id="logoMobile"
          className={styles.brandMobile}
        >
          <img id="navLogo" src={logo} alt="navlogo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link
              as={Link}
              to="/"
              id="navInicio"
              className={`${section} ${styles.navLinkInicio}`}
            >
              INICIO
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/nosotros"
              id="navNosotros"
              className={`${section} ${styles.navLinkNosotros}`}
            >
              NOSOTROS
            </Nav.Link>
          </Nav>
          <Nav id="navLogoA">
            <Navbar.Brand as={Link} to="/" className={styles.brandDesktop}>
              <img id="navLogo" src={logo} alt="navLogoMini" />
            </Navbar.Brand>
          </Nav>
          <Nav>
            <Nav.Link
              as={Link}
              to="/venue"
              id="navEventos"
              className={`${section} ${styles.navLinkVenue}`}
            >
              VENUE
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contacto"
              id="navContacto"
              className={`${section} ${styles.navLinkContacto}`}
            >
              CONTACTO
            </Nav.Link>
            <div id="socialIcons">
              <a
                href="https://www.instagram.com/areiafutbol/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className="instagram" />
              </a>
              <a
                href="https://www.tiktok.com/@areiafutbol"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTiktok} className="instagram" />
              </a>
              <a
                href="https://open.spotify.com/user/areiafutbol?si=8060a1483fbc4c27&nd=1&dlsi=aa26f41e9f3343d2"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faSpotify} className="instagram" />
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
                <FontAwesomeIcon icon={faWhatsapp} className="instagram" />
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
