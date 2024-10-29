export default function ContactoFooter({ section }) {
  return (
    <footer>
      <h1 className="footer">CONTACTO</h1>
      <div className="contactoFooter">
        <a href="tel:+03484218510" target="_blank" rel="noreferrer">
          <div>
            <h1>TEL.</h1> <p>03484218510</p>
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
            <h1>WA.</h1>{' '}
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
            <h1>UBICACIÓN.</h1> <p>PATRICIAS ARGENTINAS 4005, PILAR</p>
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
            <h1>MAIL.</h1>{' '}
            <p>
              {section === 'venue' ? 'venue@AREIA.com.ar' : 'INFO@AREIA.COM.AR'}
            </p>
          </div>
        </a>
      </div>
    </footer>
  );
}
