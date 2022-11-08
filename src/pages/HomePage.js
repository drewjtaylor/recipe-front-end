import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RandomRecipe from '../components/RandomRecipe';

const HomePage = () => {
  return ( <>
        <Container>
            <h1 className='text-center my-4'>Welcome to the recipe finder!</h1>
            <Row>
                <Col xs={4} sm={6} className="mx-auto">
                    <p className='drop-cap'>This is a project I created to exercise my ability to connect with an API, submit data using a form, and display returned information dynamically. </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <RandomRecipe recipeList={{}}/>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default HomePage