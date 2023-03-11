//working on original
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple"
];

//useStates to make controlled inputs

function FruitForm({ fruits }) {
  const [name, setName] = useState('');
  const [sweetness, setSweetness] = useState(1);
  const [color, setColor] = useState(COLORS[0]);
  const [seeds, setSeeds] = useState('yes');
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  //create array with all the different fruit names
  const fruitNames = fruits.map(fruit => fruit.name)

  //will run after every render
  useEffect(() => {
    //want to check the diff state variables after every render
    const validationErrors = [];
    if (name.length < 3) validationErrors.push('Name must be 3 or more characters.')
    if (name.length > 20) validationErrors.push('Name must be 20 characters or less.')
    if (fruitNames.includes(name)) validationErrors.push('Name already exists.')
    if (sweetness < 1 || sweetness > 10) validationErrors.push('Sweetness must be between 1 and 10.')
    setErrors(validationErrors);
    //dependencies are what variable changes will trigger the useEffect
  }, [name, sweetness])

  const handleSubmit = () => {
    const formValues = {
      name,
      sweetness,
      color,
      seeds
    }

    console.log(formValues);
    //redirect component will not work

    //return inside handleSubmit will give us a return for handleSubmit
    history.push('/')
  }

  return (
    <form
      className="fruit-form"
      onSubmit={handleSubmit}
    >
      <h2>Enter a Fruit</h2>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          // using event
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <p className="errors">
        {errors.map(error => (
          <li key={error}>{error}</li>
        ))}
      </p>
      <label>
        Select a Color
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          {COLORS.map(color => (
            <option
              key={color}
              value={color}
            >
              {color}
            </option>
          ))}
        </select>
      </label>
      <label>
        Sweetness
        <input
          type="number"
          name="sweetness"
          value={sweetness}
          onChange={(e) => setSweetness(e.target.value)}
        />
      </label>
      <label>
        {/* RADIO INPUTS ARE "LINKED" BY NAME PROPERTY */}
        {/* radio inputs also have a CHECKED property */}
        <input
          type="radio"
          value="no"
          name="seeds"
          onChange={(e) => setSeeds(e.target.value)}
          //if seeds is equal to 'no', we want this to be true, if not, we want it to be false
          checked={seeds === 'no'}
        />
        No Seeds
      </label>
      <label>
        <input
          type="radio"
          value="yes"
          name="seeds"
          onChange={(e) => setSeeds(e.target.value)}
          checked={seeds === 'yes'}
        />
        Seeds
      </label>
      <button
        type="submit"
        //disable submission in case errors arise
        disabled={errors.length > 0}
      >
        Submit Fruit
      </button>
    </form>
  );
}

export default FruitForm;


//----------------------------------------------------


//FIRST WIP

//import { useState } from "react";
// const COLORS = [
//   "red",
//   "orange",
//   "yellow",
//   "green",
//   "blue",
//   "purple"
// ];

// function FruitForm({ fruits }) {

//   const [formData, setFormData] = useState({
//     name: '',
//     sweetness: 1,
//     seeds: 'yes',
//     color: COLORS[0]
//   })

//   //create handler
//   const handleInputChange = (event) => {
//     const {name, value, type, checked} = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: type === 'checkbox' ? checked : value
//     }))
//   }

//   //create handleSubmit that will prevent default
//   const handleSubmit = (event) => {
//     event.preventDefault();
//   }

//   return (
//     <form
//       className="fruit-form"
//       onSubmit={handleSubmit}
//     >
//       <h2>Enter a Fruit</h2>
//       <label>
//         Name
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleInputChange}
//         />
//       </label>
//       <label>
//         Select a Color
//         <select
//           name='color'
//           value={formData.color}
//         >
//           {COLORS.map(color => (
//             <option
//               key={color}
//               value={color}
//             >
//               {color}
//             </option>
//           ))}
//         </select>
//       </label>
//       <label>
//         Sweetness
//         <input
//           type="number"
//           name="sweetness"
//           value={formData.sweetness}
//         />
//       </label>
//       <label>
//         <input
//           type="radio"
//           value="no"
//           name="seeds"
//         />
//         No Seeds
//       </label>
//       <label>
//         <input
//           type="radio"
//           value="yes"
//           name="seeds"
//         />
//         Seeds
//       </label>
//       <button
//         type="submit"
//       >
//         Submit Fruit
//       </button>
//     </form>
//   );
// }

// export default FruitForm;
