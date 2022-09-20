import Head from 'next/head'
import HomePage from '../../components/Home';

const Home = () => {
  return (
    <>
    <Head>
      <title>Home page</title>
      <meta name="description" content="Welcome to Bloggie" />
      <link rel="icon" href="https://res.cloudinary.com/juanito-om/image/upload/v1663682350/Fotos%C3%ADntesis/Logo/Negro_vyop2z.png" />
    </Head>

    <HomePage />
  </>
  )
}

export default Home;
