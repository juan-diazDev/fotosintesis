import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../../styles/Sidebar.module.scss';

const Sidebar = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear()

    router.push('/')
  }

  return (
    <aside className={styles.sidebar__main_conatainer}>
      <Link href="/home">
        <section className={styles.sidebar__logo__main_container}>
          <picture className={styles.sidebar__logo_container}>
            <img src="https://res.cloudinary.com/juanito-om/image/upload/v1663974577/Fotos%C3%ADntesis/Logo/Iconografia-02_nvabow.png" alt="logo" />
        </picture>

        <picture className={styles.sidebar__name_logo_container}>
          <img src="https://res.cloudinary.com/juanito-om/image/upload/v1663974536/Fotos%C3%ADntesis/Logo/image_1_zkjqf1.png" alt="logo" />
        </picture>
      </section>
      </Link>

      <nav className={styles.sidebar__nav__buttons__main_container}>
        <section className={styles.sidebar__home__button__container}>
          <Link href="/home">
            <picture className={styles.sidebar__home__button__icon_container}>
              <img src="https://res.cloudinary.com/juanito-om/image/upload/v1663685165/Fotos%C3%ADntesis/default_icons/house-with-smoking-chimney-hand-drawn-rural-mountain-building_u5efq8.png" alt="home_icon" />
            </picture>
          </Link>
          {/* <figcaption className={styles.sidebar__home__button__text}>Home</figcaption> */}
        </section>

        <section className={styles.sidebar__notification__button__container}>
          <picture className={styles.sidebar__notification__button__icon_container}>
            <img src="https://res.cloudinary.com/juanito-om/image/upload/v1663685006/Fotos%C3%ADntesis/default_icons/bell_1_vjtqeb.png" alt="notification_icon" />
          </picture>
          {/* <figcaption className={styles.sidebar__notification__button__text}>Notification</figcaption> */}
        </section>

        <section className={styles.sidebar__favs__button__container}>
          <picture className={styles.sidebar__favs__button__icon_container}>
            <img src="https://res.cloudinary.com/juanito-om/image/upload/v1663972500/Fotos%C3%ADntesis/default_icons/favourite_ylsubb.png" alt="favs_icon" />
          </picture>
          {/* <figcaption className={styles.sidebar__favs__button__text}>Favs</figcaption> */}
        </section>

        <section className={styles.sidebar__mine__button__container}>
          <picture className={styles.sidebar__mine__button__icon_container}>
            <img src="https://res.cloudinary.com/juanito-om/image/upload/v1663685526/Fotos%C3%ADntesis/default_icons/to-do-list_pf4fid.png" alt="mine_logo" />
          </picture>
          {/* <figcaption className={styles.sidebar__mine__button__text}>Mine</figcaption> */}
        </section>

        <hr className={styles.sidebar__separation__line} />

        <section className={styles.sidebar__new__button__container}>
          <picture className={styles.sidebar__new__button__icon_container}>
            <img src="https://res.cloudinary.com/juanito-om/image/upload/v1663974857/Fotos%C3%ADntesis/Logo/image_6_mo7yzd.png" alt="new_logo" />
          </picture>
          {/* <figcaption className={styles.sidebar__new__button__text}>New</figcaption> */}
        </section>
      </nav>

      <section onClick={handleLogout} className={styles.sidebar__profile__picture_main_container}>
        <picture className={styles.sidebar__profile__picture_container}>
          <img src="https://res.cloudinary.com/juanito-om/image/upload/v1663878099/Fotos%C3%ADntesis/default_icons/power-button_fbqkic.png" alt="user_logo" />
        </picture>
      </section>
    </aside>
  )
}

export default Sidebar;
