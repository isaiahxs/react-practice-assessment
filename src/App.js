import fruits from "./mockData/fruits.json";
import FruitsIndex from "./components/FruitsIndex";
import FruitForm from "./components/FruitForm";
import FavoriteFruit from "./components/FavoriteFruit";
import SetFavoriteFruit from "./components/SetFavoriteFruit";
import FruitShow from './components/FruitShow';
import Navigation from './components/Navigation';
import { Switch, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Welcome to Fruits App</h1>

      <Navigation />

      {/* render FruitsIndex inside of App
        pass in array of fruits from mockdata as a prop called fruits */}
        {/* need to use Switch for the "page not found" */}
        <Switch>
          {/* this will catch links redirecting routes to this path */}
          <Route exact path='/'>
            <FruitsIndex fruits={fruits}/>
          </Route>

          <Route path='/fruits/new'>
            <FruitForm fruits={fruits}/>
          </Route>

          <Route path='/fav-fruit'>
            <FavoriteFruit fruits={fruits}/>
          </Route>

          <Route path='/set-fav-fruit'>
            <SetFavoriteFruit fruits={fruits}/>
          </Route>

          <Route path='/fruits/:fruitId'>
            <FruitShow />
          </Route>

          {/* this will catch everything else */}
          <Route path='/'>
            <p>Page Not Found</p>
          </Route>
        </Switch>
    </>
  );
}

export default App;
