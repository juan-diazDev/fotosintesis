import React from 'react';
import Navbar from '../Navbar';
import styles from '../../styles/Header.module.scss';

const NavMenu = () => {
  return (
    <header className={styles.header__navigation__menu_conatinenr}>
     <section className={styles.header__navigation__logo_container}>
      <picture className={styles.header__navigation__icon_container}>
        <img src="https://res.cloudinary.com/juanito-om/image/upload/v1664237208/Fotos%C3%ADntesis/Iconografia-22_qc70qo.png" alt="logo" />
      </picture>
      <picture className={styles.header__navigation__name_container}>
        <img src="https://res.cloudinary.com/juanito-om/image/upload/v1664237208/Fotos%C3%ADntesis/image_10_n9g4de.png" alt="logo" />
      </picture>
     </section>

      <Navbar />
    </header>
  )
}

export default NavMenu;
