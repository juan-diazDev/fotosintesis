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
          <h2>Suggestions!</h2>
        </div>
      </section>

      <section className={styles.suggest__content_conatiner}></section>

      <section className={styles.suggest__frase_container}>
        <div>
          <h3>
            Serve, Love, Give,
            purify, meditate, realize
          </h3>
        </div>
      </section>

      <section className={styles.suggest__media_container}>
        <div>
          <img src="" alt="" />
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
