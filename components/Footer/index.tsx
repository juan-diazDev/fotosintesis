import Link from 'next/link';
import styles from '../../styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer__main_container}>
      <section className={styles.footer__by_container}>
        <p>©Fotosíntesis by Casa Bhakti</p>
      </section>
      <Link href="/contact">
        <section className={styles.footer__contact_container}>
          <p><b>Contact us</b></p>
        </section>
      </Link>
    </footer>
  )
}

export default Footer
