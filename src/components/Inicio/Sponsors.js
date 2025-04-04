import sponsor4 from '../../SELECCION_DE_FOTOS/Logo_TromenAREIAweb.webp';
import sponsor5 from '../../SELECCION_DE_FOTOS/LOGOS TROWN.jpg';
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
          href="https://www.stellaartois.com.ar/"
          target="_blank"
          rel="noreferrer"
          style={{ marginRight: '10px' }}
        >
          <img className="sponsor" src="./logo_web_SA.png" alt="Sponsor 1" />
        </a>
        <a href="https://www.stanley1913.ar/" target="_blank" rel="noreferrer">
          <img className="sponsor" src="./logo_web_ST.png" alt="Sponsor 2" />
        </a>
        <a href="https://gatorade.lat/ar/" target="_blank" rel="noreferrer">
          <img className="sponsor" src={sponsor2} alt="Sponsor 2" />
        </a>
        <a
          href="https://www.brancastore.com.ar/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="sponsor" src="./logo_web_FB.png" alt="Sponsor 3" />
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
            alt="Logo Tromen"
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
            alt="Logo Odisea Swimwear"
          />
        </a>
      </div>
    </div>
  );
}
