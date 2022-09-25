import React from 'react';
import Head from 'next/head';
import Sidebar from '../../components/Home/Sidebar';
import Suggest from '../../components/Home/Suggest';
import NewPost from '../../components/NewPost';
import styles from '../../styles/NewPost.module.scss';

const Newpost = () => {
  return (
    <div className={styles.newpost__page__main_container}>
      <Head>
        <title>New post</title>
        <meta name="description" content="Create a new post" />
        <link rel="icon" href="https://res.cloudinary.com/juanito-om/image/upload/v1663682350/Fotos%C3%ADntesis/Logo/Negro_vyop2z.png" />
      </Head>

      <Sidebar />
      <NewPost />
      <Suggest />
    </div>
  )
}

export default Newpost;
