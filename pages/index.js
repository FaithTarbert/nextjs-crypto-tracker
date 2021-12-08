import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const IndexPage = ({ favCoins }) => {
  console.log(favCoins)
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Coin API</h1>
        <p className={styles.title}>Login Auth Box</p>
        <Link href="/ninjas/">
          <a className={styles.btn}>See Coins List</a>
        </Link>
      </div>
    </>
  );
};

export default IndexPage;
