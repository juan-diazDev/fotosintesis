import Navbar from '../Navbar';
import styles from '../../styles/Header.module.scss';

const NavMenu = () => {
  return (
    <nav className={styles.header__navigation__menu_conatinenr}>
     <section className={styles.header__navigation__logo_container}>
      <figure>
        <img src="https://res.cloudinary.com/juanito-om/image/upload/v1663440985/PP-assets/Iconografia-05_pbp67i.png" alt="logo" />
      </figure>
      <h1>Bloggie</h1>
     </section>

      <Navbar />
    </nav>
  )
}

export default NavMenu;
