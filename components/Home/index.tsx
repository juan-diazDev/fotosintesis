import React from 'react';
import Sidebar from './Sidebar';
import styles from '../../styles/Home.module.scss';
import Posts from './Post';
import Suggest from './Suggest';

const HomePage = () => {
  return (
    <main className={styles.homepage__main_container}>
      <Sidebar />
      <Posts />
      <Suggest />
    </main>
  )
}

export default HomePage
