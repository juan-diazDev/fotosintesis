import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from '../../styles/Signup.module.scss';
import { login } from '../../services';
import { useRouter } from 'next/router';

const BoxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const LoginForm = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { target } = e;

      if (!target) {
        return console.log({ ERROR: 'No target'});
      }

      const formData = new FormData(target);
      const data = Object.fromEntries(formData);

      if (!data) {
        return console.log({ ERROR: 'No data'});
      }

      const { token, profile } = await login(data);
      const result = JSON.stringify(profile)


      localStorage.setItem('token', token);
      localStorage.setItem('profile', result);

      router.push('/')

    } catch (error) {
      console.log(error.mesage);
    }
  }

  return (
    <>
      <button className={styles.login__button} onClick={handleOpen}>Log-in</button>
      <Modal open={open} onClose={handleClose}>
          <Box sx={BoxStyle}>
            <main className={styles.signup_form__main_container}>
              <section className={styles.signup_form__title_container}>
                <h2>
                  Log-in!
                </h2>
              </section>
              <form onSubmit={handleSubmit}>

                <section className={styles.signup_form__label_container}>
                  <label htmlFor="email">
                    e-mail
                    <br />
                    <input type="email" name="email" id="email" placeholder="email" />
                  </label>
                </section>

                <section className={styles.signup_form__label_container}>
                  <label htmlFor="password">
                    Password
                    <br />
                    <input type="password" name="password" id="password" placeholder="password" />
                  </label>
                </section>

                <section className={styles.signup_form__button_container}>
                  <button type="submit">Continue</button>
                </section>

              </form>
            </main>
          </Box>
      </Modal>
    </>
  );
};

export default LoginForm;
