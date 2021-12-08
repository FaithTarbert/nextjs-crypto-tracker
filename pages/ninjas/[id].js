import React from "react";
import { useState } from "react";
import { useRouter } from 'next/router'

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map(ninja => {
    return {
      params: { id: ninja.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();

  return {
    props: { ninja: data }
  }
}

const Details = ({ ninja, favCoins, addCoin }) => {
  const router = useRouter()
  console.log(favCoins)

  //keep favorite button in state of true/false
  const [isFavorite, setIsFavorite] = useState(false);

  //resets add to fav button, adds coin to array, sends user back to list page
  const handleClose = () => {
    setIsFavorite(false)
    addCoin(ninja.name)
    router.push("/ninjas")
  }

  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
      {/* {show or hide buttons according to setting coin to watchlist} */}
      {!isFavorite && (
        //if isFavorite is false, then then show button to add (default)
        <div>
          {/*change button state to true, hiding elements*/}
          <button onClick={() => setIsFavorite(true)}>Add To Favorites</button>
        </div>)}
      {isFavorite && (
        //if isFavorite is true, then text is displayed
        <div>
          <p>Coin Is In Your Watchlist</p>
          <button onClick={handleClose}>Back To List</button>
        </div>)}
    </div>
  );
}

export default Details;