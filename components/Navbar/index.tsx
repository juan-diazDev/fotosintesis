import styles from '../../styles/Header.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar__main_container}>
      <article className={styles.navbar__about__button}>
        <button type="button">About</button>
      </article>
      <article className={styles.navbar__signin__button}>
        <button type="button">Sing in</button>
      </article>
      <article className={styles.navbar__get_started__button}>
        <button type="button">Get started</button>
      </article>
    </nav>
  )
}

export default Navbar;
