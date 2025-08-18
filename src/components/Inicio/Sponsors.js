import './Inicio.css';

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
      <p style={{
        fontSize: '1.75rem',
        fontWeight: 'bold',
        marginTop: '3rem',
        marginBottom: '0rem',
      }}>
        MAIN SPONSORS
      </p>
      <div className="contenedorSponsors">
        <img
          src="./main_sponsor.png"
          alt="Sponsor 1"
          style={{ width: '100%', height: 'auto', maxWidth: '1200px' }}
        />
      </div>

      <p style={{
        fontSize: '1.75rem',
        fontWeight: 'bold',
        marginTop: '1rem',
        marginBottom: '0rem',
      }}>
        PARTNERS
      </p>
      <div className="contenedorSponsors">
        <img
          src="./partners2.png"
          alt="partners 1"
          style={{ width: '100%', height: 'auto', maxWidth: '600px' }}
        />
      </div>
    </div>
  );
}
