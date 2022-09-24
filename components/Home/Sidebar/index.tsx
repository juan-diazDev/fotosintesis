import React from 'react';
import Link from 'next/link';
import styles from '../../../styles/Sidebar.module.scss';

const Sidebar = () => {

  let avatar = null;
  if (typeof window !== 'undefined') {
    const result = localStorage.getItem('profile');
    const profile = JSON.parse(result);

    avatar = profile?.avatar;
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
        </section>

        <section className={styles.sidebar__notification__button__container}>
          <picture className={styles.sidebar__notification__button__icon_container}>
            <img src="https://res.cloudinary.com/juanito-om/image/upload/v1663685006/Fotos%C3%ADntesis/default_icons/bell_1_vjtqeb.png" alt="notification_icon" />
          </picture>
        </section>

        <section className={styles.sidebar__favs__button__container}>
          <picture className={styles.sidebar__favs__button__icon_container}>
            <img src="https://res.cloudinary.com/juanito-om/image/upload/v1663972500/Fotos%C3%ADntesis/default_icons/favourite_ylsubb.png" alt="favs_icon" />
          </picture>
        </section>

        <section className={styles.sidebar__mine__button__container}>
          <picture className={styles.sidebar__mine__button__icon_container}>
            <img src="https://res.cloudinary.com/juanito-om/image/upload/v1663685526/Fotos%C3%ADntesis/default_icons/to-do-list_pf4fid.png" alt="mine_logo" />
          </picture>
        </section>

        <hr className={styles.sidebar__separation__line} />

        <section className={styles.sidebar__new__button__container}>
          <Link href="/create">
            <picture className={styles.sidebar__new__button__icon_container}>
              <img src="https://res.cloudinary.com/juanito-om/image/upload/v1663974857/Fotos%C3%ADntesis/Logo/image_6_mo7yzd.png" alt="new_logo" />
            </picture>
          </Link>
        </section>
      </nav>

      <section className={styles.sidebar__profile__picture_main_container}>
        <Link href="/profile">
          <picture className={styles.sidebar__profile__picture_container}>
            <img src={avatar} alt="user_logo" />
          </picture>
        </Link>
      </section>
    </aside>
  )
}

export default Sidebar;
