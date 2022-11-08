import { useState } from 'react';
import RecipeDisplayCard from './RecipeDisplayCard';

const randomRecipeUrl = 'https://localhost:3443/recipes/random';


const RandomRecipe = () => {
    const [returnedInfo, setReturnedInfo] = useState({})

  return (
    <>
        <button onClick={() => {
            fetch(randomRecipeUrl)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReturnedInfo(data)})
            .catch(err => console.log(err))
        }}>Click here to get a random recipe</button>
        <p>returnedInfo.recipes is {(!!returnedInfo)}</p>
        <h3>Title: {returnedInfo.recipes ? returnedInfo.recipes[0].title : null}</h3>
        <p>Description: {returnedInfo.recipes ? returnedInfo['recipes'][0].summary : null}</p>
    
        <RecipeDisplayCard recipesList={returnedInfo?.recipes}/>

        <div>
            Full returned info: {JSON.stringify(returnedInfo, null, 2)}
        </div>

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