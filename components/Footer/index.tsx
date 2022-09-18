import Link from 'next/link';
import styles from '../../styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer__main_container}>
      <section className={styles.footer__by_container}>
        <p>© Bloggie by Casa Bhakti</p>
      </section>
      <section className={styles.footer__contact_container}>
        <Link href="/contact">
          <a><b>Contact us</b></a>
        </Link>
      </section>
    </footer>
  )
}

export default Footer
