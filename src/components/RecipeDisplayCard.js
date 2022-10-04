import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from "react-bootstrap/Card";
import { Markup } from "interweave";

// Accepts a single recipe object and displays information on a card

const RecipeDisplayCard = ({ recipeObject }) => {
    if (recipeObject === {}) {return null} else
  
  
    if (recipeObject) {
    const recipe = recipeObject.recipes[0];
    
    return ( <>
        <Row className="justify-content-center">
            <Col xs={8}>
                <Card>
                    <Card.Img
                    variant="top"
                    src={"https://spoonacular.com/recipeImages/655525-556x370.jpg"}
                    />
                    <Card.Body>
                    <Card.Title>{recipe.title}</Card.Title>
                    <Card.Text><Markup content={recipe.summary} /></Card.Text>
                    <Button as="a" href={recipe.sourceUrl} variant="primary">
                        Go Somewhere
                    </Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </>
    );
  }
};

export default RecipeDisplayCard;
