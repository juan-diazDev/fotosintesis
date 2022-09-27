/* eslint-disable react/no-unescaped-entities */

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { getUser, updateUser } from '../../services/user';
import { setGetMeState } from '../../feature/userSlice';
import uploadFile from '../../services/upload';
import styles from '../../styles/EditProfile.module.scss';

function EditProfile() {
  const [image, setImage] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const User = useSelector(state => state?.user?.userDetail);

  const id = User._id;

  const uploadImage = async (e) => {
    const files = e.target.files;

    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "my-uploads");

    const file = await uploadFile(data);
    setImage(file?.secure_url);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { target } = e;

      const formData = new FormData(target);
      const data = Object.fromEntries(formData);

      data.avatar = image;

      const updatedUser = await updateUser({ id, ...data });
      dispatch(setGetMeState(updatedUser));

      if(updatedUser?.message) {
        return alert('error')
      }

      router.push('/profile');
    } catch (error) {
      return new Error(error.mesage);
    }
  }

  useEffect(() => {
    const userData = async () => {
      const user = await getUser();

      if(window !== 'undefined' && user.message) {
        localStorage.clear();
        router.push('/');
      }
      dispatch(setGetMeState(user));
    }

    userData();
  }, [dispatch, router]);

  return (
    <main className={styles.editProfile_form__main_container}>
      {/* <figure className={styles.edit_profile_image_container}>
        <img src="https://res.cloudinary.com/juanito-om/image/upload/v1664165199/Fotos%C3%ADntesis/386714176-removebg-preview_lrumnc.png" alt="decoration" />
      </figure> */}

      <section className={styles.editProfile_form__title_container}>
        <h2>
          Tell us more about you
        </h2>
      </section>
      <form onSubmit={handleSubmit}>
        <section className={styles.editProfile_form__avatar_container}>
          <label htmlFor="avatar">
            Avatar
            <br />
            <input
              type="file"
              name="avatar"
              id="avatar"
              placeholder="avatar"
              onChange={uploadImage}
              required />
          </label>
          {
            image !== ""
              ? (
                <figure className={styles.new__profile__picture_container}>
                  <img src={image} alt="New profile picture" />
                </figure>
              )
              : null
          }
        </section>

        <section className={styles.editProfile_form__label_container}>
          <label htmlFor="fullName">
          What´s your name?
            <br />
            <input type="text" name="fullName"  placeholder="Full name" required />
          </label>
        </section>

        <section className={styles.editProfile_form__label_container}>
          <label htmlFor="description">
            Short description
            <br />
            <input type="text" name="shortDescription"  placeholder="Write here..." required />
          </label>
        </section>


        <section className={styles.editProfile_form__label_container}>
          <label htmlFor="description">
            Tell us your story
            <br />
            <textarea placeholder="Let us know you" name="description" id="description" cols="37" rows="10" />
          </label>
        </section>

        <section className={styles.editProfile_form__button_container}>
          <button type="submit">Let's see you</button>
        </section>

      </form>
    </main>
  );
}

export default EditProfile;
