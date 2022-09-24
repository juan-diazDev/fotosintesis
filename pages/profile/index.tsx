import React from 'react';
import Sidebar from '../../components/Home/Sidebar';
import Suggest from '../../components/Home/Suggest';
import Profile from '../../components/Profile';
import styles from '../../styles/Profile.module.scss';

const profile = () => {
  return (
    <main className={styles.profile__main_container}>
      <Sidebar />
      <Profile />
      <Suggest />
    </main>
  )
}

export default profile
