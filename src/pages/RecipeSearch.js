import React, {useRef} from 'react';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const RecipeSearch = () => {
    const ingredient = useRef();
    const bannedIngredients = useRef();
    const numberOfResults = useRef();
    const typeOfDiet = useRef();
    const typeOfIntolerances = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ingredient.current);
    console.log(bannedIngredients.current);
  }
  
  
    return (
    <Container>
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-2 col-6'>
                <Form.Label>Required Ingredient</Form.Label>
                <Form.Control ref={ingredient} type='text' placeholder='Enter one ingredient you MUST have in your recipe' />
            </Form.Group>
            <Form.Group className='mb-2 col-6'>
                <Form.Label>Banned Ingredient</Form.Label>
                <Form.Control ref={bannedIngredients} type='text' placeholder='Enter one ingredient to ban'/>
            </Form.Group>
            <Form.Group className='mb-2 col-6'>
                <Form.Label>Number of results</Form.Label>
                <Form.Control ref={numberOfResults} type='text' placeholder='Leave blank for 4 recipes'/>
            </Form.Group>
            <Form.Group className='mb-2 col-6'>
                <Form.Label>Type of Diet (optional)</Form.Label>
                <Form.Select ref={typeOfDiet} area-label="Choose a type of diet">
                    <option>Select intolerances</option>
                    <option value='Gluten Free'>Gluten Free</option>
                    <option value='Ketogenic'>Ketogenic</option>
                    <option value='Vegetarian'>Vegetarian</option>
                    <option value='Lacto-Vegetarian'>Lacto-Vegetarian</option>
                    <option value='Ovo-Vegetarian'>Ovo-Vegetarian</option>
                    <option value='Vegan'>Vegan</option>
                    <option value='Pescetarian'>Pescetarian</option>
                    <option value='Paleo'>Paleo</option>
                    <option value='Primal'>Primal</option>
                    <option value='Whole30'>Whole30</option>
                </Form.Select>
            </Form.Group>
                <Form.Label>Intolerances (switch "on" to ban from results)</Form.Label>

                {['Dairy', 'Egg', 'Gluten', 'Grain', 'Peanut',
                  'Seafood', 'Sesame', 'Shellfish', 'Soy',
                  'Sulfite', 'TreeNut', 'Wheat'].map(intolerance => {
                    return <div key={intolerance} className='mb-1'>
                        <Form.Check
                            type='switch'
                            id={intolerance}
                            label={intolerance}
                        />
                    </div>
                })}

            <Button type='submit'>Submit</Button>
        </Form>
    </Container>
  )
}

export default RecipeSearch