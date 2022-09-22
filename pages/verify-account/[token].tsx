import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { verify } from '../../services';
import styles from '../../styles/VerifyAccount.module.scss';

const VerifyAccount = () => {
  const router = useRouter();

  const tokencito = router?.query?.token;

  useEffect (() => {
    const verifyAccount = async () => {
      if (tokencito) {
        const { token, profile} = await verify(tokencito);
        const result = JSON.stringify(profile)

        if(!result) {
          return console.log({ ERROR: 'No verify account' })
        }

        if (tokencito) {
          localStorage.setItem('token', token);
          localStorage.setItem('profile', result);
        }
      }
    }

    setTimeout(() => {
      router.push('/home');
    }, 800);

    verifyAccount();

  }, [tokencito, router]);

  return (
    <div className={styles.account_verification__main_container}>
      <Head>
        <title>Verifying...</title>
        <meta name="description" content="Welcome to Bloggie" />
        <link rel="icon" href="https://res.cloudinary.com/juanito-om/image/upload/v1663682350/Fotos%C3%ADntesis/Logo/Negro_vyop2z.png" />
      </Head>
      <div className={styles.account_verification__message_container}>
        <picture className={styles.account_verification__image_container}>
          <img src="https://res.cloudinary.com/juanito-om/image/upload/v1663682350/Fotos%C3%ADntesis/Logo/Negro_vyop2z.png" alt="Logo" />
        </picture>
        <h3>Your account is active!</h3>
      </div>
    </div>
  )
}

export default VerifyAccount;
