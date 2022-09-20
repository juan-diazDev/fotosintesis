import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { verify } from '../../services';
import styles from '../../styles/VerifyAccount.module.scss';

const VerifyAccount = () => {
  const router = useRouter();

  const { token } = router?.query;

  useEffect (() =>{
    const verifyAccount = async () => {
      const result = await verify(token);

      if(!result) {
        return console.log({ ERROR: 'No verify account' })
      }

      console.log(result)

      if (token) {
        localStorage.setItem('token', result?.token);
        localStorage.setItem('profile', result?.profile);
      }
    };

    // setTimeout(() => {
    //   router.push('/');
    // }, 800);
    if(token) {
      verifyAccount();
    }
  }, [token]);
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
