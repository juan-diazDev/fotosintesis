import React from 'react';
import styles from '../../../styles/Posts.module.scss';

const Posts = () => {
  return (
    <main className={styles.post__section_container}>
      <section className={styles.post__section__column}>
        <article>
          <section className={styles.post__card__writer}>
            <figure>
              <img src="" alt="" />
            </figure>
            <p>Ella Ortiz</p>
          </section>

          <section className={styles.post__card__title}>
            <h4>Este va a ser el título del POst que viene en esta seción.</h4>
          </section>

          <section className={styles.post__card__data}>
            <p className={styles.date}>Oct 17</p>
          </section>
        </article>

        <div>
          <figure>
            <img src="" alt="" />
          </figure>
        </div>
      </section>

    <hr className={styles.line} />
    </main>
  )
}

export default Posts;
