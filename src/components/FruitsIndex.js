import { Link } from "react-router-dom";

//i'm assuming i'll need to put fruits as a prop in the parentheses?
function FruitsIndex(props) {
  return (
    <div className='fruits-index'>
      <h2>Fruits Index</h2>
      {/* render links to the fruit show pages for ALL of the fruits passed in as props */}
      {/* each link should be formatted as /fruits/:fruitId with :fruitId replaced with a fruit's id */}
      {/* the visual content of each link should be that fruit's name */}
      {props.fruits.map((fruit) => (
        <div key={fruit.id}>
          <Link to={`/fruits/${fruit.id}`}>{fruit.name}</Link>
        </div>
      ))}

    </div>
  )
}

export default FruitsIndex;
