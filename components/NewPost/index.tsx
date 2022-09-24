import React from 'react';
import styles from '../../styles/NewPost.module.scss';

const NewPost = () => {
  return (
    <main className={styles.newpost__main_container}>
      <section className={styles.newpost__title_container}>
        <input type="text" name="title" id="title" placeholder="Title"/>
      </section>

      <section className={styles.newpost__text_container}>
        <textarea name="body" id="body" cols="92" rows="32" placeholder="Share something..." />
      </section>
    </main>
  )
}

export default NewPost;
