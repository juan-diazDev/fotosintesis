import React from 'react';
import Head from 'next/head';
import EditProfile from '../../components/EditProfile';

const CompleteProfile = () => {
  return (
    <>
      <Head>
        <title>Complete your profile</title>
        <meta name="description" content="Complete your profile" />
        <link rel="icon" href="https://res.cloudinary.com/juanito-om/image/upload/v1663682350/Fotos%C3%ADntesis/Logo/Negro_vyop2z.png" />
      </Head>
      <EditProfile />
    </>
  )
}

export default CompleteProfile;
