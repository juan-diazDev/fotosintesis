import Profile from './Profile'
import Sidebar from './Sidebar';
import styles from '../../styles/Home.module.scss';
import Posts from './Post';

const HomePage = () => {
  return (
    <main className={styles.homepage__main_container}>
      <Sidebar />
      <Posts />
      <Profile />
    </main>
  )
}

export default HomePage
