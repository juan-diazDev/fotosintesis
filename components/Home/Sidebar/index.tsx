import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import styles from '../../../styles/Sidebar.module.scss';

const Sidebar = () => {

  const User = useSelector(state => state?.user?.userDetail);

  return (
    <aside className={styles.sidebar__main_conatainer}>
      <Link href="/home">
        <section className={styles.sidebar__logo__main_container}>
          <picture className={styles.sidebar__logo_container}>
            <img src="https://res.cloudinary.com/juanito-om/image/upload/v1663964727/Fotos%C3%ADntesis/Logo/Negro_a8rslr.png" alt="logo" />
        </picture>

        <picture className={styles.sidebar__name_logo_container}>
          <img src="https://res.cloudinary.com/juanito-om/image/upload/v1663682370/Fotos%C3%ADntesis/Logo/Negro_sdubwt.png" alt="logo" />
        </picture>
      </section>
      </Link>

      <nav className={styles.sidebar__nav__buttons__main_container}>
        <section className={styles.sidebar__home__button__container}>
          <Link href="/home">
            <picture className={styles.sidebar__home__button__icon_container}>
              <img src="https://res.cloudinary.com/juanito-om/image/upload/v1664247303/Fotos%C3%ADntesis/Logo/001-home_j4numf.png" alt="home_icon" />
            </picture>
          </Link>
        </section>

        <section className={styles.sidebar__notification__button__container}>
          <picture className={styles.sidebar__notification__button__icon_container}>
            <img src="https://res.cloudinary.com/juanito-om/image/upload/v1664247303/Fotos%C3%ADntesis/Logo/009-bell_fkms09.png" alt="notification_icon" />
          </picture>
        </section>

        <section className={styles.sidebar__favs__button__container}>
          <picture className={styles.sidebar__favs__button__icon_container}>
            <img src="https://res.cloudinary.com/juanito-om/image/upload/v1664247303/Fotos%C3%ADntesis/Logo/008-heart_nrwujv.png" alt="favs_icon" />
          </picture>
        </section>

        <section className={styles.sidebar__mine__button__container}>
          <picture className={styles.sidebar__mine__button__icon_container}>
            <img src="https://res.cloudinary.com/juanito-om/image/upload/v1664247303/Fotos%C3%ADntesis/Logo/007-book_qlxhvq.png" alt="mine_logo" />
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
            <img src={User.avatar} alt="user_logo" />
          </picture>
        </Link>
      </section>
    </aside>
  )
}

export default Sidebar;
