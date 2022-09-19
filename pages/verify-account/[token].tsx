import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { verify } from '../../services';
import styles from '../../styles/VerifyAccount.module.scss';

const VerifyAccount = () => {
  const router = useRouter();

  const { token } = router.query;

  useEffect (() =>{
    const verifyAccount = async () => {
      const { token: jwtoken } = await verify(token);
      console.log(jwtoken);
      if (jwtoken) {
        localStorage.setItem('token', jwtoken);
      }
    };

    verifyAccount();
  }, []);
  return (
    <div className={styles.account_verification__main_container}>
      <div className={styles.account_verification__message_container}>
        <div className={styles.account_verification__image_container}>
          <img src="https://res.cloudinary.com/juanito-om/image/upload/v1663440985/PP-assets/Iconografia-05_pbp67i.png" alt="Logo" />
        </div>
        {
          token
            ? <h3>Your account is active!</h3>
            : <h3>Check your email!</h3>
        }
      </div>
    </div>
  )
}

export default VerifyAccount;
