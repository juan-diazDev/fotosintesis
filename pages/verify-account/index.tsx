import styles from '../../styles/VerifyAccount.module.scss';

const VerifyAccount = () => {
  return (
    <div className={styles.account_verification__main_container}>
      <div className={styles.account_verification__message_container}>
        <div className={styles.account_verification__image_container}>
          <img src="https://res.cloudinary.com/juanito-om/image/upload/v1663440985/PP-assets/Iconografia-05_pbp67i.png" alt="Logo" />
        </div>
        <h3>Check your e-mail</h3>
      </div>
    </div>
  )
}

export default VerifyAccount;
