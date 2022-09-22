import Navbar from '../Navbar';
import styles from '../../styles/Header.module.scss';

const NavMenu = () => {
  return (
    <header className={styles.header__navigation__menu_conatinenr}>
     <section className={styles.header__navigation__logo_container}>
      <picture className={styles.header__navigation__icon_container}>
        <img src="https://res.cloudinary.com/juanito-om/image/upload/v1663682350/Fotos%C3%ADntesis/Logo/Blanco_sruuwt.png" alt="logo" />
      </picture>
      <picture className={styles.header__navigation__name_container}>
        <img src="https://res.cloudinary.com/juanito-om/image/upload/v1663682370/Fotos%C3%ADntesis/Logo/Blanco_rltj9d.png" alt="logo" />
      </picture>
     </section>

      <Navbar />
    </header>
  )
}

export default NavMenu;
