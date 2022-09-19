import Link from 'next/link';
import styles from '../../styles/CalltoAction.module.scss';

const CalltoAction = () => {
  return (
    <section className={styles.background}>
      <div className={styles.calltoAction__text_container}>
        <h2 className={styles.calltoAction__text}>
          Text explaining what is this section about,
          <br />
          and why we do it, may be
        </h2>
      </div>
      <Link href="/singup">
        <div className={styles.calltoAction__button_container}>
          <button className={styles.calltoAction__button}>
            Get started
          </button>
        </div>
      </Link>
    </section>
  )
}

export default CalltoAction
