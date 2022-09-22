import Profile from './Profile'
import Sidebar from './Sidebar';
import styles from '../../styles/Home.module.scss';

const HomePage = () => {
  return (
    <main className={styles.homepage__main_container}>
      <Sidebar />
      <Profile />
    </main>
  )
}

export default HomePage
