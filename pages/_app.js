import Layout from '../comps/Layout'
import '../styles/globals.css'
import { useState } from 'react';

const CustomApp = ({ Component, pageProps }) => {

  //pass in the custom props we want available in all components/pages
  //empty fav coins state array
  const [favCoins, setFavCoins] = useState([])
  //add coin from id page to favCoins array
  const addCoin = (coin) => setFavCoins((currentCoins) => {
    return [...currentCoins, coin]
  })

  return (
    <Layout>
      <Component
        {...pageProps}
        favCoins={favCoins}
        addCoin={addCoin}
      />
    </Layout>
  );
};

export default CustomApp;
