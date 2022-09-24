import React, { useEffect } from 'react';
import { getUser } from '../../services/user';
import { useSelector, useDispatch } from 'react-redux';
import { setGetMeState } from '../../feature/userSlice';
import styles from '../../styles/Profile.module.scss';
import { useRouter } from 'next/router';

const Profile = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const User = useSelector(state => state?.user?.userDetail);

  useEffect(() => {
    const userData = async () => {
      const user = await getUser()
      dispatch(setGetMeState(user))
    }

    userData();
  }, []);

  const {

  } = User;

  return (
    <aside className={styles.home__aside__profile__main_container}>

      <section className={styles.home__aside__profile__avatar__main_container}>
        <figure className={styles.home__aside__profile__avatar_container}>
          <img src={User.avatar} alt="avatar" />
        </figure>
      </section>

      <section className={styles.home__aside__profile__name_container}>
        <h2>
          {User.firstName} {User.lastName}
        </h2>
        <p>@{User.username}</p>
      </section>

      <section className={styles.home__aside__profile__short_container}>
        <div className={styles.home__aside__profile__short_description}>
          <p>{User.shortDescription}</p>
        </div>
      </section>

      <section className={styles.home__aside__profile__button_container}>
        <button type="button" onClick={() => router.push('/profile')}>
          Details
        </button>
      </section>
    </aside>
  )
}

export default Profile;
