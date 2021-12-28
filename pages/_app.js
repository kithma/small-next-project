import Layout from '../components/layouts/Layout';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Head>
      <title>Events</title>
    </Head>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
