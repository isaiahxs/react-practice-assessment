import { useParams } from 'react-router-dom';

function FruitShow({fruits}) {

  //from the url, we know that fruitId is a string
  const {fruitId} = useParams();

  //to get fruit's name
    ///go thru array of objects
  const {name, color, sweetness, seeds} = fruits.find(fruit => fruit.id === fruitId)

  return (
    <div className='fruit-show'>
      <h2>
        {name}
        {/* name of the fruit with id of 1 */}
      </h2>
      <ul>
        <li>{color}</li>
        <li>{sweetness}</li>
        <li>{seeds && seeds}</li>
      </ul>



    </div>
  )
}

export default FruitShow;
