import React from 'react';
import styles from '../../../styles/Posts.module.scss';

const Posts = ({ data }) => {
  return (
    <main className={styles.post__section_container}>
      {
        data?.map((post) => (
          <section className={styles.post__section__column} key={post._id}>
            <article>
              <section className={styles.post__card__writer}>
                <figure>
                  <img src={post?.writer?.avatar} alt="profile-foto" />
                </figure>
                <p>{post?.writer?.fullName}</p>
              </section>

              <section className={styles.post__card__title}>
                <h4>{post?.title}</h4>
              </section>

              <section className={styles.post__card__text}>
                <p>{post?.body}</p>
              </section>

              <section className={styles.post__card__date}>
                <p className={styles.date}>{post?.createdAt}</p>
              </section>
            </article>

            <div>
              <figure>
                <img src="" alt="" />
              </figure>
            </div>
          </section>
        ))
      }
      <hr className={styles.line} />
    </main>
  )
}

export default Posts;
