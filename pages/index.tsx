import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import CalltoAction from '../components/CalltoAction';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PostHistory from '../components/PostHistory';
import styles from '../styles/Home.module.scss';

const BASE_URL = process.env.NEXT_PUBLIC_LOCAL_URL;

export async function getServerSideProps() {
  const res = await fetch(`${BASE_URL}/api/blogpost/all`)
  const data = await res.json()

  return {
    props: { data }
  }
}

const Home = ({ data }) => {

  console.log('🚀 ~ data:', data);
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('token');

    if(token) {
      router.push('/home')
    }
  }, [router]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to Fotosíntesis</title>
        <meta name="description" content="Welcome to Bloggie" />
        <link rel="icon" href="https://res.cloudinary.com/juanito-om/image/upload/v1663682350/Fotos%C3%ADntesis/Logo/Negro_vyop2z.png" />
      </Head>

      <main className={styles.main}>
        <Header />
        <PostHistory post={data} />
        <CalltoAction />
        <Footer />
      </main>
    </div>
  )
}

export default Home
