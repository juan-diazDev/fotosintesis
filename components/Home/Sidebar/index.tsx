import Link from 'next/link';
import styles from '../../../styles/Sidebar.module.scss';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar__main_conatainer}>
      <section className={styles.sidebar__logo__main_container}>
        <figure className={styles.sidebar__logo_container}>
          <Link href="/home">
            <img src="https://res.cloudinary.com/juanito-om/image/upload/v1663682350/Fotos%C3%ADntesis/Logo/Negro_vyop2z.png" alt="logo" />
          </Link>
        </figure>
        <figure className={styles.sidebar__name_logo_container}>
          <Link href="/home">
            <img src="https://res.cloudinary.com/juanito-om/image/upload/v1663682370/Fotos%C3%ADntesis/Logo/Negro_sdubwt.png" alt="logo" />
          </Link>
        </figure>
      </section>

      <nav>
        <section>

        </section>
      </nav>

      <figure className={styles.sidebar__profile__picture_container}>
        <img src="https://res.cloudinary.com/juanito-om/image/upload/v1663685394/Fotos%C3%ADntesis/default_icons/user_1_xsewec.png" alt="user_logo" />
      </figure>
    </aside>
  )
}

export default Sidebar;
