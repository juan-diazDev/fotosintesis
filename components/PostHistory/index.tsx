import styles from '../../styles/PostHistory.module.scss';

const PostHistory = ({ post }) => {
  return (
    <main className={styles.post__section_container}>
      <div>
        <h2>Recently in Fotosínstesis</h2>
      </div>
      <section className={styles.post__section__column}>
        {
          post?.map((posts) => (
            <article key={posts?._id}>
              <section className={styles.post__card__writer}>
                <figure>
                  <img src="" alt="" />
                </figure>
                <p>{posts?.writer}</p>
              </section>

              <section className={styles.post__card__title}>
                <h4>{posts?.title}</h4>
              </section>

              <section className={styles.post__card__data}>
                <p className={styles.date}>{posts?.createdAt}</p>
              </section>
            </article>
          ))
        }
      </section>
    </main>
  )
}

export default PostHistory;
