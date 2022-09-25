import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { createPost } from '../../services/posts';
import styles from '../../styles/NewPost.module.scss';

const NewPost = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { target } = e;

      const formData = new FormData(target);
      const data = Object.fromEntries(formData);

      const result = await createPost(data);

      if(result?.Error) {
        throw new Error();
      }

      router.push('/home');
    } catch (error) {
      return console.log(error.mesage);
    }
  }

  return (
    <form className={styles.newpost__main_container} onSubmit={handleSubmit}>
      <section className={styles.newpost__buttons_container}>
        <div className={styles.newpost__cancel__buttons_container}>
          <button>
            Cancel
          </button>
        </div>

        <div className={styles.newpost__save__buttons_container}>
          <button type="submit">
            Save and post
          </button>
        </div>
      </section>

      <section className={styles.newpost__title_container}>
        <input type="text" name="title" id="title" placeholder="Title"  />
      </section>

      <section className={styles.newpost__text_container}>
        <textarea name="body" id="body" cols="92" rows="32" placeholder="Share something..." />
      </section>
    </form>
  )
}

export default NewPost;
