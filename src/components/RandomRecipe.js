import { useState } from 'react';
import RecipeDisplayCard from './RecipeDisplayCard';
import example from '../example';
import baseUrl from '../util';


const RandomRecipe = () => {
    const [returnedInfo, setReturnedInfo] = useState(example)

    return (
        <>
        <button onClick={() => {
            fetch(`${baseUrl}/recipes/random`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReturnedInfo(data)})
            .catch(err => console.log(err))
        }}>Click here to get a random recipe</button>

        <RecipeDisplayCard recipesList={returnedInfo}/>

        <div>Steps: {returnedInfo.recipes ?
            returnedInfo.recipes[0].analyzedInstructions[0].steps.map(step => {
                return <p key={step.number}>{step.number}: {step.step}</p>
                })
            : null}
        </div>
    </>
  )
}

export default RandomRecipe