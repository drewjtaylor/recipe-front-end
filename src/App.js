import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchByIngredientForm from './components/SearchByIngredientForm';

import RecipeNavbar from './components/RecipeNavbar';
import RandomRecipe from './components/RandomRecipe';
import RecipeDisplayCard from './components/RecipeDisplayCard';
import HomePage from './pages/HomePage';

import Container from 'react-bootstrap/Container';
import example from './example';

function App() {

    return ( <Container>
        <RecipeNavbar />
        {/* <HomePage />
        <RecipeDisplayCard recipeObject={example}/>
        <RandomRecipe /> */}
        <SearchByIngredientForm />

    </Container>
  );
}

export default App;
