import React from 'react'
import NavMenu from './NavMenu';
import styles from '../../styles/Header.module.scss';
import About from '../About';

const Hero = () => {
  return (
    <header className={styles.hero}>
      <NavMenu />
      <About />
    </header>
  )
}

export default Hero;
