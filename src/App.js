import fruits from "./mockData/fruits.json";
import FruitsIndex from "./components/FruitsIndex";

function App() {
  return (
    <>
      <h1>Welcome to Fruits App</h1>
      {/* render FruitsIndex inside of App
        pass in array of fruits from mockdata as a prop called fruits */}
      <FruitsIndex fruits={fruits}/>
    </>
  );
}

export default App;
