import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const SearchByIngredientForm = () => {
    const [ingredient, setIngredient] = useState('');
  
  
    return (
    <>
        <hr />
        <h2>SearchByIngredientForm</h2>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Ingredient</Form.Label>
            <Form.Control type="ingredient" placeholder="Type an ingredient here and hit submit" />
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