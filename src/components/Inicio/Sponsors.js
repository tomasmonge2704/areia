import styles from './Sponsors.module.css'
import './Inicio.css'

export default function Sponsors() {
  return (
    <div className={styles.container}>
      <p className={`${styles.title} ${styles.mainTitle}`}>MAIN SPONSORS</p>
      <div className={styles.sponsorsList}>
        {[
          'STELLA2.png',
          'GATORADE.png',
          'FERNET BRANCA.png',
          'TAKENOS.png',
          'UNDER ARMOUR.png',
        ].map((sponsor) => (
          <img
            key={sponsor}
            src={`/Sponsors/${sponsor}`}
            alt={sponsor.split('.')[0]}
            className={styles.sponsorItem}
          />
        ))}
      </div>

      <p className={`${styles.title} ${styles.partnerTitle}`}>PARTNERS</p>
      <div className="contenedorSponsors">
        <img
          src="./PARTNERS2026.png"
          alt="partners 1"
          className={`${styles.sponsorImg} ${styles.partnerSponsor}`}
          style={{ marginTop: '2rem' }}
        />
      </div>
    </div>
  )
}
