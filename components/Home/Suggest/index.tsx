import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../../../styles/Suggestion.module.scss';

const Suggest = () => {
  const router = useRouter();

  const handleLogout = () => {
    if(typeof window !== 'undefined') {
      localStorage.clear();

      router.push('/');
    }
  }
  return (
    <main className={styles.suggest__main_conatiner}>
      <section className={styles.suggest__searchbar_container}>
        <div>
          <input type="search" placeholder="Search" />
        </div>
      </section>

      <section className={styles.suggest__title_conatiner}>
        <div>
          <h2>Stay inspired!</h2>
        </div>
      </section>

      {/* <section className={styles.suggest__content_conatiner}></section> */}

      <section className={styles.suggest__frase_container}>
        <div>
          <h3>
          Fotosíntesis is a process where plants can make themselves grow, then be at the service of others. <br /><br /> This project was born in order to allow us to cultivate ourselves writing and serviing through sharing.
          </h3>
        </div>
      </section>

      <section className={styles.suggest__logout_button_container}>
        <button type="button" onClick={handleLogout}>
          Log-out
        </button>
      </section>
    </main>
  )
}

export default Suggest;
