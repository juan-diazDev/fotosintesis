import Link from 'next/link';
import styles from '../../styles/Header.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar__main_container}>
      <Link href="about">
        <article className={styles.navbar__about__button}>
          <button type="button">
            About
          </button>
        </article>
      </Link>
      <Link href="/login">
        <article className={styles.navbar__signin__button}>
          <button type="button">
            Sing in
          </button>
        </article>
      </Link>
      <Link href="/signup">
        <article className={styles.navbar__get_started__button}>
          <button type="button">
            Get started
          </button>
        </article>
      </Link>
    </nav>
  )
}

export default Navbar;
