import React, { useEffect }from 'react';
import Head from 'next/head';
import HomePage from '../../components/Home';

const BASE_URL = process.env.NEXT_PUBLIC_LOCAL_URL;

export async function getServerSideProps() {
  const res = await fetch(`${BASE_URL}/api/blogpost/all`)
  const data = await res.json()

  return {
    props: { data }
  }
}

const Home = ({ data }) => {
  return (
    <>
    <Head>
      <title>Home page</title>
      <meta name="description" content="Welcome to Bloggie" />
      <link rel="icon" href="https://res.cloudinary.com/juanito-om/image/upload/v1663682350/Fotos%C3%ADntesis/Logo/Negro_vyop2z.png" />
    </Head>

    <HomePage data={data} />
  </>
  )
}

export default Home;
