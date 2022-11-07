import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchByIngredientForm from './components/SearchByIngredientForm';

import RecipeNavbar from './components/RecipeNavbar';
// import RandomRecipe from './components/RandomRecipe';
// import RecipeDisplayCard from './components/RecipeDisplayCard';
// import HomePage from './pages/HomePage';

import {Routes, Route} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import RecipeSearch from './pages/RecipeSearch';
// import example from './example';

function App() {

    return ( <Container>
        <RecipeNavbar />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='register' element={<Register />} />
            <Route path='searchByIngredient' element={<SearchByIngredientForm />} />
            <Route path='recipeSearch' element={<RecipeSearch />} />
        </Routes>


        {/* <HomePage />
        <RecipeDisplayCard recipeObject={example}/>
        <RandomRecipe /> */}

    </Container>
  );
}

export default App;
