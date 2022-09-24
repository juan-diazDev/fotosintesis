import React from 'react'
import { useSelector } from 'react-redux';
import Sidebar from '../Home/Sidebar';
import styles from '../../styles/FullProfile.module.scss';

const FullProfile = () => {
  const user = useSelector(state => state.user.userDetail)
  console.log('🚀 ~ file: index.tsx ~ line 6 ~ FullProfile ~ user', user);
  return (
    <main className={styles.fullProfile__main_container}>
      <Sidebar />
      <div className={styles.fullProfile__info_container}>
        fulltime
      </div>
    </main>
  )
}

export default FullProfile;
