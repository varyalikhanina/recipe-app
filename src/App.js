import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

function App() {
  
  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('pancakes');

  useEffect(() => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <h1 className="app__title">Food Recipes</h1>
      <p className="app__subtitle">Search your favourite food recipes by typing a dish name or an ingredient you want to use.</p>
      <form onSubmit={getSearch} className="search__form">
        <input type="text" className="search__bar" value={search} onChange={updateSearch} placeholder="Type something, e.g. 'Pizza'"/>
        <button type="submit" className="search__button">Go!</button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            link={recipe.recipe.url}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            labels={recipe.recipe.healthLabels.slice(0, 3)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
