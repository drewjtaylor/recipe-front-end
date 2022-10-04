import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchByIngredientForm from './components/SearchByIngredientForm';

import RecipeNavbar from './components/RecipeNavbar';
import RandomRecipe from './components/RandomRecipe';

import Container from 'react-bootstrap/Container';

function App() {

    return ( <Container>
        <RecipeNavbar />
        <RandomRecipe />
        <SearchByIngredientForm />
    </Container>
  );
}

export default App;
