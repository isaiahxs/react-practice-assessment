import { useFavFruit } from "../context/FavFruitContext";

const SetFavoriteFruit = ({ fruits }) => {

  const {favFruitId, setFavFruitId} = useFavFruit();

  return (
    <div className="set-fav-fruit">
      <h2>Select your Favorite Fruit</h2>
      <label>
        <select
        //onChange of this one should use the setFavFruitId function from the context
        onChange={(e) => setFavFruitId(e.target.value)}
        //value is the state variable from the context
          //but when we change the option, we're changing the state variable
          //since we're changing the context, it will then render the updated value
        value={favFruitId}
        >
          {fruits.map(fruit => (
            <option
              key={fruit.id}
              value={fruit.id}
            >
              {fruit.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default SetFavoriteFruit;
