import fruits from "./mockData/fruits.json";
import FruitsIndex from "./components/FruitsIndex";
import FruitForm from "./components/FruitForm";
import FavoriteFruit from "./components/FavoriteFruit";
import SetFavoriteFruit from "./components/SetFavoriteFruit";

function App() {
  return (
    <>
      <h1>Welcome to Fruits App</h1>
      {/* render FruitsIndex inside of App
        pass in array of fruits from mockdata as a prop called fruits */}
      <FruitsIndex fruits={fruits}/>
      <FruitForm fruits={fruits}/>
      <FavoriteFruit fruits={fruits}/>
      <SetFavoriteFruit fruits={fruits}/>
    </>
  );
}

export default App;
