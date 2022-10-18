import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import RecipeDisplayCard from "./RecipeDisplayCard";

const SearchByIngredientForm = () => {
  const [ingredient, setIngredient] = useState("");
  const [recipesByIngredient, setRecipesByIngredient] = useState([]);

  const reactapiKey = process.env.REACT_APP_API_KEY;

  const testAPICall = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=${reactapiKey}`;
  const testAPIFunction = () => {
    fetch(testAPICall)
      .then((response) => response.json())
      .then((recipes) => {
        setRecipesByIngredient(recipes);
        console.log(recipes);
      })
      .catch((err) => console.log(err));
  };

  const updateIngredient = (e) => {
    setIngredient(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&number=3&apiKey=${reactapiKey}`);
    const recipes = await response.json();
    setRecipesByIngredient(recipes)
    
    console.log(`The ingredient submitted is: ${ingredient}`);
  };
  console.log(typeof recipesByIngredient);

  return (
    <>
      <hr />
      <h2>The ingredient to be submitted is: {ingredient}</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3">
          <Form.Label>Ingredient</Form.Label>
          <Form.Control
            id="ingredient"
            type="text"
            placeholder="Type an ingredient here and hit submit"
            onChange={(e) => updateIngredient(e)}
          />
          <Form.Text className="text-muted">
            Enter a single ingredient here then hit "Submit" to find recipies
            that have that ingredient
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <Button onClick={testAPIFunction}>Try the test, check the console</Button>

      {recipesByIngredient.map((recipe) => {
        return (
          <Col sm={6} key={recipe.title}>
            <RecipeDisplayCard recipeObject={{ recipes: [recipe] }} />
          </Col>
        );
      })}
      <Button onClick={() => setRecipesByIngredient([])}>Click to reset</Button>
    </>
  );
};

export default SearchByIngredientForm;
