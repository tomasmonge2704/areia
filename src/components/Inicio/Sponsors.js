import bplay from '../../SELECCION_DE_FOTOS/bplay.png';
import sponsor3 from '../../SELECCION_DE_FOTOS/budweiser.webp';
import sponsor4 from '../../SELECCION_DE_FOTOS/Logo_TromenAREIAweb.webp';
import sponsor5 from '../../SELECCION_DE_FOTOS/LOGOS TROWN.jpg';
import tblon from '../../SELECCION_DE_FOTOS/logoTblon.png';
import osde from '../../SELECCION_DE_FOTOS/osde.png';
import sponsor2 from '../../SELECCION_DE_FOTOS/sponsor.png';
import umbro from '../../SELECCION_DE_FOTOS/umbro.png';

export default function Sponsors() {
  return (
    <div
      style={{
        display: 'grid',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
        paddingBottom: '3rem',
        backgroundColor: 'white',
      }}
    >
      <p style={{ marginTop: '3rem', marginBottom: '3rem' }}>MAIN SPONSORS</p>
      <div className="contenedorSponsors">
        <a
          href="https://www.budweiser.com.ar/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="sponsor" src={sponsor3} alt="Sponsor 1" />
        </a>
        <a
          href="https://www.osde.com.ar/conoce-osde"
          target="_blank"
          rel="noreferrer"
        >
          <img className="sponsor" src={osde} alt="Sponsor 3" />
        </a>
        <a href="https://gatorade.lat/ar/" target="_blank" rel="noreferrer">
          <img className="sponsor" src={sponsor2} alt="Sponsor 2" />
        </a>
        <a href="https://www.bplay.bet.ar/" target="_blank" rel="noreferrer">
          <img className="sponsor" src={bplay} alt="Sponsor 4" />
        </a>
        <a href="https://tienda.umbro.com.ar/" target="_blank" rel="noreferrer">
          <img className="sponsor" src={umbro} alt="Sponsor 5" />
        </a>
      </div>

      <p style={{ marginTop: '3rem', marginBottom: '0px' }}>PARTNERS</p>
      <div>
        <a href="https://www.tromen.com/" target="_blank" rel="noreferrer">
          <img
            className="partners"
            style={{
              maxWidth: '95px',
              marginRight: '10px',
              objectFit: 'contain',
            }}
            src={sponsor4}
          />
        </a>
        <a href="https://tblon.com.ar/" target="_blank" rel="noreferrer">
          <img
            className="partners"
            style={{
              maxWidth: '90px',
              marginLeft: '10px',
              objectFit: 'contain',
              marginTop: '11px',
            }}
            src={tblon}
          />
        </a>
        <a
          href="https://www.odiseaswimwear.com.ar/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="partners"
            style={{
              maxWidth: '90px',
              marginLeft: '10px',
              objectFit: 'contain',
              marginTop: '11px',
            }}
            src={sponsor5}
          />
        </a>
      </div>
    </div>
  );
}
