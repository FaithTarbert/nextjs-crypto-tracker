import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
// import { useContext } from 'react';
// import ClickContext from '../contexts/click'
// import { useState } from 'react';

// export default function Home() {
//   return (
//     <>
// <Head>
//   <title>Ninja List | Home</title>
//   <meta name="keywords" content="ninjas" />
// </Head>
// <div>
//   <h1 className={styles.title}>Coin API</h1>
//   <p className={styles.title}>Login Auth Box</p>
//   <Link href="/ninjas/">
//     <a className={styles.btn}>See Coins List</a>
//   </Link>
// </div>
//     </>
//   )
// }

// const IndexPage = ({ clickAmount, increment }) => {
// const [clickAmount, setClickAmount] = useState(0);
// const increment = () => setClickAmount((amount) => amount + 1);
// const [clickAmount, increment] = useContext(ClickContext);

//   return (
//     <>
//       <Head>
//         <title>Ninja List | Home</title>
//         <meta name="keywords" content="ninjas" />
//       </Head>
//       <div>
//         <h1 className={styles.title}>Coin API</h1>
//         <p className={styles.title}>Login Auth Box</p>
//         <Link href="/ninjas/">
//           <a className={styles.btn}>See Coins List</a>
//         </Link>
//       </div>
//       <div>
//         You clicked the button <strong>{clickAmount}</strong> times.
//         <button onClick={increment}>
//           Click me!
//         </button>
//       </div>
//     </>
//   );
// };

// export default IndexPage;
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
