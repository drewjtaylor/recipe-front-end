import React, {useRef} from 'react';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const RecipeSearch = () => {
    const ingredient = useRef();
    const bannedIngredients = useRef();

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
                <Form.Control ref={ingredient} type='text' />
            </Form.Group>
            <Form.Group className='mb-2 col-6'>
                <Form.Label>Banned Ingredient</Form.Label>
                <Form.Control ref={bannedIngredients} type='text' />
            </Form.Group>
            <Button type='submit'>Submit</Button>
        </Form>
    </Container>
  )
}

export default RecipeSearch