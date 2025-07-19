import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faSpotify, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './contactoFooter.css';

export default function ContactoFooter({ section }) {
  return (
    <footer className="footer">
      <div className="contactoFooter">
      <h1 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>CONTACTO</h1>
      <div className="contactoFooterList">
        <a href="tel:+03484218510" target="_blank" rel="noreferrer">
          <div>
            <h1>
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: '8px' }} />
              TEL.
            </h1> 
            <p>03484218510</p>
          </div>
        </a>
        <a
          href={
            section === 'venue'
              ? 'https://wa.link/80sji3'
              : 'https://wa.link/yypgzp'
          }
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <h1>
              <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '8px' }} />
              WA.
            </h1>{' '}
            <p>
              {section === 'venue'
                ? '+54 9 11 3402-2431'
                : '+54 9 11 4157-6513'}
            </p>
          </div>
        </a>
        <a
          href="https://www.google.com/maps/place/AREIA/@-34.4241246,-58.7635257,17z/data=!3m1!4b1!4m5!3m4!1s0x95bc9f15237e7635:0x1c84373c9462bdd2!8m2!3d-34.424129!4d-58.761337?shorturl=1"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <h1>
              <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '8px' }} />
              UBICACIÓN.
            </h1> 
            <p>PATRICIAS ARGENTINAS 4005, PILAR</p>
          </div>
        </a>
        <a
          href={
            section === 'venue'
              ? 'mailto: venue@AREIA.com.ar'
              : 'mailto: info@AREIA.com.ar'
          }
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <h1>
              <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px' }} />
              MAIL.
            </h1>{' '}
            <p>
              {section === 'venue' ? 'venue@AREIA.com.ar' : 'INFO@AREIA.COM.AR'}
            </p>
          </div>
        </a>
        </div>
      </div>
      <div className="contactoFooter">
        <h1 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>SEGUINOS</h1>
        <div className="contactoFooterList">
          <a
            href="https://www.instagram.com/areiafutbol/"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <div>
              <h1>
                <FontAwesomeIcon icon={faInstagram} style={{ marginRight: '8px' }} />
                INSTAGRAM.
              </h1>
              <p>@areiafutbol</p>
            </div>
          </a>
          <a
            href="https://www.tiktok.com/@areiafutbol"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <div>
              <h1>
                <FontAwesomeIcon icon={faTiktok} style={{ marginRight: '8px' }} />
                TIKTOK.
              </h1>
              <p>@areiafutbol</p>
            </div>
          </a>
          <a
            href="https://open.spotify.com/user/areiafutbol?si=8060a1483fbc4c27&nd=1&dlsi=aa26f41e9f3343d2"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <div>
              <h1>
                <FontAwesomeIcon icon={faSpotify} style={{ marginRight: '8px' }} />
                SPOTIFY.
              </h1>
              <p>areiafutbol</p>
            </div>
          </a>
        </div>
      </div>
      <div className="contactoFooter">
        <h1 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>EXPERIENCIA AREIA</h1>
        <div className="contactoFooterList">
          <a
            href="https://linktr.ee/estoesareia"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <div>
              <h1>
                <FontAwesomeIcon  style={{ marginRight: '8px' }} />
                LINKTREE
              </h1>
              <p>Mas información</p>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
