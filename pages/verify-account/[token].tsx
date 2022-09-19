import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { verify } from '../../services';
import styles from '../../styles/VerifyAccount.module.scss';

const VerifyAccount = () => {
  const router = useRouter();

  const { token } = router.query;

  useEffect (() =>{
    const verifyAccount = async () => {
      const { token: jwtoken, profile } = await verify(token);
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
          <img src="https://res.cloudinary.com/equipo-maravilla/image/upload/v1659662767/images/AlterLogo/AlterLogo_-_pink2_v3pefc.png" alt="Logo" />
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
