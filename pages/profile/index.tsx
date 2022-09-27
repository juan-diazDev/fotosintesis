import React from 'react';
import Head from 'next/head';
import Sidebar from '../../components/Home/Sidebar';
import Suggest from '../../components/Home/Suggest';
import Profile from '../../components/Profile';
import styles from '../../styles/Profile.module.scss';

const profile = () => {
  return (
    <main className={styles.profile__main_container}>
      <Head>
        <title>This is me</title>
        <meta name="description" content="See your profile" />
        <link rel="icon" href="https://res.cloudinary.com/juanito-om/image/upload/v1663682350/Fotos%C3%ADntesis/Logo/Negro_vyop2z.png" />
      </Head>

      <Sidebar />
      <Profile />
      <Suggest />
    </main>
  )
}

export default profile
