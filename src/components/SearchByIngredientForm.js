import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SearchByIngredientForm = () => {
  return (
    <>
        <hr />
        <h2>SearchByIngredientForm</h2>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Ingredient</Form.Label>
            <Form.Control type="ingredient" placeholder="Ingredient" />
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