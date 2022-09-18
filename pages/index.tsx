import type { NextPage } from 'next'
import Head from 'next/head'
import CalltoAction from '../components/CalltoAction'
import Header from '../components/Header'
import PostHistory from '../components/PostHistory'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to Bloggie</title>
        <meta name="description" content="Welcome to Bloggie" />
        <link rel="icon" href="https://res.cloudinary.com/juanito-om/image/upload/v1663440985/PP-assets/Iconografia-05_pbp67i.png" />
      </Head>

      <main className={styles.main}>
        <Header />
        <PostHistory />
        <CalltoAction />
      </main>
    </div>
  )
}

export default Home
