import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'

// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await res.json();

//   return {
//     props: { ninjas: data }
//   }
// }

const Watchlist = ({ favCoins }) => {
    console.log(favCoins)

    return (
        <div>
            <h1>Favorite Coins</h1>

            {favCoins.map(coin => (

                <Link href={'/watchlist/' + coin.id} key={coin.id}>
                    <a className={styles.single}>
                        <h3>{coin.name}</h3>
                    </a>
                </Link>

            ))}
        </div>
    );
}

export default Watchlist;