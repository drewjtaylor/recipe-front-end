import { useState } from 'react';
import example from '../example';

const API_KEY = process.env.REACT_APP_API_KEY;
const URL = `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}`;


const RandomRecipe = () => {
    const [returnedInfo, setReturnedInfo] = useState(example)

  return (
    <>
        <button onClick={() => {
            fetch(URL)
            .then(res => res.json())
            .then(data => setReturnedInfo(data))
        }}>Click here to get a random recipe</button>
        <h3>{returnedInfo.recipes ? returnedInfo.recipes[0].title : null}</h3>
        <p>Description: {returnedInfo.recipes ? returnedInfo['recipes'][0].summary : null}</p>
    
        {/* <div>
            Full returned info: {JSON.stringify(returnedInfo, null, 2)}
        </div> */}

        <div>Steps: {returnedInfo.recipes ?
            returnedInfo.recipes[0].analyzedInstructions[0].steps.map(step => {
                return <>
        <p>{step.number}: {step.step}</p>
    </>
})
            : null}
        </div>
    </>
  )
}

export default RandomRecipe