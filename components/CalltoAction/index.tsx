import React from 'react';
import SignupForm from '../SignupModal';
import styles from '../../styles/CalltoAction.module.scss';

const CalltoAction = () => {
  return (
    <section className={styles.background}>
      <div className={styles.calltoAction__text_container}>
        <h2 className={styles.calltoAction__text}>
          You are about to start your journey
          <br />
          as a writer!
        </h2>
      </div>
      <div className={styles.calltoAction__button_container}>
        <SignupForm />
      </div>
    </section>
  )
}

export default CalltoAction
