import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// Accepts a single recipe object and displays information on a card

const RecipeDisplayCard = ({ recipeObject }) => {
  if (recipeObject) {
    const recipe = recipeObject.recipes[0];
    return (
      <Card>
        {/* <Card.img variant='top' src={recipe.image} /> */}
        <Card.Img
          variant="top"
          src={"https://spoonacular.com/recipeImages/655525-556x370.jpg"}
        />
        <Card.Body>
          <Card.Title>{recipe.title}</Card.Title>
          <Card.Text dangerouslySetInnerHTML={{__html: recipe.summary}}/>
          <Button as="a" href={recipe.sourceUrl} variant="primary">
            Go Somewhere
          </Button>
        </Card.Body>
      </Card>
    );
  }
};

export default RecipeDisplayCard;
