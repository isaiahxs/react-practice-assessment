import { createContext, useState, useContext } from 'react';

export const FavFruitContext = createContext();
//custom hook
export const useFavFruit = () => useContext(FavFruitContext);
  //whenever we use useFavFruit, we will receive the object containing favFruitId and setFavFruitId

export default function FavFruitProvider(props) {
  const [favFruitId, setFavFruitId] = useState('1');

  return (
    <FavFruitContext.Provider
      value={{
        favFruitId,
        setFavFruitId
      }}
    >
      {props.children}
    </FavFruitContext.Provider>
  )
}
