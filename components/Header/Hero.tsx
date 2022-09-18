import React from 'react'
import NavMenu from './NavMenu';
import styles from '../../styles/Header.module.scss';
import About from '../About';

const Hero = () => {
  return (
    <main className={styles.hero}>
      <NavMenu />
      <About />
    </main>
  )
}

export default Hero;
