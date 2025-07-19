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
      <p className="sponsor-text">
        MAIN SPONSORS
      </p>
      <div className="contenedorSponsors">
        <img
          src="./main_sponsor.png"
          alt="Sponsor 1"
          style={{ width: '100%', height: 'auto', maxWidth: '1500px' }}
        />
      </div>

      <p className="sponsor-text" style={{ marginTop: '1rem' }}>
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
