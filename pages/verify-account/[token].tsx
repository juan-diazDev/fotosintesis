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

  }, [tokencito]);

  return (
    <div className={styles.account_verification__main_container}>
      <div className={styles.account_verification__message_container}>
        <div className={styles.account_verification__image_container}>
          <img src="https://res.cloudinary.com/juanito-om/image/upload/v1663440985/PP-assets/Iconografia-05_pbp67i.png" alt="Logo" />
        </div>
        <h3>Your account is active!</h3>
      </div>
    </div>
  )
}

export default VerifyAccount;
