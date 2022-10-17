import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const SearchByIngredientForm = () => {
    const [ingredient, setIngredient] = useState('');
  
    const updateIngredient = e => {
        setIngredient(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(`The ingredient submitted is: ${ingredient}`)
    }
  
    return (
    <>
        <hr />
        <h2>SearchByIngredientForm</h2>
        <Form onSubmit={e => handleSubmit(e)}>
            <Form.Group className="mb-3">
            <Form.Label>Ingredient</Form.Label>
            <Form.Control id="ingredient" type="text" placeholder="Type an ingredient here and hit submit" onChange={e => updateIngredient(e)}/>
            <Form.Text className="text-muted">
            Enter a single ingredient here then hit "Submit" to find recipies that have that ingredient
            </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
    </>
  )
}

export default SearchByIngredientForm