import styles from '../../styles/PostHistory.module.scss';

const PostHistory = () => {
  return (
    <main className={styles.post__section_container}>
      <div>
        <h2>Recently in Bloggie</h2>
      </div>
      <section className={styles.post__section__column}>
        <article>
          <section className={styles.post__card__writer}>
            <figure>
              <img src="" alt="" />
            </figure>
            <p>This is the writer</p>
          </section>
          <section className={styles.post__card__title}>
            <h3>This is the post title y algo más de contenido</h3>
          </section>
          <section className={styles.post__card__data}>
            <p className={styles.date}>Sep 6</p>
          </section>
        </article>
        <article>
          <section className={styles.post__card__writer}>
            <figure>
              <img src="" alt="" />
            </figure>
            <p>This is the writer</p>
          </section>
          <section className={styles.post__card__title}>
            <h3>This is the post title y algo más de contenido</h3>
          </section>
          <section className={styles.post__card__data}>
            <p className={styles.date}>Sep 6</p>
          </section>
        </article>
        <article>
          <section className={styles.post__card__writer}>
            <figure>
              <img src="" alt="" />
            </figure>
            <p>This is the writer</p>
          </section>
          <section className={styles.post__card__title}>
            <h3>This is the post title y algo más de contenido</h3>
          </section>
          <section className={styles.post__card__data}>
            <p className={styles.date}>Sep 6</p>
          </section>
        </article>
        <article>
          <section className={styles.post__card__writer}>
            <figure>
              <img src="" alt="" />
            </figure>
            <p>This is the writer</p>
          </section>
          <section className={styles.post__card__title}>
            <h3>This is the post title y algo más de contenido</h3>
          </section>
          <section className={styles.post__card__data}>
            <p className={styles.date}>Sep 6</p>
          </section>
        </article>
        <article>
          <section className={styles.post__card__writer}>
            <figure>
              <img src="" alt="" />
            </figure>
            <p>This is the writer</p>
          </section>
          <section className={styles.post__card__title}>
            <h3>This is the post title y algo más de contenido</h3>
          </section>
          <section className={styles.post__card__data}>
            <p className={styles.date}>Sep 6</p>
          </section>
        </article>
        <article>
          <section className={styles.post__card__writer}>
            <figure>
              <img src="" alt="" />
            </figure>
            <p>This is the writer</p>
          </section>
          <section className={styles.post__card__title}>
            <h3>This is the post title y algo más de contenido </h3>
          </section>
          <section className={styles.post__card__data}>
            <p className={styles.date}>Sep 6</p>
          </section>
        </article>
      </section>
    </main>
  )
}

export default PostHistory;
