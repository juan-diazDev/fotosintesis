import React from 'react';
import Sidebar from '../../components/Home/Sidebar';
import Suggest from '../../components/Home/Suggest';
import NewPost from '../../components/NewPost';
import styles from '../../styles/NewPost.module.scss';

const Newpost = () => {
  return (
    <div className={styles.newpost__page__main_container}>
      <Sidebar />
      <NewPost />
      <Suggest />
    </div>
  )
}

export default Newpost;
