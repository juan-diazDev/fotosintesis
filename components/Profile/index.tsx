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
      const user = await getUser();

      if(window !== 'undefined' && user.message) {
        localStorage.clear();
        router.push('/');
      }
      dispatch(setGetMeState(user));
    }

    userData();
  }, [dispatch, router]);

  return (
    <aside className={styles.profile__section__main_container}>
      <section className={styles.profile__avatar__main_container}>
        <figure className={styles.profile__avatar_container}>
          <img src={User.avatar} alt="avatar" />
        </figure>
      </section>

      <section className={styles.rofile__name_container}>
        <h2>
          {User.fullName}
        </h2>
        <p>@{User.username}</p>
      </section>

      <section className={styles.profile__short_container}>
        <div className={styles.profile__short_description}>
          <p>{User.shortDescription}</p>
        </div>
      </section>
    </aside>
  )
}

export default Profile;
