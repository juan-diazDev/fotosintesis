import React from 'react';
import SignupForm from '../SignupModal';
import Link from 'next/link';
import styles from '../../styles/Header.module.scss';
import LoginForm from '../LoginModal';

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
      <article className={styles.navbar__signin__button}>
        <LoginForm />
      </article>
      <article className={styles.navbar__get_started__button}>
        <SignupForm />
      </article>
    </nav>
  )
}

export default Navbar;
