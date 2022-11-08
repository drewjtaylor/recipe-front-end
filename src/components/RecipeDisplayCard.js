import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from "react-bootstrap/Card";
import { Markup } from "interweave";

// Accepts a single recipe object and displays information on a card

const RecipeDisplayCard = ({ recipesList }) => {

    const recipe = recipesList?.recipes[0];

    if (recipesList) return ( <>
        <Row className="justify-content-center">
            <Col xs={8}>
                <Card className="my-2 shadow rounded">
                    <Card.Img
                    variant="top"
                    src={recipe.image}
                    alt={recipe.title}
                    />
                    <Card.Body>
                    <Card.Title>{recipe.title}</Card.Title>
                    <Card.Text><Markup content={recipe.summary} /></Card.Text>
                    <Button as="a" href={recipe.sourceUrl} variant="primary">
                        Visit the creator of this recipe here
                    </Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </>);
  
};

export default RecipeDisplayCard;
