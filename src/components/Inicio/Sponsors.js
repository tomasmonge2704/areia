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
        <img
          src="./main_sponsor.png"
          alt="Sponsor 1"
          style={{ width: '75%', height: 'auto' }}
        />
      </div>

      <p style={{ marginTop: '3rem', marginBottom: '0px' }}>PARTNERS</p>
      <div className="contenedorSponsors">
        <img
          src="./partners.png"
          alt="partners 1"
          style={{ width: '30%', height: 'auto' }}
        />
      </div>
    </div>
  );
}
