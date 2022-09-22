import Head from 'next/head'
import styles from '../../styles/VerifyAccount.module.scss';

const VerifyAccount = () => {
  return (
    <div className={styles.account_verification__main_container}>
      <Head>
        <title>See you soon!</title>
        <meta name="description" content="Welcome to Bloggie" />
        <link rel="icon" href="https://res.cloudinary.com/juanito-om/image/upload/v1663682350/Fotos%C3%ADntesis/Logo/Negro_vyop2z.png" />
      </Head>

      <div className={styles.account_verification__message_container}>
        <picture className={styles.account_verification__image_container}>
          <img src="https://res.cloudinary.com/juanito-om/image/upload/v1663682350/Fotos%C3%ADntesis/Logo/Negro_vyop2z.png" alt="Logo" />
        </picture>
        <h3>Check your e-mail</h3>
      </div>
    </div>
  )
}

export default VerifyAccount;
